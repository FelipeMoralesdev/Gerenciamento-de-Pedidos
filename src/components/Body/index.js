import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Modal } from 'react-native';

export default function Body() {
  const [cliente, setCliente] = useState('');
  const [nomeSelecionado, setNomeSelecionado] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const vendedores = [
    { id: '1', nome: 'João' },
    { id: '2', nome: 'Maria' },
    { id: '3', nome: 'Pedro' },
    { id: '4', nome: 'Ana' },
    { id: '5', nome: 'Lucas' },
  ];

  const selecionarNome = () => {
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
  };

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

      <View style={styles.linha}>
        <Text style={styles.label}>Vendedor</Text>
        <TouchableOpacity style={styles.selecao} onPress={selecionarNome}>
          <Text style={styles.selecaoTexto}>{nomeSelecionado || 'Selecione um nome'}</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={fecharModal}
      >
        <TouchableOpacity style={styles.modal} onPress={fecharModal}>
          <View style={styles.modalContainer}>
            <FlatList
              data={vendedores}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {
                  setNomeSelecionado(item.nome);
                  setModalVisible(false);
                }}>
                  <Text style={styles.nomeModal}>{item.nome}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFCC4D',
    padding: 10,
    width: '90%',
    marginBottom: 650,
    borderRadius: 5,
    marginTop: 100,
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
  titulo: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  nome: {
    fontSize: 16,
    marginVertical: 5,
  },
  selecionado: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  popup: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '80%',
    height: '40%',
    borderRadius: 10,
    padding: 20,
    top: '30%',
    left: '10%',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fechar: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalItem: {
    fontSize: 16,
    marginVertical: 5,
  },
});
