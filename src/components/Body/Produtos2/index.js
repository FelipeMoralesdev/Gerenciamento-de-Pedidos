import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

const produtosIniciais = [
  {
    nome: 'Coco Flocado',
    preco: 10.5,
    unidade: 'kg',
    imagem: require('../../../../assets/fotos/pd2-coco-flocado-umido-e-adocado-1kg-1.png'),
    quantidade: 0,
  },
  {
    nome: 'Coco Ralado Médio',
    preco: 5.5,
    unidade: 'kg',
    imagem: require('../../../../assets/fotos/pd7-coco-ralado-medio-1kg-1.png'),
    quantidade: 0,
  },
  // adicione mais produtos aqui
];

export default function Produtos2() {
  const [produtos, setProdutos] = useState(produtosIniciais);
  const [faturamentoTotal, setFaturamentoTotal] = useState(0);

  const handleQuantidadeChange = (index, text) => {
    const novaQuantidade = parseInt(text);
    const novosProdutos = [...produtos];
    novosProdutos[index].quantidade = novaQuantidade;
    setProdutos(novosProdutos);
    const novoFaturamentoTotal = novosProdutos.reduce(
      (total, produto) => total + (produto.preco * produto.quantidade),
      0
    );
    setFaturamentoTotal(novoFaturamentoTotal);
  };

  const renderProduto = (produto, index) => {
    const valorTotal = produto.preco * produto.quantidade;

    return (
      <View style={styles.container} key={index}>
        <Image style={styles.imagem} source={produto.imagem} />

        <View style={styles.info}>
          <View style={styles.titulo}>
            <Text>{produto.nome}</Text>
          </View>

          <View style={styles.linha}>
            <Text>Preço: R$ {produto.preco}</Text>
          </View>

          <View style={styles.linha}>
            <Text>Quantidade:</Text>
            <TextInput
              style={styles.inputQuantidade}
              value={produto.quantidade.toString()}
              keyboardType="numeric"
              onChangeText={(text) => handleQuantidadeChange(index, text)}
            />
          </View>

          <View style={styles.linha}>
            <Text>Unidade: {produto.unidade}</Text>
          </View>

          <View style={styles.linha}>
            <Text>Valor total: R$ {valorTotal.toFixed(2)}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Text>Faturamento total: R$ {faturamentoTotal.toFixed(2)}</Text>
      {produtos.map((produto, index) => renderProduto(produto, index))}
    </View>
  );
}









const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  titulo: {
    marginVertical: 5,
  },
  imagem: {
    width: '50%',
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  inputQuantidade: {
    marginLeft: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 5,
    width: 50,
    textAlign: 'center',
  },
});
