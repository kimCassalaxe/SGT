import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Cores } from "../Themas/cor";
import { Categoria} from "../type";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  data: Categoria[];
  icon?: any;
  onSelect:(nome:string|null)=> void;
}
export default function CarrosselStatus(pro: Props) {
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
              onPress={() => {
                //verifica se a estado que foi clicado ja esta marcada. Se ja, desmarca se nao volta a marcar
                if(selectedId && (selectedId === item.id)){
                  setSelectedId(null);
                  pro.onSelect(null)
                  console.log('clico2');
                }else{
                  setSelectedId(item.id);
                  pro.onSelect(item.nome);
                  console.log('clico1');
                }

              }}
              style={[
                styles.container,
                isSelected && {
                  backgroundColor: Cores.blueLight,

                }
              ]}
            >
              <Text style={[styles.text, isSelected && { color: Cores.blue, fontWeight: "bold" }]}>
                {item.nome}
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