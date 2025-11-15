-- ============================
-- TABELA: USUARIO
-- ============================
CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    sector VARCHAR(100),
    senha VARCHAR(255) NOT NULL,
    email VARCHAR(120) UNIQUE NOT NULL,
    telefone VARCHAR(20)
);

-- ============================
-- TABELA: LUP
-- ============================
CREATE TABLE lup (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    descricao TEXT
);

-- ============================
-- TABELA: LUP_PASSO
-- (cada LUP pode ter vários passos)
-- ============================
CREATE TABLE lup_passo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_lup INT NOT NULL,
    numero INT NOT NULL,
    texto TEXT NOT NULL,
    foto VARCHAR(255),
    FOREIGN KEY (id_lup) REFERENCES lup(id) ON DELETE CASCADE
);

-- ============================
-- TABELA: MIUT
-- ============================
CREATE TABLE miut (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    descricao TEXT,
    passo TEXT,
    frequencia VARCHAR(50)
);

-- ============================
-- TABELA: CODIGO_PARAGEM
-- ============================
CREATE TABLE codigo_paragem (
    codigo VARCHAR(20) PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    categoria INT NOT NULL,
    FOREIGN KEY (categoria) REFERENCES categoria_paragem(id) ON DELETE SET NULL
);
CREATE TABLE categoria_paragem (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
);

-- ============================
-- TABELA: CHAT
-- ============================
CREATE TABLE chat (
    id INT AUTO_INCREMENT PRIMARY KEY
);

-- ============================
-- TABELA: MENSAGEM
-- ============================
CREATE TABLE mensagem (
    id INT AUTO_INCREMENT PRIMARY KEY,
    texto TEXT NOT NULL,
    data_criacao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    id_usuario INT NOT NULL,
    id_chat INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id) ON DELETE CASCADE,
    FOREIGN KEY (id_chat) REFERENCES chat(id) ON DELETE CASCADE
);

-- ============================
-- TABELA: CHAT_USUARIO
-- (para chats com vários participantes)
-- ============================
CREATE TABLE chat_usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_chat INT NOT NULL,
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_chat) REFERENCES chat(id) ON DELETE CASCADE,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id) ON DELETE CASCADE
);

-- ============================
-- TABELA: TAREFA
-- ============================
CREATE TABLE tarefa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_miut INT NOT NULL,
    data_para_realizar DATE NOT NULL,
    estado_tarefa VARCHAR(50) NOT NULL,
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_miut) REFERENCES miut(id) ON DELETE CASCADE,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id) ON DELETE CASCADE
);




--+++++++++++++++dados ficticois

INSERT INTO codigo_paragem (codigo, nome) VALUES
('P123', 'Falha Elétrica',1),
('P124', 'Problema Mecânico',2),
('P125', 'Nível de Combustível Baixo',4),
('ELC-01', 'Curto-circuito na fiação',1),
('ELC-02', 'Bateria descarregada',3),
('ELC-03', 'Falha no alternador',1),
('AVM-01', 'Superaquecimento do sistema de arrefecimento',2),
('AVM-02', 'Sobre-aquecimento do motor',2),
('AVM-03', 'Falha no sistema de travagem',2),
('FCB-01', 'Depósito completamente vazio',4),
('FCB-02', 'Sistema não injecta combustível',4),
('FCB-03', 'Filtro de combustível entupido',4),
('POP-01', 'Motorista ausente',5),
('POP-02', 'Atraso na operação',5),
('POP-03', 'Erro no planeamento da rota',5),
('CLC-01', 'Chuva intensa',6),
('CLC-02', 'Estrada inundada',6),
('CLC-03', 'Neblina forte',6),
('MNP-01', 'Revisão de rotina',3),
('MNP-02', 'Troca de óleo',1),
('MNP-03', 'Inspeção de pneus',2);
('P125', 'Baixo Nível de Combustível',5),
('ELC-01', 'Curto-circuito na fiação',1),
('ELC-02', 'Bateria descarregada',3),
('ELC-03', 'Falha no alternador',1),
('AVM-01', 'Superaquecimento do sistema de arrefecimento',2),
('AVM-02', 'Sobre-aquecimento do motor',2),
('AVM-03', 'Falha no sistema de travagem',2),
('FCB-01', 'Depósito completamente vazio',4),
('FCB-02', 'Sistema não injecta combustível',4),
('FCB-03', 'Filtro de combustível entupido',4),
('POP-01', 'Motorista ausente',5),
('POP-02', 'Atraso na operação',5),
('POP-03', 'Erro no planeamento da rota',5),
('CLC-01', 'Chuva intensa',6),
('CLC-02', 'Estrada inundada',6),
('CLC-03', 'Neblina forte',6),
('MNP-01', 'Revisão de rotina',7),
('MNP-02', 'Troca de óleo',7),
('MNP-03', 'Inspeção de pneus',7);

INSERT INTO categoria_paragem ( nome) VALUES
('Produção'),
('Mecânica'),
('Elétrica'),
('Combustível'),
('Operacional'),
('Causas Externas'),
('Manutenção');


-- Fim do ficheiro code.sql