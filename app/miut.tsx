import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "@/src/components/header";
import { router} from "expo-router";
import SearchInput from "@/src/components/searchInput";
import CardMiuts from "@/src/components/cardMiuts";
import { Style } from "@/src/Themas/templatBase";
import { useMilt } from "@/src/db/useMilt";
import { Milt } from "@/src/type";


function searchByName(search:string,lista:Milt[]){
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

export default function MiutScreen() {
  const {getAllMilt} = useMilt()
  const [search, setSearch] = useState("");
  const [lista,setLista] = useState<Milt[]>([]);

useEffect(()=>{
    const load = async () => {
    const res= await getAllMilt()
    console.log(search)
      if(res){
        search?
        setLista(searchByName(search,res.list))
        :
        setLista(res.list);
      }
    };
    load(); 
  },[search]);

  return (
    <View style={[Style.container,styles.container]}>
      <Header icon="arrow-back" title="MIUTs"  func={()=>router.back()}/>
      <SearchInput search={search} setSearch={setSearch} />
      {lista.length == 0?
            <Text >Não existe nenhuma paragem com esta descrição</Text>
            :
      <FlatList
        data={lista}
        renderItem={(i)=>
          <CardMiuts
            func={()=>router.push({
              pathname:"/MiutDetalhes",
              params:{milt: JSON.stringify(i.item)}
            })} 
            title={i.item.nome} 
            icons="file" 
            descr={i.item.frequencia} 
          />}

      />
          
    }
    </View>
    

  );
} 
const styles =  StyleSheet.create({
  container: {gap: 20,
  },
   text:{
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  }
 
});