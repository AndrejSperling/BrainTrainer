Datenmodell

## Karteikarte

| fieldname | type |
| :--- | :---- |
|  id | Object ID |
| titel | string |
| aufgabe | string |
| antwort | string |
| owner | Object Nutzer |
| lastchange | Datetime |
| typ | int |
| photourl | string |

## Set

| fieldname | type |
| :--- | :---- |
|  id | Object ID |
| Karteikarten | Array: Object Karteikarte |
| tags | Array: Object tag |
| bewertungen | Array: Object Bewertung |
| owner | Object Nutzer |
| lastchange | Datetime |
| visibility | int |
| photourl | string |

## Nutzer

| fieldname | type |
| :--- | :---- |
|  id | Object ID |
| email | string |
| token | string |
| photourl | string |
| customID | int |
| follower | Array: Object Nutzer |
| profileVisibility | int |

## tag

| fieldname | type |
| :--- | :---- |
|  id | Object ID |
| name | string |

## bewertung

| fieldname | type |
| :--- | :---- |
|  id | Object ID |
| score | int |
| beschreibung | string |
| Nutzer | Object Nutzer |
| createdAt | datetime |

## Statistik

| fieldname | type |
| :--- | :---- |
|  id | Object ID |
| Nutzer | Object Nutzer |
| Karteikarte | Object Karteikarte |
| falscheAntworten | int |
| AnzahlVersuche | int |
