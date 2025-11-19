import { FlatList, StyleSheet, Text, View } from "react-native";
import { Cores } from "../src/Themas/cor";
import Header from "@/src/components/header";
import { router } from "expo-router";
import CardLupsPassos from "@/src/components/cardLupspassos";
import { Style } from "@/src/Themas/templatBase";


export default function LupsDetalhesScreen() {
  //const {id} = useLocalSearchParams();
  const lista = [1,2,3,4,5,6,7];
  return (
    <View style={[Style.container,styles.container]}>
      <Header icon="arrow-back" title="Detalhes da LUPs"  func={()=>router.back()}/>
      
      <Text style={styles.title}>{'Processo de Limpeza das Maquinas'}  </Text>
    <Text style={styles.descricao}>{'Uma tela detalhada para cada LUP, mostrando nome, descrição e uma sequência de passos com fotos e instruções para facilitar a compreensão'}  </Text>
    <Text style={styles.texto}>Passos do Procedimento</Text>
      <FlatList
        data={lista}
        renderItem={(i)=>
          <CardLupsPassos
            id={i.index} 
            title="Desligar a Energia" 
            text="Certificar-se de que a máquina está completamente desligada antes de iniciar a limpeza." 
            img={"./assets/img/test.png"}
          />
        }
      />
    </View>
    

  );
} 
const styles =  StyleSheet.create({
  container: {

    gap: 10,
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