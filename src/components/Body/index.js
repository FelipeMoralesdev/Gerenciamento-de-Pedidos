import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Modal, Image } from 'react-native';

export default function Body() {
  const [cliente, setCliente] = useState(''); 
  const [desconto, setDesconto] = useState('');

  const [nomeSelecionado, setNomeSelecionado] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [modalEstadoVisible, setModalEstadoVisible] = useState(false);


  const [linhaSelecionado, setLinhaSelecionado] = useState('');;
  const [modalLinhaVisible, setModalLinhaVisible] = useState(false);

  const vendedores = [
    { id: '1', nome: 'João' },
    { id: '2', nome: 'Maria' },
    { id: '3', nome: 'Pedro' },
    { id: '4', nome: 'Ana' },
    { id: '5', nome: 'Lucas' },
  ];
  estados = [
    {id: '1', sigla: 'AC'},
    {id: '2', sigla: 'AL'},
    {id: '3', sigla: 'AP'},
    {id: '4', sigla: 'AM'},
    {id: '5', sigla: 'BA'},
    {id: '6', sigla: 'CE'},
    {id: '7', sigla: 'DF'},
    {id: '8', sigla: 'ES'},
    {id: '9', sigla: 'GO'},
    {id: '10', sigla: 'MA'},
    {id: '11', sigla: 'MT'},
    {id: '12', sigla: 'MS'},
    {id: '13', sigla: 'MG'},
    {id: '14', sigla: 'PA'},
    {id: '15', sigla: 'PB'},
    {id: '16', sigla: 'PR'},
    {id: '17', sigla: 'PE'},
    {id: '18', sigla: 'PI'},
    {id: '19', sigla: 'RJ'},
    {id: '20', sigla: 'RN'},
    {id: '21', sigla: 'RS'},
    {id: '22', sigla: 'RO'},
    {id: '23', sigla: 'RR'},
    {id: '24', sigla: 'SC'},
    {id: '25', sigla: 'SP'},
    {id: '26', sigla: 'SE'},
    {id: '27', sigla: 'TO'}
  ];

  linhas = [
    {id: '1', linha: 'Food Service'},
    {id: '2', linha: 'Gourmet'},
    {id: '3', linha: 'Profissional'},
    {id: '4', linha: 'Tradicional'},
    {id: '5', linha: 'Varejo'},
  ];

  const selecionarNome = () => {
    setModalVisible(true);
  };
  const fecharModal = () => {
    setModalVisible(false);
  };


  const selecionarEstado = () => {
    setModalEstadoVisible(true);
  };
  const fecharEstado = () => {
    setModalEstadoVisible(false);
  };


  const selecionarLinha = () => {
    setModalLinhaVisible(true);
  };
  const fecharLinha = () => {
    setModalLinhaVisible(false);
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



      <View style={styles.linha}>
        <Text style={styles.label}>Estado</Text>
        <TouchableOpacity style={styles.selecao} onPress={selecionarEstado}>
          <Text style={styles.selecaoTexto}>{estadoSelecionado || 'Selecione um estado'}</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalEstadoVisible}
        onRequestClose={fecharEstado}
      >
        <TouchableOpacity style={styles.modal} onPress={fecharEstado}>
          <View style={styles.modalContainer}>
            <FlatList
              data={estados}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {
                  setEstadoSelecionado(item.sigla);
                  setModalEstadoVisible(false);
                }}>
                  <Text style={styles.nomeModal}>{item.sigla}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </TouchableOpacity>
      </Modal>



      <View style={styles.linha}>
        <Text style={styles.label}>Linhas</Text>
        <TouchableOpacity style={styles.selecao} onPress={selecionarLinha}>
          <Text style={styles.selecaoTexto}>{linhaSelecionado || 'Selecione uma linha'}</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalLinhaVisible}
        onRequestClose={fecharLinha}
      >
        <TouchableOpacity style={styles.modal} onPress={fecharLinha}>
          <View style={styles.modalContainer}>
            <FlatList
              data={linhas}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {
                  setLinhaSelecionado(item.linha);
                  setModalEstadoVisible(false);
                }}>
                  <Text style={styles.nomeModal}>{item.linha}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </TouchableOpacity>
      </Modal>



      <View style={styles.linha}>
        <Text style={styles.label}>Desconto</Text>
        <TextInput
          style={styles.inputDesconto}
          value={desconto}
          onChangeText={setDesconto}
        />
      </View>

     

    </View>




  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFCC4D',
    padding: 10,
    width: '90%',
    borderRadius: 5,
    alignSelf: 'center',
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
    marginLeft: 10,
  },  
    inputDesconto: {
    backgroundColor: '#fff',
    flex: 2,
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 80,
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
