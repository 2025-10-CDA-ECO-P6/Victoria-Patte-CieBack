# Carnet de Santé Animalier - Application Next.js

## Description

Cette application permet de gérer les animaux, leurs propriétaires, les visites vétérinaires et les vaccins.  
Elle est développée avec **Next.js** et utilise un fichier JSON (`src/data/data.json`) pour les données initiales (destiné à être remplacé par un back-end dans le futur).

---

## Fonctionnalités principales

- Liste des animaux avec détails (photo, espèce, race, sexe, poids, propriétaire)
- Consultation des visites vétérinaires passées et à venir
- Gestion des vaccins avec statut
- Affichage de la prochaine visite à venir
- Structure de composants modulaires (`CardAnimal`, `AnimalTabs`, `NavBar`, etc.)

---

## Dossier `docs/`

Le dossier `docs` contient :

- `personas.md` : descriptions des utilisateurs types
- `usecase.md` : cas d'utilisation
- `mcd.png` : Modèle Conceptuel de Données (MCD)
- `dictionnaire_de_donnees.md` : dictionnaire de données 


---

## Structure du JSON (`src/data/data.json`)

Le JSON contient les animaux et leurs relations avec les visites et vaccins. 

## Installation et lancement

```bash
# Installer les dépendances
pnpm install

# Lancer le projet en développement
pnpm dev

# Build pour production
pnpm build
```

## Technologies utilisées

- Next.js
- React
- CSS Modules
- JSON local pour les données initiales
- Vercel pour le déploiement

## Structure des dossiers

```
/src
  /components   # composants réutilisables
  /data         # fichier data.json
  /pages        # pages Next.js
  /helpers      # fonctions utilitaires (ex: formatDate)
  /styles       # fichiers CSS
/docs           # personas, usecase, MCD, dictionnaire de données
```

## Deploiement

Le front est déployé sur vercel depuis la branche main.
https://patte-and-cie.vercel.app

