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
    categoria VARCHAR(100)
);
CREATE TABLE categoria_paragem (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_codigo_paragem INT NOT NULL,
    categoria TEXT NOT NULL,
    FOREIGN KEY (id_codigo_paragem) REFERENCES codigo_paragem(codigo) ON DELETE CASCADE
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
