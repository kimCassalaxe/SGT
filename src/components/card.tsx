import { StyleSheet, Text, TouchableOpacity} from "react-native";
import { Cores } from "../Themas/cor";

type Props = {
  title: string;
  count: number;
  color?: string;
}
export default function Card(pro: Props) {
  return (
    <>
      <TouchableOpacity style={styles.container}>
        <Text style={[styles.textTitle, pro.color ? { color: pro.color } : {}]}>{pro.title}</Text>
        <Text style={styles.textCount}>{pro.count}</Text>
      </TouchableOpacity>
    </>
  );
} 

const styles =  StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: .3,
    backgroundColor:Cores.white,
    paddingHorizontal: 10,
    paddingVertical: 20,
    rowGap :5,
  },
  textTitle: {
    fontSize: 16,
  },
  textCount: {
    fontWeight: "bold",
    fontSize: 24,
   color: "black",
  },
});