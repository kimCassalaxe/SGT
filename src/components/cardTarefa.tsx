import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons} from "@expo/vector-icons";
import { Cores } from "../Themas/cor";

type Props = {
  title: string;
  cod: string;
  data: string;
  estado: string;
  userName?: string;
  longPress?: ()=>void;
}
function corEstado(estado:string){
  if(estado.toLowerCase() === 'feito') 
    return {color:Cores.green,backgroundColor:Cores.greenLight}
  else if(estado.toLowerCase() === 'a fazer') return {color:Cores.blue,backgroundColor:Cores.blueLight  }
  else if(estado.toLowerCase() === 'em curso') return {color:Cores.orange,backgroundColor:Cores.orangeLight  }
}
function statusIcon(estado:string){
  if(estado.toLowerCase() === 'feito') 
    return 'checkmark-circle-outline'
  else if(estado.toLowerCase() === 'a fazer') return 'warning-outline'
  else if(estado.toLowerCase() === 'em curso') return 'sync'
}
export default function CardTarefa(pro: Props) {

  return (
    <TouchableOpacity 
      onLongPress={()=>{pro.longPress && pro.longPress()}}
      style={styles.container}>
      <View style={styles.descr}>   
        <View> 
          <Text style={styles.textTitle}>{pro.title}</Text>
          <Text style={styles.textCount}>{pro.cod}</Text>
        </View>
       <View style={[styles.estado,corEstado(pro.estado)]}>
        <Ionicons name={statusIcon(pro.estado)} size={18} color={corEstado(pro.estado)?.color} />
        <Text style={[styles.status,{color:corEstado(pro.estado)?.color}]}>{pro.estado}</Text>
        </View> 
        </View>

      <View style={styles.frequenceTime}>
        <View style={styles.textBox}>
          <Ionicons name="calendar-clear-outline" size={18} />
          <Text style={styles.texto}>Vence em:{pro.data}</Text>
        </View>
        <View style={styles.textBox}>
          <Ionicons name="person-outline" size={18} />
          <Text style={styles.textDate}>{pro.userName}</Text>
          </View>
        </View>
  </TouchableOpacity>

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
  descr:{
    flexDirection:"row",
    justifyContent:"space-between",
  },estado:{
    flexDirection:"row",
    alignItems:"center",
    gap:4,
    alignSelf:"flex-start",
    borderRadius:40,
    paddingHorizontal:8,
    paddingVertical:2,

  },textTitle: {
    marginBottom:6,
    fontSize: 20,
    fontWeight: "bold",
  },
  textCount: {
    fontSize:16,
    color: Cores.texto,
  },
  frequenceTime:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:12,
  },status:{
    flexDirection:"row",
    alignItems:"center",
    gap:4,  
  },
  textBox:{
    flexDirection:"row",
    alignItems:"center",
    gap:4,
  }
  ,
  
  texto:{
    fontSize:10,
    color: Cores.texto,
  },
  textDate:{
    fontSize:12,
    color: Cores.texto,
  }
});