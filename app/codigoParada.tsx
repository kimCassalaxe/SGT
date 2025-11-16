import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Cores } from "../src/Themas/cor";
import Header from "@/src/components/header";
import { router} from "expo-router";
import SearchInput from "@/src/components/searchInput";
import CarrosselCaregory from "@/src/components/carrosselCaregory";
import { useCodigoParada } from "@/src/db/useCodigoParada";
import {  Categoria, CategoriaCodigoParada} from "@/src/type";
import CardParada from "@/src/components/cardParada";

function searchStapedCode(search:string,lista:CategoriaCodigoParada[]){
  //tratar os dados que veem do usuario: colocar tudo em caixa baixa e ignorar os acentos
  const searchNor = search
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "").trim();
  //tratar os dados que veem do lista: colocar tudo em caixa baixa, ignorar os acentos e comparar com o dado do usuario
  return lista.filter(item=>
    item.nome
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .includes(searchNor)
    );
  }
function searchByCategory(category:string,lista:CategoriaCodigoParada[]){
  //tratar os dados que veem do lista: colocar tudo em caixa baixa, ignorar os acentos e comparar com o dado do usuario
  return lista.filter(item=>
    item.categoria == category
    );
  }

export default function CodigoParadaScreen() {
  const {fetchCodigoParada} = useCodigoParada();
  const [search, setSearch] = useState("");
  const [lista,setLista]= useState<CategoriaCodigoParada[]>([]);
  const [catSearch,setCatSearch]= useState<string|null>(null);
  const [categorias,setCategorias] = useState<Categoria[]>([]);
  useEffect(()=>{
    const load = async () => {
    const res= await fetchCodigoParada()
    console.log(catSearch)
      if(res){
        setCategorias(res.categorias);
        catSearch?
         setLista(
          searchStapedCode(
            search,searchByCategory(
              catSearch,res.list
            )
          )
        ):
        setLista(searchStapedCode(search,res.list));
      }
    };
    load(); 
  },[search,catSearch]);
  return (
    <View style={styles.container}>
      <Header icon="arrow-back" title="Codigo de Paragens"  func={()=>router.back()}/>
      <SearchInput search={search} setSearch={setSearch} />
      <CarrosselCaregory onSelect={index=>{setCatSearch(index)}} data={categorias} />
      {lista.length == 0?
      <Text>Não existe nenhuma paragem com esta descrição</Text>
      :
      <FlatList
        data={lista}
        keyExtractor={(item)=>(item.codigo.toString())}
        renderItem={({item})=>
          <CardParada
            descr={item.nome}
            title={item.codigo.toString()} 
            category={item.categoria}
          />}

      />}
    </View>
    

  );
} 
const styles =  StyleSheet.create({
  container: {
    width: "100%",
    height:"100%",
    backgroundColor: Cores.fundo,
    paddingHorizontal: 10,
    paddingTop: 50,
    justifyContent: "center",
    gap: 20,
  },
   text:{
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  }
 
});