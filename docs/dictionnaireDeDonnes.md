# Dictionnaire de données

## Table: animals
| Attribute       | Type     | Required | Description                                      |
|-----------------|---------|---------|-------------------------------------------------|
| id              | integer | Yes     | Unique identifier of the animal                |
| name            | varchar | Yes     | Name of the animal                              |
| species         | varchar | Yes     | Species of the animal (e.g., Dog, Cat)         |
| breed           | varchar | Yes      | Breed of the animal                             |
| date_of_birth   | date    | Yes      | Date of birth of the animal                     |
| picture         | varchar | Yes      | URL or path to the animal's picture            |
| owner           | varchar | Yes      | Name of the owner                               |

---

## Table: vaccines
| Attribute          | Type     | Required | Description                                           |
|-------------------|---------|---------|------------------------------------------------------|
| id                | integer | Yes     | Unique identifier of the vaccine record             |
| animal_id         | integer | Yes     | Foreign key referencing the related animal          |
| name              | varchar | Yes     | Name of the vaccine                                  |
| administration_date | date   | No     | Date when the vaccine was administered               |

---

## Table: visits
| Attribute   | Type     | Required | Description                                      |
|------------|---------|---------|-------------------------------------------------|
| id         | integer | Yes     | Unique identifier of the visit                  |
| animal_id  | integer | Yes     | Foreign key referencing the related animal     |
| date       | date    | Yes     | Date of the visit                               |
| reason     | varchar | Yes     | Reason or purpose of the visit                  |

---

## Relationships
| From      | To       | Type      | Description                                   |
|-----------|---------|-----------|-----------------------------------------------|
| animals   | vaccines | 1 → N     | One animal can have multiple vaccines        |
| animals   | visits   | 1 → N     | One animal can have multiple visits          |
