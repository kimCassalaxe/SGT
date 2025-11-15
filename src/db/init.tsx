import { getDb } from "./connection";

export async function initDB() {
  console.log("Iniciando banco de dados...");
  const db = await getDb();
  /*
  // Apagar tabelas (uma por vez)
  await db.execAsync(`DROP TABLE IF EXISTS codigo_paragem;`);
  await db.execAsync(`DROP TABLE IF EXISTS categoria_paragem;`);

  // Criar categoria primeiro
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS categoria_paragem (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL
    );
  `);

  // Criar tabela de códigos
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS codigo_paragem (
      codigo TEXT PRIMARY KEY,
      nome TEXT NOT NULL,
      categoria INTEGER NOT NULL,
      FOREIGN KEY (categoria) REFERENCES categoria_paragem(id) ON DELETE SET NULL
    );
  `);

  // Inserir categorias
  await db.execAsync(`
    INSERT INTO categoria_paragem (nome) VALUES
    ('Produção'),
    ('Mecânica'),
    ('Elétrica'),
    ('Combustível'),
    ('Operacional'),
    ('Causas Externas'),
    ('Manutenção');
  `);

  // Inserir códigos
  await db.execAsync(`
    INSERT INTO codigo_paragem (codigo, nome, categoria) VALUES
    ('P123', 'Falha Elétrica', 1),
    ('P124', 'Problema Mecânico', 2),
    ('P125', 'Nível de Combustível Baixo', 4),
    ('ELC-01', 'Curto-circuito na fiação', 1),
    ('ELC-02', 'Bateria descarregada', 3),
    ('ELC-03', 'Falha no alternador', 1),
    ('AVM-01', 'Superaquecimento do sistema de arrefecimento', 2),
    ('AVM-02', 'Sobre-aquecimento do motor', 2),
    ('AVM-03', 'Falha no sistema de travagem', 2),
    ('FCB-01', 'Depósito completamente vazio', 4),
    ('FCB-02', 'Sistema não injecta combustível', 4),
    ('FCB-03', 'Filtro de combustível entupido', 4),
    ('POP-01', 'Motorista ausente', 5),
    ('POP-02', 'Atraso na operação', 5),
    ('POP-03', 'Erro no planeamento da rota', 5),
    ('CLC-01', 'Chuva intensa', 6),
    ('CLC-02', 'Estrada inundada', 6),
    ('CLC-03', 'Neblina forte', 6),
    ('MNP-01', 'Revisão de rotina', 7),
    ('MNP-02', 'Troca de óleo', 7),
    ('MNP-03', 'Inspeção de pneus', 7);
  `);
  */
  console.log("Banco iniciado com sucesso!");
}
