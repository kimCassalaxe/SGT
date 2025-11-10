import { StyleSheet, TouchableOpacity } from "react-native";
import { Cores } from "../Themas/cor";
import { Octicons } from "@expo/vector-icons";

type Props = {
  conf?: ()=> void;
}
export default function PlusBnt(pro: Props) {
  return (
    <>

      <TouchableOpacity 
        style={styles.container} 
        onPress={pro.conf}
      >
        <Octicons name="plus" size={26} color={Cores.white} />
      </TouchableOpacity>
    </>
  );
} 

const styles =  StyleSheet.create({
  container: {
    width:60,
    height:60,
    borderRadius: 50,
    backgroundColor:Cores.blue,
    padding:10,
    justifyContent:"center",
    alignItems:"center",
    position:"absolute",
    bottom:50,
    right:20,
    zIndex:100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 10,
  },
});