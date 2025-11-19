import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Cores } from "../Themas/cor";

type Props = {
  id: number;
  title: string;
  text: string;
  img: string;

}
export default function CardLupsPassos(pro: Props) {

  return (
    <View style={styles.container}>
      <Text style={styles.textNumber}>{pro.id}</Text>
      <View >
        <Image source={require('../assets/img/test.png')} resizeMode="cover" style={styles.img}/>
        <Text style={styles.textTitle}>{pro.title}</Text>
        <Text style={styles.text}>{pro.text}</Text>
    </View>
    </View>

  );
} 

const styles =  StyleSheet.create({
  container: {
   
    flexDirection: "row", 
    marginBottom: 2,
    backgroundColor:Cores.white,
    padding: 10,
    borderRadius: 8,
    columnGap:5,
  },
  textTitle:{
    fontSize:18,
    fontWeight:"bold",
    color: Cores.texto,
  },
  textNumber: {
    width:40,
    height:40,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    borderRadius: 50,
    padding:10,
    color:Cores.white,
    backgroundColor: Cores.blue,
    fontSize:15,
    fontWeight: "bold",
  },
  text: {
    boxSizing:"border-box",
    marginTop:5,
    alignSelf:"flex-start",
    fontSize:16,
    color: Cores.texto,
  },img:{
    width:"100%",
    height:"",
  }
});