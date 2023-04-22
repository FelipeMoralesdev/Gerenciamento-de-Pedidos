import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

const produtos = [
  {
    id: 1,
    imagem: require('../../../../assets/fotos/pd17-coco-flocado-queimado-100g-1.png'),
    titulo: 'Coco Flocado',
    preco: 20,
    unidade: '100g',
  },
];

export default function Produtos({ imagem, titulo, preco, unidade }) {
  const [quantidade, setQuantidade] = useState('0');

  const handleQuantidadeChange = (text) => {
    const parsedValue = parseInt(text, 10);

    if (!isNaN(parsedValue)) {
      setQuantidade(parsedValue.toString());
    }
  };

  const valorTotal = parseFloat(quantidade) * preco;

  return (
    <View style={styles.container}>
      <Image style={styles.imagem} source={imagem} />

      <View>
        <View style={styles.titulo}>
          <Text>{titulo}</Text>
        </View>

        <View style={styles.linha}>
          <Text>Preço: R$ {preco}</Text>
        </View>

        <View style={styles.linha}>
          <Text>Quantidade:</Text>
          <TextInput
            value={quantidade}
            onChangeText={handleQuantidadeChange}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.linha}>
          <Text>Unidade: {unidade}</Text>
        </View>

        <View style={styles.linha}>
          <Text>Valor total: R$ {valorTotal.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
}
export function ListaDeProdutos() {
  return (
    <View>
      {produtos.map((produto) => (
        <Produtos
          key={produto.id}
          imagem={produto.imagem}
          titulo={produto.titulo}
          preco={produto.preco}
          unidade={produto.unidade}
        />
      ))}
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
});


