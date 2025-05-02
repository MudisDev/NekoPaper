CREATE DATABASE NekoPaper;

USE NekoPaper;
SHOW TABLES;
SHOW DATABASES;

CREATE TABLE Usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    username VARCHAR(30) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    password TEXT NOT NULL,
    genero VARCHAR(20) DEFAULT NULL,
    telefono VARCHAR(10) DEFAULT NULL,
    foto_perfil TEXT DEFAULT NULL
);

CREATE TABLE Etiqueta (
    id_etiqueta INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    api_origen VARCHAR(20) NOT NULL
);

CREATE TABLE Imagen (
    id_imagen INT AUTO_INCREMENT PRIMARY KEY,
    url TEXT NOT NULL,
    api_origen VARCHAR(20) NOT NULL,
    artista VARCHAR(50) DEFAULT NULL,
    clasificacion VARCHAR(15) NOT NULL,
    url_fuente TEXT DEFAULT NULL,
    fecha_insercion DATETIME DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    id_imagen_api VARCHAR(30) NOT NULL
);

CREATE TABLE Favorito (
    id_favorito INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_imagen INT NOT NULL,
    fecha_favorito DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES Usuario (id_usuario) ON DELETE CASCADE,
    FOREIGN KEY (id_imagen) REFERENCES Imagen (id_imagen) ON DELETE CASCADE
);

DROP TABLE usuario;
DROP TABLE etiqueta;
DROP TABLE imagen;
DROP Table favorito;


use nekopaper;