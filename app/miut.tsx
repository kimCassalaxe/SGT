import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Cores } from "../src/Themas/cor";
import Header from "@/src/components/header";
import { router} from "expo-router";
import SearchInput from "@/src/components/searchInput";
import CardMiuts from "@/src/components/cardMiuts";


export default function MiutScreen() {
  const [search, setSearch] = useState("");
  const lista = [1,2,3,4,5,6,7];

  return (
    <View style={styles.container}>
      <Header icon="arrow-back" title="MIUTs"  func={()=>router.back()}/>
      <SearchInput search={search} setSearch={setSearch} />
      <FlatList
        data={lista}
        renderItem={(i)=>
          <CardMiuts
            func={()=>router.push({
              pathname:"/MiutDetalhes",
              params:{id: i.index}
            })} 
            descr="lorem icon  backgroundColor" 
            title="Montagem de Componente" icons="file" 
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