"use client";

import { useState } from "react";
import styles from "./AnimalTabs.module.css";
import CardVisit from "../cardVisit/CardVisit";
import CardVaccin from "../cardVaccin/CardVaccin";
import { formatDate } from "@/helpers/formatDate";

export default function AnimalTabs({ animal, visits, vaccins}) {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      label: "Ses informations",
      content: (
        <>
          <section className={styles.informationContent}>
            <div className={styles.header}>
              <img src="/icons/dog-p.svg" alt="Icône de l'animal" />
              <h2>{animal.species} - {animal.breed}</h2>
            </div>
            <p>Poids : {animal.weight} kg</p>
            <div className={styles.infoRow}>
              <p>Genre : {animal.gender}</p>
              <p className={styles.date}>{formatDate(animal.date_of_birth)}</p>
            </div>
          </section>
         <section className={styles.ownerSection}>
             <h2> Propriétaire de <strong>{animal.name}</strong></h2> 
            <div>
            <img src="/icons/Smile.svg" alt="icone de chien" />
            <p>{animal.owner.name}</p>
            </div>  
            <p>Tel : {animal.owner.phone}</p>
            <p>Email : {animal.owner.email}</p>
         </section>
         </>
      ),
    },
    {
      label: "Consultations",
      content: (
        <ul >
          {visits.map((visit) => (
          <CardVisit  key={visit.id} visit={visit} />
        ))}
        </ul>
      ),
    },
    {
      label: "Vaccins",
      content: (
       <ul >
          {vaccins.map((vaccin) => (
          <CardVaccin  key={vaccin.id} vaccin={vaccin} />
        ))}
        </ul>
      ),
    },
  ];

  const activeTabData = tabs.find((_ , i) =>i === activeTab);

  return (
    <section>
      <div className={styles.tabButtons}>
        {tabs.map((tab, i) => (
          <button className={activeTab === i? styles.buttonActive : ""}
            key={i}
            onClick={() => setActiveTab(i)}
          >
            {tab.label}
          </button>
        ))}
        </div>
      <section>
        {activeTabData?.content}
      </section>
      </section>
  );
}