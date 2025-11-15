import { CategoriaCodigoParada, Categoria } from '../type';
import { getDb } from "./connection";

export function useCodigoParada() {
  async function fetchCodigoParada(){
  try {
    const db = await getDb();
     // Buscar categorias
    const resultCat:Categoria[]|null= await db.getAllAsync(
      "SELECT * FROM categoria_paragem"
    );
   
    const resultCParada:CategoriaCodigoParada[]|null = await db.getAllAsync(`SELECT * FROM codigo_paragem`);
    // Verificar retorno
   
    if(resultCat == null || resultCParada == null){
      console.log("Nenhuma categoria ou código de paragem encontrado.");
      return null; // Nenhuma categoria encontrada
    }
 
    const codigoParadaList:CategoriaCodigoParada[] =[];
    resultCParada.forEach((el) =>{
      resultCat.forEach((e:Categoria)=>{
        if(e.id.toString() == el.categoria){  
            codigoParadaList.push({
              codigo:el.codigo,
            nome:el.nome,
            categoria:e.nome,
          })
        }
      });
    });
    return {list:codigoParadaList,categorias:resultCat};
  } catch (error) {
    console.error("Erro ao buscar códigos de paragem:", error);
    return null;
  }
  }
  return {fetchCodigoParada}
}
 