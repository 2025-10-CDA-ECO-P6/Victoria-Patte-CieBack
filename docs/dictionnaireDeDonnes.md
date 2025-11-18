# Dictionnaire de données

| Table | Code | Libellé / Description | Type | Taille | Règles de gestion |
|-------|------|----------------------|------|--------|-----------------|
| owners | id_owner | Identifiant unique du propriétaire | integer | - | obligatoire, unique |
| owners | name_owner | Nom complet du propriétaire | varchar | 100 | obligatoire |
| owners | phone_owner | Numéro de téléphone du propriétaire | varchar | 15 | obligatoire |
| owners | email_owner | Adresse email du propriétaire | varchar | 100 | obligatoire, unique |
| veterinarians | id_veterinarian | Identifiant unique du vétérinaire | integer | - | obligatoire, unique |
| veterinarians | name_veterinarian | Nom complet du vétérinaire | varchar | 100 | obligatoire |
| animals | id_animal | Identifiant unique de l’animal | integer | - | obligatoire, unique |
| animals | name_animal | Nom de l’animal | varchar | 50 | obligatoire |
| animals | species_animal | Espèce de l’animal (ex : Chien, Chat) | varchar | 50 | obligatoire |
| animals | breed_animal | Race de l’animal | varchar | 50 | obligatoire |
| animals | date_of_birth_animal | Date de naissance de l’animal | date | - | obligatoire |
| animals | picture_animal | URL ou chemin de la photo de l’animal | varchar | 255 | obligatoire |
| animals | owner_id_animal | Identifiant du propriétaire de l’animal | integer | - | obligatoire, clé étrangère (owners.id) |
| visits | id_visit | Identifiant unique de la visite | integer | - | obligatoire, unique |
| visits | animal_id_visit | Identifiant de l’animal concerné par la visite | integer | - | obligatoire, clé étrangère (animals.id) |
| visits | veterinarian_id_visit | Identifiant du vétérinaire qui effectue la visite | integer | - | obligatoire, clé étrangère (veterinarians.id) |
| visits | date_visit | Date de la visite | date | - | obligatoire |
| visits | reason_visit | Motif ou objectif de la visite | varchar | 255 | obligatoire |
| visits | status_visit | Statut de la visite (upcoming, past, cancelled) | varchar | 20 | obligatoire, valeurs ENUM |
| vaccines | id_vaccine | Identifiant unique du vaccin | integer | - | obligatoire, unique |
| vaccines | visit_id_vaccine | Identifiant de la visite à laquelle le vaccin est associé | integer | - | obligatoire, clé étrangère (visits.id) |
| vaccines | name_vaccine | Nom du vaccin | varchar | 50 | obligatoire |
| vaccines | administration_date_vaccine | Date d’administration du vaccin | date | - | nullable |
