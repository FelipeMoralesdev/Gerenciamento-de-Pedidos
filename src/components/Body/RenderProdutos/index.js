import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity} from 'react-native';
import produtosIniciais from '../ListProdutos';


export default function RenderProdutos() {
  const [produtos, setProdutos] = useState(produtosIniciais);
  const [faturamentoTotal, setFaturamentoTotal] = useState(0);
  const [exibirCarrinho, setExibirCarrinho] = useState(false); 

  const handleQuantidadeChange = (index, text) => {
    // Atualizar a quantidade do produto selecionado
    const novaQuantidade = parseInt(text);
    const novosProdutos = [...produtos];
    novosProdutos[index].quantidade = novaQuantidade;
    setProdutos(novosProdutos);

    // Calcular o novo faturamento total
    const novoFaturamentoTotal = novosProdutos.reduce(
      (total, produto) => total + produto.preco * produto.quantidade,
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
          <View>
            <Text style={styles.titulo}>{produto.nome}</Text>
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

  const renderCarrinho = () => {
    return (
      <View style={{ flex: 1 }}>
        {produtos
          .filter((produto) => produto.quantidade > 0) // Filtrar apenas os produtos com quantidade maior que zero
          .map((produto, index) => renderProduto(produto, index))}
      </View>
    );
  };

  const handleVerCarrinho = () => {
    setExibirCarrinho(!exibirCarrinho);
  };

  return (
    <View style={{ flex: 1 }}>
      {exibirCarrinho ? (
        renderCarrinho() 
      ) : (
        <View>
          {produtos.map((produto, index) => renderProduto(produto, index))}
        </View>
      )}
        <View style={styles.containerFooter}>
        <View>
            <Text>Faturamento total: R$ {faturamentoTotal.toFixed(2)} </Text>
          </View>
          <View>
            <Text>Pedido aprovado?</Text>
          </View>
          <View>
            <Text>Peso total:</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={handleVerCarrinho}>
              <Text style={styles.buttonText}>{exibirCarrinho ? 'Continuar Compra' : 'Ver Carrinho'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
              <Text style={styles.buttonText}>Fechar Pedido</Text>
            </TouchableOpacity>
          </View>
        </View>
          
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    fontWeight: 'bold',
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
  containerFooter: {
    width: "100%",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 50,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
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
