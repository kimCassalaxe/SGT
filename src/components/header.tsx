import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

type Props = {
  title: string;
  func: ()=>void;
  icon: any;
};
export default function Header(pro:Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pro.func}>
        <Ionicons name={pro.icon} size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.text}>{pro.title}</Text>
      <Ionicons name="notifications" size={24} color="black" />
    </View>
  );
} 
const styles =  StyleSheet.create({
  container: {
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.11)",
    backgroundColor: "#fff",
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 20,
    height: 60,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
});