import { FlatList, StyleSheet, Text, View } from "react-native";
import { Cores } from "../src/Themas/cor";
import Header from "@/src/components/header";
import { router, useLocalSearchParams } from "expo-router";
import CardMiutsDescription from "@/src/components/cardMiutsDescription";
import CardMiutsPassos from "@/src/components/cardMiutspassos";
import { Style } from "@/src/Themas/templatBase";
import { Milt } from '../src/type';

function getLups(id:number){
  console.log(id)
}
export default function MiutDetalhesScreen() {
  const {milt} = useLocalSearchParams();
  console.log(milt);
  const miltStr = Array.isArray(milt) ? milt[0] : milt;
  const miltDet = JSON.parse(miltStr);
  console.log("===================");
  console.log(miltDet);
  const passos = miltDet.passos;
  return (
    <View style={[Style.container,styles.container]}>
      <Header icon="arrow-back" title="Detalhes da MIUT"  func={()=>router.back()}/>
      <CardMiutsDescription title={miltDet.nome} cod={miltDet.descricao} data="10 Agosto 2024" />
      <Text style={styles.texto}>Passos do Procedimento</Text>
      <FlatList
        data={passos}

        renderItem={(i)=>
          <CardMiutsPassos id={i.item.numero} text={i.item.texto} />}

      />
    </View>
    

  );
} 
const styles =  StyleSheet.create({
  container: {
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