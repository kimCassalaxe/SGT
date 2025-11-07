import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, Octicons } from "@expo/vector-icons";
import Header from "../components/header";
import { Cores } from "../Themas/cor";

type Props = {
  title: string;
  count: string;
  icons: any;
}
export default function CardMenu(pro: Props) {
  return (
    <>
      <TouchableOpacity style={styles.container}>
          <Octicons name={pro.icons} size={24} color={Cores.blue} />
        <Text style={styles.textTitle}>{pro.title}</Text>
        <Text style={styles.textDesc}>{pro.count}</Text>
      </TouchableOpacity>
    </>
  );
} 

const styles =  StyleSheet.create({
  container: {
    width: "50%",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#ddd",
    borderWidth: 1,
    backgroundColor:  Cores.white,
    paddingHorizontal: 10,
    paddingVertical: 20,
    gap :5,
  },
  textTitle: {
    fontSize: 16,
    marginTop:10,
    color:  Cores.titleCard,
    fontWeight: "bold",
  
  },
textDesc: {
    fontSize:12,
    color: Cores.descritionCard,
  },
});