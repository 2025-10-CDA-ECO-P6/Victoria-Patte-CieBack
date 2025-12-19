"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import CardAnimal from "@/components/cardAnimal/CardAnimal";
import { formatDate } from "@/helpers/formatDate";
import { getAnimals, login } from "@/data/api";

export default function Animals() {
  const [animals, setAnimals] = useState([]);
  const [nextVisit, setNextVisit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initData = async () => {
      try {
        setLoading(true);

        const token = localStorage.getItem("token");
        if (!token) {
          console.log("🔑 Aucune session trouvée, connexion forcée...");
          await login("proprio@gmail.com", "dev1234");
        }

        console.log("🐶 Récupération des animaux...");
        const rawData = await getAnimals();

        const dataList = Array.isArray(rawData) ? rawData : (rawData.data || []);

        const formattedAnimals = dataList.map((animal) => ({
          ...animal,
          id: animal.id,
          name: animal.nom,       
          species: animal.espece, 
          breed: animal.race,     
          picture: animal.photo,  
          weight: animal.poids,
          visits: (animal.visites || []).map((v) => ({
            id: v.id,
            date: v.dateVisite,   
            reason: v.motif,      
            status: v.statut,
            veterinarian: v.veterinaire 
          })),
          owner: animal.proprietaire ? {
            name: `${animal.proprietaire.prenom} ${animal.proprietaire.nom}`,
            email: animal.proprietaire.email,
            phone: animal.proprietaire.telephone
          } : {}
        }));

        setAnimals(formattedAnimals);

        const allVisits = formattedAnimals.flatMap((animal) =>
          animal.visits.map((visit) => ({
            ...visit,
            animalName: animal.name,
            animalPicture: animal.picture,
            animalId: animal.id,
          }))
        );

        const upcomingVisits = allVisits
          .filter((visit) => new Date(visit.date) >= new Date())
          .sort((a, b) => new Date(a.date) - new Date(b.date));

        setNextVisit(upcomingVisits[0] || null);

      } catch (err) {
        console.error("❌ Erreur dans la page Animals:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    initData();
  }, []);


  if (loading) {
    return (
      <main className={styles.main}>
        <p>Chargement de vos compagnons...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className={styles.main}>
        <p style={{ color: "red" }}>Erreur : {error}</p>
        <button onClick={() => window.location.reload()}>Réessayer</button>
      </main>
    );
  }

  return (
    <main>
      <h1>Hello Human!</h1>

      {nextVisit ? (
        <section className={styles.sectionNextVisit}>
          <div>
            <p>
              Prochaine consultation le <strong>{formatDate(nextVisit.date)}</strong> pour{" "}
              <strong>{nextVisit.animalName}</strong>
            </p>
            <Link href={`/visites/${nextVisit.id}`}>Voir la consultation</Link>
          </div>
          
          {nextVisit.animalPicture ? (
            <Image
              src={nextVisit.animalPicture}
              alt={`Photo de ${nextVisit.animalName}`}
              width={132}
              height={132}
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          ) : (
             <div style={{width: 132, height: 132, background: '#ccc', borderRadius: '50%'}}></div>
          )}
        </section>
      ) : (
        <section className={styles.sectionNoNextVisit}>
          <div>
            <p>Aucune consultation à l’horizon, planifiez-en une !</p>
            <Link href="/">Planifier une consultation</Link>
          </div>
        </section>
      )}

      <section className={styles.allAnimals}>
        {animals.length > 0 ? (
          animals.map((animal) => (
            <CardAnimal animal={animal} key={animal.id} />
          ))
        ) : (
          <p>Aucun animal trouvé.</p>
        )}
      </section>
    </main>
  );
}