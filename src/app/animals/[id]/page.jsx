"use client";

import { useEffect, useState, use } from "react";
import Image from "next/image";
import { getAnimalById } from "../../../data/api"; 
import styles from "./page.module.css";
import AnimalTabs from "../../../components/animalTabs/AnimalTabs";

export default function AnimalDetails({ params }) {
  const { id } = use(params); 

  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    getAnimalById(id)
      .then((data) => {
        const formatted = {
          ...data,
          name: data.nom || data.name,
          species: data.espece || data.species,
          picture: data.image || "/images/default.jpg",
          
          owner: data.utilisateur ? {
              name: data.utilisateur.nom,     
              email: data.utilisateur.email,
              phone: data.utilisateur.telephone || "Non renseigné" 
          } : { name: "Propriétaire inconnu", email: "-", phone: "-" },

          visits: Array.isArray(data.visite) ? data.visite.map(v => ({
            id: v.id,
            date: v.date,
            reason: v.motif, 
            status: v.statut,
            veterinarian: v.utilisateur ? { 
                name: v.utilisateur.nom 
            } : { name: "Non assigné" }
          })) : [],

          vaccines: data.vaccins || [],
        };
        
        setAnimal(formatted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur chargement animal:", err);
        setError(err.message || "Erreur inconnue");
        setLoading(false);
      });
  }, [id]);


  if (loading) return <main className={styles.main}><h1>Chargement du dossier...</h1></main>;
  
  if (error) return (
    <main className={styles.main}>
      <h1 style={{color: 'red'}}>Erreur</h1>
      <p>{error}</p>
      {error.includes("401") && <p>🔒 Vous devez être connecté pour voir ce dossier.</p>}
    </main>
  );

  if (!animal) return <main className={styles.main}><h1>Animal introuvable</h1></main>;


  const visits = animal.visits;
  const vaccins = animal.vaccines;

  return (
    <main className={styles.animalDetails} style={{ position: "relative" }}>
      <h1>Carnet de santé de <strong>{animal.name}</strong></h1>

      <section className={styles.animalDetailsContent}>
        <div className={styles.pictureWrapper}>
          <Image
            src={animal.picture}
            alt={`Photo de ${animal.species}`}
            fill
            loading="eager"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "16px"
            }}
          />
        </div>

        <AnimalTabs animal={animal} visits={visits} vaccins={vaccins} />
      </section>
    </main>
  );
}