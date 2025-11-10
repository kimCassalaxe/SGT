import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { Cores } from "../Themas/cor";

type Props = {
  title: string;
  count: string;
  icons: any;
  press?: ()=>void;
}
export default function CardMenu(pro: Props) {
  return (
    <>
      <TouchableOpacity 
        style={styles.container} 
        onPress={pro.press}

      >
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
    borderColor: "#ccc",
    borderWidth: .3,
    backgroundColor:  Cores.white,
    paddingVertical: 10,
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