import { getDb } from "./connection";

export async function initDB() {
  console.log("Iniciando banco de dados...");
  const db = await getDb();

console.log("Banco iniciado com sucesso!!!");
}
