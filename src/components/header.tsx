import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";


export default function Header() {
  return (
    <View style={styles.container}>
      <Ionicons name="menu" size={24} color="black" />
      <Text style={styles.text}>Usuario</Text>
      <Ionicons name="notifications" size={24} color="black" />
    </View>
  );
} 
const styles =  StyleSheet.create({
  container: {
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