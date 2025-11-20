"use client";

import { useState } from "react";

export default function AnimalTabs({ animal}) {
  const [activeTab, setActiveTab] = useState("informations");

  const tabs = [
    {
      id: "informations",
      label: "Ses informations",
      content: (
        <>
          <section>
            <h1>Informations de <strong>{animal.name}</strong></h1> 
            <div>
            <img src="/icons/dog.svg" alt="icone de chien" />
            <p>{animal.species} - {animal.breed}</p>        
            <p className="date">{animal.date_of_birth}</p>
            </div>  
         </section>
         <section className="ownerSection">
             <h2> Propriétaire de <strong>{animal.name}</strong></h2> 
            <div>
            <img src="/icons/dog.svg" alt="icone de chien" />
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
            <li>Aucune consultation</li>
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
      <div>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      <div>
        {activeTabData?.content}
      </div>
    </div>
  );
}