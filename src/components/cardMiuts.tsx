import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { Cores } from "../Themas/cor";

type Props = {
  title: string;
  descr: string;
  color?: string;
  icons?: any;
  func: any;
}
export default function CardMiuts(pro: Props) {

  return (
    <>
      <TouchableOpacity 
        style={styles.container} 
        onPress={pro.func}
      >
      <View>
        <Text style={styles.textTitle}>{pro.title}</Text>
        <Text style={styles.textCount}>{pro.descr}</Text>
        <Text style={styles.textFrequenc}>{pro.descr}</Text>
      </View>
      <Octicons name="chevron-right" size={20} color={Cores.descritionCard} />
    </TouchableOpacity>
  </>
  );
} 

const styles =  StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    
    marginBottom: 15,
    borderRadius: 10,
    borderColor: "#d8d8d8ff",
    borderWidth: .3,
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.11)",
    backgroundColor:Cores.white,
    paddingVertical: 20,
    paddingHorizontal: 10,
    rowGap :5,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textCount: {
    fontSize:12,
    color: Cores.texto,
  },
  textFrequenc:{
    alignSelf:"flex-start",
    marginTop:8,
    borderRadius: 8,
    padding: 3,
    paddingHorizontal:6,
    fontSize:8,
    backgroundColor: Cores.blueLight,
    color: Cores.blue,
  }
});