-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/
CREATE DATABASE ST;

USE ST;

CREATE TABLE personagem (
idPersonagem INT PRIMARY KEY,
nome VARCHAR(45),
temporada VARCHAR(45)
);

CREATE TABLE usuario (
idUsuario INT AUTO_INCREMENT,
fkPersonagem INT NOT NULL,
nome VARCHAR(45) NOT NULL,
email VARCHAR(100) UNIQUE,
senha VARCHAR(45) NOT NULL,
	CONSTRAINT pkComposta PRIMARY KEY (idUsuario, fkPersonagem),
    CONSTRAINT fkPersonagemUsuario FOREIGN KEY (fkPersonagem) REFERENCES personagem (idPersonagem)
);

CREATE TABLE partida (
idPartida INT PRIMARY KEY AUTO_INCREMENT,
pontuacao INT NOT NULL,
dataHora DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
fkUsuario INT,
	CONSTRAINT fkPartidaUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

INSERT INTO personagem VALUES 
	(1, 'Onze', '1'),
	(2, 'Mike', '1'),
	(3, 'Lucas', '1'),
	(4, 'Will', '1'),
	(5, 'Dustin', '1'),
	(6, 'Max', '2');


-- CREATE DATABASE ST;

-- USE ST;

-- CREATE TABLE usuario (
-- idUsuario INT PRIMARY KEY AUTO_INCREMENT,
-- nome VARCHAR(45),
-- email VARCHAR(100),
-- senha VARCHAR(45)
-- );

-- CREATE TABLE personagem (
-- idPersonagem INT PRIMARY KEY,
-- nome VARCHAR(45),
-- temporada VARCHAR(45)
-- );

-- CREATE TABLE partida (
-- idPartida INT AUTO_INCREMENT,
-- fkUsuario INT,
-- fkPersonagem INT,
-- pontuacao INT,
-- dataHora DATETIME DEFAULT CURRENT_TIMESTAMP,
-- 	CONSTRAINT pkComposta PRIMARY KEY (idPartida, fkUsuario, fkPersonagem),
-- 	CONSTRAINT fkPartidaUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
-- 	CONSTRAINT fkPersonagemPartida FOREIGN KEY (fkPersonagem) REFERENCES personagem(idPersonagem)
-- );

-- INSERT INTO personagem VALUES 
-- 	(1, 'Onze', '1'),
-- 	(2, 'Mike', '1'),
-- 	(3, 'Lucas', '1'),
-- 	(4, 'Will', '1'),
-- 	(5, 'Dustin', '1'),
-- 	(6, 'Max', '2');