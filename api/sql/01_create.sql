-- On supprime la base si elle existe déjà
DROP DATABASE IF EXISTS trouve_ton_artisan;

-- On crée la base de données
CREATE DATABASE trouve_ton_artisan;

-- On sélectionne la base pour travailler dedans
USE trouve_ton_artisan;


-- TABLE CATEGORIE


CREATE TABLE categorie (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL
);


-- TABLE SPECIALITE


CREATE TABLE specialite (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    categorie_id INT NOT NULL,
    FOREIGN KEY (categorie_id) REFERENCES categorie(id)
);


-- TABLE ARTISAN


CREATE TABLE artisan (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(150) NOT NULL,
  note DECIMAL(2,1) NOT NULL,
  ville VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  email VARCHAR(150) NOT NULL,
  site_web VARCHAR(255),     
  image VARCHAR(255),        
  is_top BOOLEAN NOT NULL DEFAULT FALSE,
  specialite_id INT NOT NULL,
  FOREIGN KEY (specialite_id) REFERENCES specialite(id)
);