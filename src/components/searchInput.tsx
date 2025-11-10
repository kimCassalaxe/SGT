
import { StyleSheet, TextInput,TouchableOpacity,View} from "react-native";
import { Cores } from "../Themas/cor";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  search: string;
  setSearch: (text: string) => void;
}
export default function SearchInput(pro: Props) {
  return (
    <View style={styles.searchContainer}>
      <TextInput 
        placeholder="Search..."
      style={styles.textInput} onChangeText={pro.setSearch} value={pro.search} />
      <TouchableOpacity
        onPress={() => console.log("Search pressed")}
      >
        <Ionicons name="search" size={24} color={Cores.blue}/>
      </TouchableOpacity>
    </View>
  );
} 

const styles =  StyleSheet.create({
  searchContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: .3,
    backgroundColor:Cores.white,
    paddingHorizontal: 10,
    rowGap :5,
  },
  textInput : {
    width: "90%",
    backgroundColor: Cores.white,
    fontSize: 18,
   color: "black",
  },
});