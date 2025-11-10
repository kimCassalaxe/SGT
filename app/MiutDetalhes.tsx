import { FlatList, StyleSheet, Text, View } from "react-native";
import { Cores } from "../src/Themas/cor";
import Header from "@/src/components/header";
import { router, useLocalSearchParams } from "expo-router";
import CardMiutsDescription from "@/src/components/cardMiutsDescription";
import CardMiutsPassos from "@/src/components/cardMiutspassos";

function getLups(id:number){
  console.log(id)
}
export default function MiutDetalhesScreen() {
  const {id} = useLocalSearchParams();
  const lista = [1,2,3,4,5,6,7];
  return (
    <View style={styles.container}>
      <Header icon="arrow-back" title="Detalhes da MIUT"  func={()=>router.back()}/>
      <CardMiutsDescription title="Mntagem de Equipamento AZ-800" cod="MIUT-008" data="10 Agosto 2024" />
      <Text style={styles.texto}>Passos do Procedimento</Text>
      <FlatList
        data={lista}

        renderItem={(i)=>
          <CardMiutsPassos id={i.index} text="cortar o cabos"/>}

      />
    </View>
    

  );
} 
const styles =  StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: Cores.fundo,
    paddingHorizontal: 10,
    paddingVertical: 50,
    justifyContent: "center",
    gap: 10,
  },
  textTitle:{
    fontSize:24,
    fontWeight:"bold",
  },
  textCodigo:{
    fontSize:18,
    color: Cores.texto,
  },
  descricao:{
    fontSize:16,
    color: Cores.texto,
  },
   texto:{
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  }
});