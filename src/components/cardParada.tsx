import { StyleSheet, Text, View } from "react-native";
import { Cores } from "../Themas/cor";

type Props = {
  title: string;
  descr: string;
  category: string;
}
export default function CardParada(pro: Props) {
  return (
    <View style={styles.container}>
        <Text style={styles.textTitle}>{pro.title}</Text>
        <Text style={styles.textCount}>{pro.descr}</Text>
        <Text style={styles.textCategory}>{pro.category}</Text>
  </View>
  );
} 

const styles =  StyleSheet.create({
  container: {
    
    alignItems: "stretch",
    marginBottom: 5,
    borderRadius: 10,
    borderColor: "#d8d8d8ff",
    borderWidth: .3,
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.11)",
    backgroundColor:Cores.white,
    padding: 10,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textCount: {
    fontSize:12,
    color: Cores.texto,
  },
  textCategory:{
    alignSelf:"flex-start",
    marginTop:10,
    borderRadius: 8,
    padding: 3,
    paddingHorizontal:6,
    fontSize:8,
    backgroundColor: Cores.blueLight,
    color: Cores.blue,
  }
});