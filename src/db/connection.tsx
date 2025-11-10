 import * as SQLite from 'expo-sqlite';

 //a conexao comeca com nul
 let db: SQLite.SQLiteDatabase | null = null;

export async function getDb() {
  if (!db) {
    db = await SQLite.openDatabaseAsync('sgt.db');
  }
  return db;
}