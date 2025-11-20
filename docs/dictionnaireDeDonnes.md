# Dictionnaire de données 

| Table        | Code                        | Libellé / Description                         | Type    | Taille | Règles de gestion                                                    |
|--------------|-----------------------------|-----------------------------------------------|---------|--------|-----------------------------------------------------------------------|
| owner        | id_owner                    | Identifiant unique du propriétaire            | integer | -      | obligatoire, unique                                                   |
| owner        | name_owner                  | Nom complet du propriétaire                   | varchar | 100    | obligatoire                                                           |
| owner        | phone_owner                 | Numéro de téléphone du propriétaire           | varchar | 15     | obligatoire                                                           |
| owner        | email_owner                 | Adresse email du propriétaire                 | varchar | 100    | obligatoire, unique                                                   |
| veterinarian | id_veterinarian             | Identifiant unique du vétérinaire             | integer | -      | obligatoire, unique                                                   |
| veterinarian | name_veterinarian           | Nom complet du vétérinaire                    | varchar | 100    | obligatoire                                                           |
| animal       | id_animal                   | Identifiant unique de l’animal                | integer | -      | obligatoire, unique                                                   |
| animal       | name_animal                 | Nom de l’animal                               | varchar | 50     | obligatoire                                                           |
| animal       | species_animal              | Espèce (ex : Chien, Chat)                     | varchar | 50     | obligatoire                                                           |
| animal       | breed_animal                | Race                                          | varchar | 50     | obligatoire                                                           |
| animal       | date_of_birth_animal        | Date de naissance                             | date    | -      | obligatoire                                                           |
| animal       | picture_animal              | URL ou chemin de la photo                     | varchar | 255    | obligatoire                                                           |
| animal       | owner_id_animal             | Identifiant du propriétaire                   | integer | -      | obligatoire, clé étrangère (owner.id_owner)                           |
| visit        | id_visit                    | Identifiant unique de la visite               | integer | -      | obligatoire, unique                                                   |
| visit        | animal_id_visit             | Identifiant de l’animal concerné              | integer | -      | obligatoire, clé étrangère (animal.id_animal)                        |
| visit        | veterinarian_id_visit       | Identifiant du vétérinaire effectuant la visite | integer | -    | obligatoire, clé étrangère (veterinarian.id_veterinarian)           |
| visit        | date_visit                  | Date de la visite                             | date    | -      | obligatoire                                                           |
| visit        | reason_visit                | Motif ou raison de la visite                  | varchar | 255    | obligatoire                                                           |
| visit        | status_visit                | Statut (« à venir », « passée », « annulée ») | varchar | 20     | obligatoire, ENUM                                                     |
| vaccine      | id_vaccine                  | Identifiant unique du vaccin                  | integer | -      | obligatoire, unique                                                   |
| vaccine      | name_vaccine                | Nom du vaccin                                 | varchar | 50     | obligatoire                                                           |
| vaccine      | administration_date_vaccine | Date d’administration                         | date    | -      | nullable                                                              |
| vaccine      | animal_id_vaccine           | Identifiant de l’animal vacciné               | integer | -      | nullable, clé étrangère (animal.id_animal)                           |
| vaccine      | veterinarian_id_vaccine     | Identifiant du vétérinaire ayant injecté      | integer | -      | nullable, clé étrangère (veterinarian.id_veterinarian)              |

---
## Relations du MCD

### Animals → Visits
- 1 animal : 0 à n visites  
- 1 visite : 1 animal obligatoire

### Veterinarians → Visits
- 1 vétérinaire : 0 à n visites  
- 1 visite : 1 vétérinaire obligatoire

### Animals → Vaccines
- 1 animal : 0 à n vaccins  
- 1 vaccin peut être non injecté (animal_id_vaccine = NULL)  
- Si injecté → lié à 1 seul animal

### Veterinarians → Vaccines
- 1 vétérinaire : 0 à n vaccins  
- 1 vaccin peut être non injecté (veterinarian_id_vaccine = NULL)  
- Si injecté → lié à 1 seul vétérinaire


### Owners → Animals
- 1 owner peut posséder 0 à n animals
- 1 animal est obligatoirement lié à 1 owner (owner_id_animal non NULL)