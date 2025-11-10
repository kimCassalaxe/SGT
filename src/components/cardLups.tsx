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
export default function CardLups(pro: Props) {

  return (
    <>
      <TouchableOpacity 
        style={styles.container} 
        onPress={pro.func}
      >
        <Octicons 
          name={pro.icons} 
          style={styles.icon} 
          size={20} 
          color={Cores.blue} 
        />
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>{pro.title}</Text>
          <Text style={styles.textCount}>{pro.descr}</Text>
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
    padding: 20,
    rowGap :5,
  },
  icon: {
    backgroundColor: Cores.iconBackground,
    padding: 12,
    borderRadius: 8,
  },
  textContainer: {
    width: "70%",
  },
  textTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textCount: {
    fontSize:13,
    color: Cores.descritionCard,
  },
});