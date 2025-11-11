import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Cores } from "../src/Themas/cor";
import Header from "@/src/components/header";
import { router} from "expo-router";
import SearchInput from "@/src/components/searchInput";
import CarrosselCaregory from "@/src/components/carrosselCaregory";
import { Category } from "@/src/type";
import CardTarefa from "@/src/components/cardTarefa";
import StatusModal from "@/src/components/modalStatus"; 
import { Status } from '../src/type';
function handleSelect(value: string, setStatus: (status:string)=>void, setVisibleModal: (visible:boolean)=>void) {
    setStatus(value);
    setVisibleModal(false);
  }




export default function TarefaScreen() {
  const [search, setSearch] = useState("");
  const [visibleModal, setVisibleModal] = useState(false);  
  const [status,setStatus] = useState("");
  const lista = [1,2,3,4,5,6,7];
  const categorias: Category[] = [
  { id: 1, categoria: "A fazer" },
  { id: 2, categoria: "Feito" },
  { id: 3, categoria: "Em curso" },
];

  function handleSelect(value:string) {
    setStatus(value);   // ✅ recebe o estado selecionado do modal
  }
  return (
    <View style={styles.container}>
      
      <Header icon="arrow-back" title="Lista de Tarefas"  func={()=>router.back()}/>
      <SearchInput search={search} setSearch={setSearch} />
      <CarrosselCaregory data={categorias} />
      <FlatList
        data={lista}
        style={{marginBottom: 100}}
        renderItem={(i)=>
          <CardTarefa 
          cod="MUIT-2112"
          data="10 Agosto 2025"
          title="Limpar Razeiras"
          userName="Carla Silva"
          estado={status}
          longPress={() => setVisibleModal(true)}
          />}

      />

      <StatusModal 
        visible={visibleModal} 
        onClose={() => setVisibleModal(false)} 
        onSelect={(status) => handleSelect(status)}
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
  },
})