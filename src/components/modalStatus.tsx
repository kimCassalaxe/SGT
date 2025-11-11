import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

type Props ={ 
  visible:boolean, 
  onClose:(visible:boolean)=>void, 
  onSelect:(status:string)=>void }
export default function StatusModal(pro: Props) {
  return (
    <Modal
      visible={pro.visible}
      transparent
      animationType="fade"
    >
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          <Text style={styles.title}>Alterar Status</Text>

          <TouchableOpacity
            style={styles.option}
            onPress={() => {pro.onSelect("em curso"); pro.onClose(false)}}
          >
            <Text style={styles.optionText}>Em Curso</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.option}
            onPress={() => {pro.onSelect("feito");pro.onClose(false)}}
          >
            <Text style={styles.optionText}>Feito</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.option}
            onPress={() => {pro.onSelect("a fazer");pro.onClose(false)}}
          >
            <Text style={styles.optionText}>A Fazer</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnClose} onPress={() => pro.onClose(false)}>
            <Text style={styles.closeText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#fff",
    width: "80%",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 15,
  },
  option: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    textAlign: "center",
  },
  btnClose: {
    marginTop: 10,
  },
  closeText: {
    color: "red",
    fontSize: 15,
  },
});
