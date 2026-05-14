CREATE DATABASE IF NOT EXISTS trouve_ton_artisan;
USE trouve_ton_artisan;


--Créations des catégories du menu--

CREATE TABLE categories (
    id INT PRIMARY KEY auto_increment,
    nom VARCHAR(100) NOT NULL
) engine=InnoDB;

--Créations des spécialités--

CREATE TABLE specialities (
    id INT PRIMARY KEY auto_increment,
    nom VARCHAR(100) NOT NULL,
    category_id INT NOT NULL,
    constraint fk_speciality_category FOREIGN KEY (category_id) REFERENCES categories(id) on delete CASCADE
) engine=InnoDB;

--Créations des artisans--

CREATE TABLE artisans (
    id INT PRIMARY KEY auto_increment,
    nom VARCHAR(255) NOT NULL,
    note DECIMAL(2.1) DEFAULT 0.0,
    speciality_id INT NOT NULL,
    localisation VARCHAR(255) NOT NULL,
    a_propos TEXT,
    email VARCHAR(255) NOT NULL,
    site_web VARCHAR(255),
    photo VARCHAR(255) DEFAULT 'default.jpg',
    top_artisan BOOLEAN DEFAULT false,
    constraint fk_artisan_speciality FOREIGN KEY (speciality_id) REFERENCES specialities(id) on delete CASCADE
)  engine=InnoDB;