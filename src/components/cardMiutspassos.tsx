import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Cores } from "../Themas/cor";

type Props = {
  id: number;
  text: string;
}
export default function CardMiutsPassos(pro: Props) {

  return (
    <View style={styles.container}>
      <Text style={styles.textNumber}>{pro.id}</Text>
      <Text style={styles.text}>{pro.text}</Text>
    </View>

  );
} 

const styles =  StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center", 
    marginBottom: 2,
    backgroundColor:Cores.white,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  textNumber: {
    width:40,
    height:40,
    justifyContent:"center",
    alignItems:"center",
    borderRadius: 50,
    padding:10,
    color:Cores.texto,
    marginRight: 10,
    backgroundColor: Cores.base,
    fontSize:15,
    fontWeight: "bold",
  },
  text: {
    fontSize:16,
    color: Cores.texto,
  },
});