# Dictionnaire de données

---

## Table: owners
| Attribute     | Type     | Required | Description                                |
|---------------|----------|----------|--------------------------------------------|
| id            | integer  | Yes      | Unique identifier of the owner             |
| name          | varchar  | Yes      | Full name of the owner                     |
| phone         | varchar  | Yes       | Phone number                               |
| email         | varchar  | Yes       | Email address                              |

---

## Table: veterinarians
| Attribute     | Type     | Required | Description                                |
|---------------|----------|----------|--------------------------------------------|
| id            | integer  | Yes      | Unique identifier of the veterinarian      |
| name          | varchar  | Yes      | Full name of the veterinarian              |

---

## Table: animals
| Attribute       | Type     | Required | Description                                             |
|-----------------|----------|----------|---------------------------------------------------------|
| id              | integer  | Yes      | Unique identifier of the animal                        |
| name            | varchar  | Yes      | Name of the animal                                     |
| species         | varchar  | Yes      | Species of the animal (e.g., Dog, Cat)                |
| breed           | varchar  | Yes      | Breed of the animal                                    |
| date_of_birth   | date     | Yes      | Date of birth of the animal                            |
| picture         | varchar  | Yes      | URL/path to the animal's picture                       |
| owner_id        | integer  | Yes      | **Foreign key referencing the owner** (owners.id)      |

---

## Table: vaccines
| Attribute          | Type     | Required | Description                                             |
|--------------------|----------|----------|---------------------------------------------------------|
| id                 | integer  | Yes      | Unique identifier of the vaccine record                |
| animal_id          | integer  | Yes      | Foreign key referencing the related animal (animals.id) |
| name               | varchar  | Yes      | Name of the vaccine                                     |
| administration_date| date     | No       | Date when the vaccine was administered                  |

---

## Table: visits
| Attribute        | Type     | Required | Description                                                 |
|------------------|----------|----------|-------------------------------------------------------------|
| id               | integer  | Yes      | Unique identifier of the visit                              |
| animal_id        | integer  | Yes      | Foreign key referencing the related animal (animals.id)     |
| veterinarian_id  | integer  | Yes      | **Foreign key referencing the veterinarian** (veterinarians.id) |
| date             | date     | Yes      | Date of the visit                                           |
| reason           | varchar  | Yes      | Reason or purpose of the visit                              |
| status           | varchar  | Yes      | Status (`upcoming`, `past`, `cancelled`)                    |

---

# 🔗 Relationships

| From           | To             | Type  | Description                                          |
|----------------|----------------|-------|------------------------------------------------------|
| owners         | animals        | 1 → N | One owner can have multiple animals                  |
| animals        | vaccines       | 1 → N | One animal can have multiple vaccines                |
| animals        | visits         | 1 → N | One animal can have multiple visits                  |
| veterinarians  | visits         | 1 → N | One veterinarian can conduct multiple visits         |

---

Si tu veux, je peux aussi te générer le **MCD / MERISE**, un **diagramme UML**, ou encore la **création SQL (DDL)** de toutes ces tables.
