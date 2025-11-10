import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons} from "@expo/vector-icons";
import { Cores } from "../Themas/cor";
import { Sizes } from "../Themas/sizes";

type Props = {
  title: string;
  cod: string;
  data: string;
}
export default function CardMiutsDescription(pro: Props) {

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{pro.title}</Text>
      <Text style={styles.textCount}>{pro.cod}</Text>
      <View style={styles.frequenceTime}>
        <Ionicons name="calendar-clear-outline" size={18} />
        <View style={styles.textBox}>
          <Text style={styles.texto}>Ultima realização</Text>
          <Text style={styles.textDate}>{pro.data}</Text>
        </View>
            </View>
          </View>

  );
} 

const styles =  StyleSheet.create({
  container: {
    marginBottom: 15,
    borderRadius: 10,
    borderColor: "#d8d8d8ff",
    borderWidth: .3,
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.11)",
    backgroundColor:Cores.white,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  textTitle: {
    fontSize: Sizes.title,
    fontWeight: "bold",
  },
  textCount: {
    fontSize:18,
    color: Cores.texto,
  },
  frequenceTime:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:12,
    borderColor: "#d8d8d8ff",
    borderTopWidth: 1,
  },
  textBox:{
    marginLeft:8,
  }
  ,
  texto:{
    padding: 3,
    fontSize:14,
    color: Cores.texto,
  },
  textDate:{
    padding: 3,
    fontSize:14,
    fontWeight:"bold",
    color: Cores.texto,
  }
});