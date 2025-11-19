"use client";

import { useState } from "react";

export default function AnimalTabs({ animal }) {
  const [activeTab, setActiveTab] = useState("informations");

  const tabs = [
    {
      id: "informations",
      label: "Ses informations",
      content: (
          <div >
            <h1>Informations de {animal.name}</h1>           
         </div>
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