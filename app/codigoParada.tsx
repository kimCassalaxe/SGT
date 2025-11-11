import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Cores } from "../src/Themas/cor";
import Header from "@/src/components/header";
import { router} from "expo-router";
import SearchInput from "@/src/components/searchInput";
import CardMiuts from "@/src/components/cardMiuts";
import CarrosselCaregory from "@/src/components/carrosselCaregory";
import { Category } from "@/src/type";


export default function CodigoParadaScreen() {
  const [search, setSearch] = useState("");
  const lista = [1,2,3,4,5,6,7];
  const categorias: Category[] = [
  { id: 1, categoria: "Producao" },
  { id: 2, categoria: "Mecanica" },
  { id: 3, categoria: "Causas externas" },
  { id: 4, categoria: "Qualidade" },
  { id: 5, categoria: "Logistica" },
];

  return (
    <View style={styles.container}>
      <Header icon="arrow-back" title="Codigo de Paragens"  func={()=>router.back()}/>
      <SearchInput search={search} setSearch={setSearch} />
      <CarrosselCaregory data={categorias} />
      <FlatList
        data={lista}
        renderItem={(i)=>
          <CardMiuts
            descr="lorem icon  backgroundColor" 
            title="P-234"  
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