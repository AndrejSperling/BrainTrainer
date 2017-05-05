# Datenmodell

## Karteikarte

| fieldname | type |
| :--- | :---- |
|  id | Object ID |
| titel | string |
| aufgabe | string |
| antwort | string |
| owner | Object Nutzer id |
| lastchange | Datetime |
| typ | int --- |
| photourl | string --- |

## Set

| fieldname | type |
| :--- | :---- |
|  id | Object ID |
| Karteikarten | Array: Object Karteikarte id |
| tags | Array: string |
| bewertungen | Array: Object Bewertung id |
| owner | Object Nutzer id |
| lastchange | Datetime |
| visibility | int --- |
| photourl | string |

## Profil

| fieldname | type |
| :--- | :---- |
|  id --- | Object ID |
| email | string |
| oauthtoken | string |
| photourl | string |
| follower | Array: Object Nutzer id |
| visibility | int --- |
| Sets | Array: Object Set id |

## Bewertung

| fieldname | type |
| :--- | :---- |
|  id | Object ID |
| score | int |
| kommentar | string |
| Nutzer | Object Nutzer id |
| createdAt | datetime |

## Statistik

| fieldname | type |
| :--- | :---- |
|  id | Object ID |
| Nutzer | Object Nutzer |
| Karteikarte | Object Karteikarte |
| erfolgreich | int |
| AnzahlVersuche | int |
