# Datenmodell

## Notecard

| fieldname | type |
| :--- | :---- |
|  id | Object id |
| title | string |
| task | string |
| answer | string |
| owner | Object profile id |
| lastchange | datetime |
| type | int --- |
| photourl | string --- |

## Set

| fieldname | type |
| :--- | :---- |
|  id | Object id |
| notecard | Array: Object notecard id |
| tags | Array: string |
| valuations | Array: Object valuation id |
| owner | Object profile id |
| lastchange | Datetime |
| visibility | int --- |
| photourl | string |

## Profile

| fieldname | type |
| :--- | :---- |
|  id --- | Object ID |
| email | string |
| oauthtoken | string |
| photourl | string |
| follower | Array: Object profile id |
| visibility | int --- |
| Sets | Array: Object Set id |

## Valuation

| fieldname | type |
| :--- | :---- |
|  id | Object ID |
| score | int |
| comment | string |
| profile | Object profile id |
| createdAt | datetime |

## Statistic

| fieldname | type |
| :--- | :---- |
|  id | Object ID |
| profile | Object profile id |
| notecard | Object notecard id |
| successful | int |
| tries | int |
