"use client";

import { useState } from "react";
import styles from "./AnimalTabs.module.css";

export default function AnimalTabs({ animal, visits}) {
  const [activeTab, setActiveTab] = useState("informations");
console.info(visits);
  const tabs = [
    {
      id: "informations",
      label: "Ses informations",
      content: (
        <>
          <section className={styles.informationContent}>
            <h1>Informations de <strong>{animal.name}</strong></h1> 
            <div>
            <img src="/icons/dog.svg" alt="icone de chien" />
            <p>{animal.species} - {animal.breed}</p> 
            <p className={styles.date}>{animal.date_of_birth}</p>
       
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
      id: "consultations",
      label: "Consultations",
      content: (
        <ul >
             {visits.map((visit) => (
          <li 
            key={visit.id}           
          >
            {visit.date}
            {visit.reason}
            {visit.status}
            {visit.veterinarian.name}
          </li>
        ))}
        </ul>
      ),
    },
    {
      id: "vaccins",
      label: "Vaccins",
      content: (
        <ul >
            <li >Aucun vaccin</li>
        </ul>
      ),
    },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <>
      <div className={styles.tabButtons}>
        {tabs.map((tab) => (
          <button className={activeTab === tab.id? styles.buttonActive : ""}
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
        </div>
      <section>
        {activeTabData?.content}
      </section>
      </>
  );
}