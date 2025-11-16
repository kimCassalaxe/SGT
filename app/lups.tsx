import { FlatList, StyleSheet, View } from "react-native";
import { Cores } from "../src/Themas/cor";
import Header from "@/src/components/header";
import { router} from "expo-router";
import CardLups from "@/src/components/cardLups";
import PlusBtn from "@/src/components/plusBtn";


export default function LupsScreen() {
  const lista = [1,2,3,4,5,6,7];

  return (
    <View style={styles.container}>
      <Header icon="arrow-back" title="Instruções de Trabalho"  func={()=>router.back()}/>
        <PlusBtn conf={() => console.log("Plus button pressed")} />
      <FlatList
        data={lista}
        renderItem={(i)=>
          <CardLups 
            func={()=>router.push({pathname:"/lupsDetalhes",params:{id: i.index}})} 
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
    height:"100%",
    backgroundColor: Cores.fundo,
    paddingHorizontal: 10,
    paddingTop: 50,
    justifyContent: "center",
    gap: 50,
  },
 
});