import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Cores } from "../Themas/cor";
import { Category } from "../type";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  data: Category[];
  icon?: any;
}
export default function CarrosselCaregory(pro: Props) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <View>
      <FlatList 
        data={pro.data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          const isSelected = selectedId === item.id;
          return (
            <TouchableOpacity 
              onPress={() => setSelectedId(item.id)}
              style={[
                styles.container,
                isSelected && {
                  backgroundColor: Cores.blueLight,

                }
              ]}
            >
              <Text style={[styles.text, isSelected && { color: Cores.blue, fontWeight: "bold" }]}>
                {item.categoria}
              </Text>
              {isSelected ? <Ionicons name="close" size={20} color={Cores.blue} /> : null}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
} 

const styles =  StyleSheet.create({
  container: {
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:Cores.gray,
    borderRadius:15,
    paddingHorizontal:8,
    paddingVertical:4,
    margin:3,
  },
  text:{
  }

});