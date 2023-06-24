CREATE DATABASE IF NOT EXISTS datachat;

USE datachat;

CREATE TABLE Auth (
    id INT(225) NOT NULL AUTO_INCREMENT,
    username VARCHAR(8) DEFAULT NULL,
    password VARCHAR(20) DEFAULT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE sala (
    id INT(225) NOT NULL AUTO_INCREMENT,
    sala VARCHAR(225) DEFAULT NULL,
    PRIMARY KEY (id)
)

CREATE TABLE chat (
    id INT(225) NOT NULL AUTO_INCREMENT,
    sala VARCHAR(225) DEFAULT NULL,
    PRIMARY KEY (id)
)

DESCRIBE user;

INSERT INTO Auth (username, password) VALUES 
  ("Robert", "RobertMarte123"),
  ("Roger", "roger");

INSERT INTO sala (sala) VALUES 
    ("Public");

INSERT INTO chat (chat) VALUES 
  ("Hola amigos");

-- Modificando la fila
ALTER TABLE chat 
CHANGE sala chat VARCHAR(225) DEFAULT NULL;