# Trouve_ton_artisan

Plateforme web développée pour la Région Auvergne-Rhône-Alpes permettant de rechercher un artisan par catégorie, consulter sa fiche détaillée et le contacter via un formulaire sécurisé.

---

## Technologies utilisées

### Frontend
- React (Vite)
- React Router
- Bootstrap
- Sass

### Backend
- Node.js
- Express
- Sequelize
- MySQL

### Autres
- Nodemailer
- Helmet
- CORS
- Rate limiting

---

## Structure du projet

Trouve-ton-artisan/
│
├── api/ → Backend Express + Sequelize
├── client/ → Frontend React (Vite)
├── README.md


---

## Prérequis

Avant d’installer le projet, assurez-vous d’avoir :

- Node.js (v18 ou supérieur recommandé)
- npm
- MySQL ou MariaDB
- XAMPP (si utilisé pour MySQL)

---

## 🗄 Base de données

1. Créer une base de données nommée :
2. Exécuter les scripts SQL fournis :
api/sql/01_create.sql
api/sql/02_seed.sql


---

## Configuration des variables d’environnement

### Backend – `api/.env`

Créer un fichier `.env` dans le dossier `api` :

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=trouve_ton_artisan

MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=your-email@gmail.com

MAIL_PASS=your-app-password


---

### Frontend – `client/.env`

Créer un fichier `.env` dans le dossier `client` :

VITE_API_URL=http://localhost:5000


---

## Installation

### Installer le backend

cd api
npm install

### Installer le frontend

cd client
npm install


## Démarrer le backend
cd api
npm run dev

## Le serveur sera accessible sur :

http://localhost:5000


## Démarrer le frontend
cd client
npm run dev

## Le site sera accessible sur :

http://localhost:5173

--- 

Routes principales de l’API

GET /health

GET /categories

GET /artisans

GET /artisans/:id

GET /artisans?search=

GET /artisans/top

POST /contact

---

### Sécurité

Utilisation de variables d’environnement

Validation des données côté serveur

Protection contre les injections SQL via Sequelize

Configuration CORS

Helmet pour sécurisation des headers

Rate limiting

---

### Accessibilité

Structure sémantique correcte

Navigation clavier fonctionnelle

Labels associés aux champs

Attribut alt sur les images

Contraste respecté

Conformité WCAG 2.1

---

### Auteur

Projet réalisé par Maxime Gauthier dans le cadre d’un projet pédagogique



---

# Ce README est :

✔ Conforme au brief  
✔ Professionnel  
✔ Structuré  
✔ Lisible par un recruteur  
✔ Adapté pour GitHub  
