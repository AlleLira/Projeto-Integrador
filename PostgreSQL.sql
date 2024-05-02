--CRIAR TABELAS
CREATE table aluno (
	ID SERIAL PRIMARY KEY,
	nome VARCHAR(150) NOT NULL,
  	email VARCHAR(150) NOT NULL,
  	senha VARCHAR(150) NOT NULL,
  	data_nasc DATE,
  	cep INT,
  	rua VARCHAR(150),
  	numero varchar(20),
  	bairro VARCHAR(150),
  	cidade VARCHAR(150),
  	uf VARCHAR(2)
  );
  
CREATE TABLE departamento (
	id SERIAL PRIMARY key,
	nome VARCHAR(150)
  );
  
CREATE table professor (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(150),
  	id_departamento INT,
	FOREIGN key (id_departamento) REFERENCES departamento (id)
 );
   
CREATE TABLE materia (
	id SERIAL PRIMARY key,
	nome VARCHAR(150),
  	id_professor INT,
  	id_departamento INT,
  	FOREIGN key (id_professor) REFERENCES professor (id),
  	FOREIGN KEY (id_departamento) REFERENCES departamento (id)
);

CREATE table matricula (
  id SERIAL PRIMARY KEY,
  unidade VARCHAR(150),
  id_aluno INT,
  id_materia INT,  
  FOREIGN key (id_aluno) REFERENCES aluno (id),
  FOREIGN key (id_materia) REFERENCES materia (id)
);

-- INSERIR DADOS NAS TABELA

INSERT INTO aluno (nome, email, senha, data_nasc, cep, rua, numero, bairro, cidade, uf) 
VALUES 
	('Maria Souza', 'maria@example.com', 'senha456', '1995-08-20', 12345678, 'Rua B', '456', 'Centro', 'Cidade B', 'RJ'),
	('Pedro Oliveira', 'pedro@example.com', 'senha789', '1993-03-10', 87654321, 'Avenida X', '789', 'Bairro Y', 'Cidade C', 'SP'),
	('Ana Santos', 'ana@example.com', 'senha123', '1997-11-05', 54321678, 'Rua C', '101', 'Bairro Z', 'Cidade D', 'MG'),
	('Carlos Silva', 'carlos@example.com', 'senha456', '1998-06-15', 98765432, 'Avenida Y', '222', 'Bairro X', 'Cidade E', 'RS'),
	('Lucas Oliveira', 'lucas@example.com', 'senha789', '1994-04-25', 13579246, 'Rua D', '777', 'Bairro W', 'Cidade F', 'PR');

INSERT INTO departamento (nome) VALUES 
	('Departamento de Matemática'),
	('Departamento de História'),
	('Departamento de Ciências'),
	('Departamento de Línguas'),
	('Departamento de Arte');

INSERT INTO professor (nome, id_departamento) VALUES 
	('Prof. Maria', 1),
	('Prof. João', 2),
	('Prof. Ana', 3),
	('Prof. Pedro', 4),
	('Prof. Carla', 5);

INSERT INTO materia (nome, id_professor, id_departamento) VALUES 
	('Álgebra Linear', 1, 1),
	('Idade Média', 2, 2),
	('Biologia Celular', 3, 3),
	('Inglês Avançado', 4, 4),
	('Arte Contemporânea', 5, 5);

INSERT INTO matricula (unidade, id_aluno, id_materia) VALUES 
	('A1', 1, 1),
	('B2', 2, 2),
	('C3', 3, 3),
	('D1', 4, 4),
	('E2', 5, 5);
    
    
--CONSULTAS

SELECT * FROM aluno;
SELECT * FROM professor;

SELECT * FROM matricula WHERE unidade = 'B2';

SELECT professor.nome, departamento.nome as departamento
from professor
join departamento on professor.id_departamento = departamento.id;

SELECT aluno.nome, aluno.cidade 
from aluno
join matricula on aluno.id = matricula.id_aluno
JOIN materia ON matricula.id_materia = materia.id and materia.nome = 'Inglês Avançado';

SELECT matricula.id as matricula, matricula.unidade, aluno.nome as nome_aluno, materia.nome as materia
FROM matricula
join aluno on matricula.id_aluno = aluno.id
join materia on matricula.id_materia = materia.id;

SELECT matricula.id as matricula, matricula.unidade, aluno.nome as nome_aluno, materia.nome as materia,
departamento.nome as departamento, professor.nome as professor
FROM matricula
join aluno on matricula.id_aluno = aluno.id
join materia on matricula.id_materia = materia.id
join departamento on materia.id_departamento = departamento.id
join professor on materia.id_professor = professor.id;

SELECT matricula.id as matricula, matricula.unidade, aluno.nome as nome_aluno, materia.nome as materia,
departamento.nome as departamento, professor.nome as professor
FROM matricula
join aluno on matricula.id_aluno = aluno.id
join materia on matricula.id_materia = materia.id
join departamento on materia.id_departamento = departamento.id
join professor on materia.id_professor = professor.id
WHERE materia.nome = 'Idade Média';