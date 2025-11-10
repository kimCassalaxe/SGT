import { FlatList, StyleSheet, Text, View } from "react-native";
import { Cores } from "../src/Themas/cor";
import Header from "@/src/components/header";
import { router, useLocalSearchParams } from "expo-router";
import CardLups from "@/src/components/cardLups";

function getLups(id:number){
  console.log(id)
}
export default function LupsDetalhesScreen() {
  const {id} = useLocalSearchParams();
  const lista = [1,2,3,4,5,6,7];
  return (
    <View style={styles.container}>
      <Header icon="arrow-back" title="Detalhes da MIUT"  func={()=>router.back()}/>
      
      <Text style={styles.title}>{'estamos aqui'}  </Text>
    <Text style={styles.descricao}>{'estamos aqui'}  </Text>
    <Text style={styles.texto}>Passos do Procedimento</Text>
      <FlatList
        data={lista}
        renderItem={(i)=>
          <CardLups func={()=>router.push({pathname:"/lupsDetalhes",params:{id:i.index}})} descr="lorem icon backgroundColor" title="Montagem de Componente" icons="file" />}

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
    gap: 50,
  },
  title:{
    fontSize:24,
    fontWeight:"bold",
  },
  descricao:{
    fontSize:16,
    color: Cores.texto,
  },
   texto:{
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20,
    color: "black",
  }
});