import { StyleSheet, Text, Image, TouchableOpacity, Linking, SafeAreaView, View } from "react-native";

const Header = () => {
  const handlePress = () => {
    Linking.openURL("https://www.linkedin.com/company/coco-cia");
  };


  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.titulo}>Gerenciamento de Pedidos</Text>
        <TouchableOpacity onPress={handlePress}>
          <Image style={styles.logo} source={require('../../../assets/logococo.jpg')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  header:{
    flexDirection: "row",
    height: 80,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop:20,
  },
  titulo:{
    fontSize: 20,
  },
  logo:{
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 10,
  }
});

export default Header;
