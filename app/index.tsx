import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Card from "../src/components/card";
import CardMenu from "../src/components/cardMenu";
import Header from "../src/components/header";
import { Cores } from "../src/Themas/cor";


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header title="Home" func={() => {}} icon="menu" />
      <Text style={styles.text}>Tarefas</Text>
      <View style={styles.containerCards}>
        <Card title="pendente" count={8} color={Cores.orange }/>
        <Card title="em progresso" count={5} color={Cores.blue} />
        <Card title="concluída" count={12}  color={Cores.green} />
      </View>
      <Text style={styles.text}>Acesso rapido</Text>
      <View style={styles.gridContainer}>
        <View style={styles.lineContainer}>
          <CardMenu 
            title="LUPs" 
            count="Lição de um ponto" 
            icons="light-bulb"
            press={()=>{router.push("/lups")}}
          />
          <CardMenu 
            title="MIUTs"
            count="Manutenção industrial" icons="briefcase"
            press={()=>router.push('/miut')}
          />
        </View>
        <View style={styles.lineContainer}>
          <CardMenu 
            title="Paradas" 
            count="Codigos de paradas" icons="square-circle"
            press={()=>router.push('/codigoParada')}
          />
        <CardMenu 
          title="Tarefas" 
          count="Todas as tarefas" icons="check-circle"
          press={()=>router.push('/Tarefas')}
        />
        </View>
        <View style={styles.lineContainer}>
          <CardMenu title="Chat" count="Mensagens da Equipe" icons="report"/>
        <CardMenu title="Configurações" count="ajuste do app" icons="gear"/>
        </View>
        
        
        
      </View>
    </View>
    

  );
} 
const styles =  StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: Cores.fundo,
    paddingHorizontal: 10,
    paddingTop: 50, 

  },
  text:{
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20,
    color: "black",
  },
  containerCards: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
 
  },
  gridContainer: {
    width:"100%",
    gap: 6,
  },
  lineContainer: {
    flexDirection: "row",
    justifyContent:"center",
    alignItems:'center',
    width: "100%",
    columnGap: 10,
    paddingHorizontal:5,
  },
});