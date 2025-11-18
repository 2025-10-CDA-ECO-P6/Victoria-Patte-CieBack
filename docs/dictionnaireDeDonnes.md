# Dictionnaire de données

| Code                  | Libellé / Description                                           | Type       | Taille | Règles de gestion                        |
|----------------------|-----------------------------------------------------------------|-----------|--------|-----------------------------------------|
| id_owner             | Identifiant unique du propriétaire                               | integer   | -      | obligatoire, unique                     |
| name_owner           | Nom complet du propriétaire                                      | varchar   | 100    | obligatoire                              |
| phone_owner          | Numéro de téléphone du propriétaire                              | varchar   | 15     | obligatoire                              |
| email_owner          | Adresse email du propriétaire                                     | varchar   | 100    | obligatoire, unique                      |
| id_veterinarian      | Identifiant unique du vétérinaire                                 | integer   | -      | obligatoire, unique                     |
| name_veterinarian    | Nom complet du vétérinaire                                        | varchar   | 100    | obligatoire                              |
| id_animal            | Identifiant unique de l’animal                                    | integer   | -      | obligatoire, unique                     |
| name_animal          | Nom de l’animal                                                   | varchar   | 50     | obligatoire                              |
| species_animal       | Espèce de l’animal (ex : Chien, Chat)                             | varchar   | 50     | obligatoire                              |
| breed_animal         | Race de l’animal                                                  | varchar   | 50     | obligatoire                              |
| date_of_birth_animal | Date de naissance de l’animal                                     | date      | -      | obligatoire                              |
| picture_animal       | URL ou chemin de la photo de l’animal                              | varchar   | 255    | obligatoire                              |
| owner_id_animal      | Identifiant du propriétaire de l’animal                            | integer   | -      | obligatoire, clé étrangère (owners.id) |
| id_vaccine           | Identifiant unique du vaccin                                       | integer   | -      | obligatoire, unique                     |
| animal_id_vaccine    | Identifiant de l’animal auquel le vaccin est associé               | integer   | -      | nullable, clé étrangère (animals.id)   |
| name_vaccine         | Nom du vaccin                                                     | varchar   | 50     | obligatoire                              |
| administration_date_vaccine | Date d’administration du vaccin                               | date      | -      | nullable                                 |
| id_visit             | Identifiant unique de la visite                                    | integer   | -      | obligatoire, unique                     |
| animal_id_visit      | Identifiant de l’animal concerné par la visite                      | integer   | -      | obligatoire, clé étrangère (animals.id)|
| veterinarian_id_visit| Identifiant du vétérinaire qui effectue la visite                  | integer   | -      | obligatoire, clé étrangère (veterinarians.id) |
| date_visit           | Date de la visite                                                 | date      | -      | obligatoire                              |
| reason_visit         | Motif ou objectif de la visite                                     | varchar   | 255    | obligatoire                              |
| status_visit         | Statut de la visite (`upcoming`, `past`, `cancelled`)             | varchar   | 20     | obligatoire, valeurs ENUM                |
