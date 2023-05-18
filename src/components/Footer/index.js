import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";


export default function Footer(props) {
  

  return (
    <View style={styles.container}>
      <View>
        <Text>Faturamento total: R$ {props.faturamentoTotal} </Text>
      </View>
      <View>
        <Text>Pedido aprovado?</Text>
      </View>
      <View>
        <Text>Peso total:</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ver Carrinho</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText}>Fechar Pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "120%",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 50,
    marginLeft: "-10%",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    paddingTop: 5,
  },
  button: {
    backgroundColor: "#FFCC4D",
    height: 50,
    width: "48%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    backgroundColor: "#005d22ff",
    height: 50,
    width: "48%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
