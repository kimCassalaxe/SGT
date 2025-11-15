import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Cores } from "../src/Themas/cor";
import Header from "@/src/components/header";
import { router} from "expo-router";
import SearchInput from "@/src/components/searchInput";
import CardMiuts from "@/src/components/cardMiuts";
import CarrosselCaregory from "@/src/components/carrosselCaregory";
import { useCodigoParada } from "@/src/db/useCodigoParada";
import {  Categoria, CategoriaCodigoParada} from "@/src/type";


export default function CodigoParadaScreen() {
  const {fetchCodigoParada} = useCodigoParada();
  const [search, setSearch] = useState("");
  const [lista,setLista]= useState<CategoriaCodigoParada[]|undefined>(undefined);
  const [categorias,setCategorias] = useState<Categoria[]>([]);
  useEffect(()=>{
    const load = async () => {
    const res= await fetchCodigoParada()
      if(res){
        setCategorias(res.categorias);
        setLista(res.list);
      }
    };
    load(); 
  },[]);
  return (
    <View style={styles.container}>
      <Header icon="arrow-back" title="Codigo de Paragens"  func={()=>router.back()}/>
      <SearchInput search={search} setSearch={setSearch} />
      <CarrosselCaregory data={categorias} />
      <FlatList
        data={lista}
        keyExtractor={(item)=>item.codigo.toString()}
        renderItem={({item})=>
          <CardMiuts
            descr={item.nome}
            title={item.codigo.toString()} 
          />}

      />
    </View>
    

  );
} 
const styles =  StyleSheet.create({
  container: {
    width: "100%",
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