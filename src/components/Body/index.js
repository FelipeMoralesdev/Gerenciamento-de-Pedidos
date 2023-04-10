import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


export default function Body() {
  const [cliente, setCliente] = useState('');


  return (
    <View style={styles.container}>
      <View style={styles.linha}>
        <Text style={styles.label}>Cliente</Text>
        <TextInput
          style={styles.input}
          value={cliente}
          onChangeText={setCliente}
        />
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>Buscar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFCC4D',
    padding: 10,
    width: "90%",
    marginBottom: 650,
    borderRadius: 5,
    marginTop: 0,
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    marginRight: 10,
    flex: 1,
  },
  input: {
    backgroundColor: '#fff',
    flex: 3,
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  botao: {
    backgroundColor: '#005d22ff',
    borderRadius: 5,
    padding: 10,
    marginLeft: 10,
  },
  botaoTexto: {
    color: '#fff',
  },
});
