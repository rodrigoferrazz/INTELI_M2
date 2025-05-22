CREATE TABLE IF NOT EXISTS curriculos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL, 
    area_de_interesse VARCHAR(50) NOT NULL,  
    idade INT NOT NULL,  
    numero VARCHAR(20) NOT NULL,
    arquivo VARCHAR(255) NOT NULL
);

INSERT INTO curriculos (nome, area_de_interesse, idade, numero, arquivo) VALUES
('Marcela Cruz', 'Financeiro', 45, '(+55) 14 141414141', 'marcelacruz.pdf'),
('Samuel Oliveira', 'Administrativo', 23, '(+55) 14 141414142', 'samueloliveira.pdf'),
('Ronaldo Campos', 'Recursos Humanos', 33, '(+55) 14 141414143', 'ronaldocampos.pdf'),
('Erick Santos', 'Recursos Humanos', 22, '(+55) 14 141414144', 'ericksantos.pdf'),
('Sara Almeida', 'Financeiro', 44, '(+55) 14 141414145', 'saraalmeida.pdf'),
('Victoria Gava', 'Financeiro', 35, '(+55) 14 141414146', 'victoriagava.pdf'),
('Rodrigo Silva', 'Administrativo', 34, '(+55) 14 141414147', 'rodrigosilva.pdf'),
('Adriana Camargo', 'Administrativo', 34, '(+55) 14 141414148', 'adrianacamargo.pdf'),
('Joao Lonn', 'Recepcionista', 34, '(+55) 14 141414149', 'joaolonn.pdf'),
('Bernardo Meirelles', 'Motorista', 23, '(+55) 14 141414150', 'bernardomeirelles.pdf'),
('Danilo de Castro', 'Gestor de Tráfego', 21, '(+55) 14 141414151', 'danilodecastro.pdf'),
('Victor Raymundo', 'Analista de Dados', 22, '(+55) 14 141414152', 'victorraymundo.pdf'),
('Guilherme Holanda', 'Design Gráfico', 41, '(+55) 14 141414153', 'guilhermeholanda.pdf'),
('Leandro Pozza', 'Marketing', 37, '(+55) 14 141414154', 'leandropozza.pdf'),
('Arthur Ossucci', 'Marketing', 36, '(+55) 14 141414155', 'arthurossucci.pdf');