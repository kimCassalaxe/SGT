import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/header";
import Card from "../components/card";
import CardMenu from "../components/cardMenu";
import { Cores } from "../Themas/cor";


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" /> 
      <Header />
      <Text style={styles.text}>Tarefas</Text>
      <View style={styles.containerCards}>
        <Card title="pendente" count={8} color={Cores.orange }/>
        <Card title="em progresso" count={5} color={Cores.blue} />
        <Card title="concluída" count={12}  color={Cores.green} />
      </View>
      <Text style={styles.text}>Acesso rapido</Text>
      <View style={styles.gridContainer}>
        <View style={styles.lineContainer}>
          <CardMenu title="LUPs" count="Lição de um ponto" icons="light-bulb"/>
          <CardMenu title="MIUTs" count="Manutenção industrial" icons="briefcase"/>
        </View>
        <View style={styles.lineContainer}>
          <CardMenu title="Paradas" count="Codigos de paradas" icons="square-circle"/>
        <CardMenu title="Tarefas" count="Todas as tarefas" icons="check-circle"/>
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
    backgroundColor: Cores.fundo,
    paddingHorizontal: 10,
    paddingTop: 50,
    justifyContent: "center",

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
    gap: 5,
  },
  gridContainer: {
    width: "100%",
    justifyContent: "space-between",
    gap: 6,
  },
  lineContainer: {
    flexDirection: "row",
    width: "100%",
    gap: 10,
  },
});