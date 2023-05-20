import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity} from 'react-native';

const produtosIniciais = [
  {
    nome: 'Coco Flocado Int Queimado 10X1Kg',
    preco: 10.5,
    unidade: 'Fardo',
    imagem: require('../../../../assets/fotos/pd1-coco-flocado-queimado-1kg-1.png'),
    quantidade: 0,
  },
  {
    nome: 'Coco Flocado Int Umi Ado 10x1kg',
    preco: 5.5,
    unidade: 'Fardo',
    imagem: require('../../../../assets/fotos/pd2-coco-flocado-umido-e-adocado-1kg-1.png'),
    quantidade: 0,
  },
  {
    nome: 'Coco Flocado Integral 10x1kg',
    preco: 5.5,
    unidade: 'Fardo',
    imagem: require('../../../../assets/fotos/pd3-coco-flocado-integral-1kg-1.png'),
    quantidade: 0,
  },
  {
    nome: 'Coco Ralado Composto Fino 10x1kg',
    preco: 5.5,
    unidade: 'Fardo',
    imagem: require('../../../../assets/fotos/pd4-coco-ralado-composto-fino-1kg-1.png'),
    quantidade: 0,
  },
  {
    nome: 'Coco Ralado Composto Médio 10x1kg',
    preco: 5.5,
    unidade: 'Fardo',
    imagem: require('../../../../assets/fotos/pd5-coco-ralado-composto-medio-1kg-1.png'),
    quantidade: 0,
  },
  {
    nome: 'Coco Ralado Fino 10x1kg',
    preco: 5.5,
    unidade: 'Fardo',
    imagem: require('../../../../assets/fotos/pd6-coco-ralado-fino-1kg-1.png'),
    quantidade: 0,
  },
  {
    nome: 'Coco Ralado Médio 10x1kg',
    preco: 5.5,
    unidade: 'Fardo',
    imagem: require('../../../../assets/fotos/pd7-coco-ralado-medio-1kg-1.png'),
    quantidade: 0,
  },
  {
    nome: 'Coco Ralado Úmido e Adoçado 10x1kg',
    preco: 5.5,
    unidade: 'Fardo',
    imagem: require('../../../../assets/fotos/pd8-coco-ralada-umido-e-adocado-1kg-1.png'),
    quantidade: 0,
  },
  {
    nome: 'Coco Flocado Int Umi Ado 5kg',
    preco: 5.5,
    unidade: 'Fardo',
    imagem: require('../../../../assets/fotos/pd10-coco-flocado-umido-e-adocado-5kg-1.png'),
    quantidade: 0,
  },
  {
    nome: 'Coco Flocado Integral 5kg',
    preco: 5.5,
    unidade: 'Fardo',
    imagem: require('../../../../assets/fotos/pd11-coco-flocado-integral-5kg-1.png'),
    quantidade: 0,
  },
  {
    nome: 'Coco Ralado Composto Fino 5kg',
    preco: 5.5,
    unidade: 'Fardo',
    imagem: require('../../../../assets/fotos/pd12-coco-ralado-composto-fino-5kg-1.png'),
    quantidade: 0,
  },
  {
    nome: 'Coco Ralado Composto Médio 5kg',
    preco: 5.5,
    unidade: 'Fardo',
    imagem: require('../../../../assets/fotos/pd13-coco-ralado-composto-medio-5kg-1.png'),
    quantidade: 0,
  },
  {
    nome: 'Coco Ralado Fino 5kg',
    preco: 5.5,
    unidade: 'Fardo',
    imagem: require('../../../../assets/fotos/pd14-coco-ralado-fino-5kg-1.png'),
    quantidade: 0,
  },
  {
    nome: 'Coco Ralado Médio 5kg',
    preco: 5.5,
    unidade: 'Fardo',
    imagem: require('../../../../assets/fotos/pd15-coco-ralado-medio-5kg-1.png'),
    quantidade: 0,
  },
  {
    nome: 'Coco Ralado Úmido E Adoçado 5kg',
    preco: 5.5,
    unidade: 'Fardo',
    imagem: require('../../../../assets/fotos/pd16-coco-ralado-umido-e-adocado-5kg-1.png'),
    quantidade: 0,
  },
  {
    nome: 'Coco Flocado Int Queimado 24x100g',
    preco: 5.5,
    unidade: 'Fardo',
    imagem: require('../../../../assets/fotos/pd17-coco-flocado-queimado-100g-1.png'),
    quantidade: 0,
  },
  {
    nome: 'Coco Flocado Int Umi Ado 24x100g',
    preco: 5.5,
    unidade: 'Fardo',
    imagem: require('../../../../assets/fotos/pd18-coco-flocado-umido-e-adocado-100g-1.png'),
    quantidade: 0,
  },
  {
    nome: 'Coco Flocado Integral 24x100g',
    preco: 5.5,
    unidade: 'Fardo',
    imagem: require('../../../../assets/fotos/pd19-coco-flocado-integral-100g-1.png'),
    quantidade: 0,
  },
  {
    nome: 'Coco Ralado 24x100g',
    preco: 5.5,
    unidade: 'Fardo',
    imagem: require('../../../../assets/fotos/coco-ralado-adocado-100g-1.png'),
    quantidade: 0,
  },
  {
    nome: 'Coco Ralado Úmido E Adoçado 24x100g',
    preco: 5.5,
    unidade: 'Fardo',
    imagem: require('../../../../assets/fotos/coco-ralada-umido-e-adocado-100g-1.png'),
    quantidade: 0,
  },
  {
    nome: 'Coco Ralado Úmido E Adoçado 48x50g',
    preco: 5.5,
    unidade: 'Fardo',
    imagem: require('../../../../assets/fotos/coco-ralada-umido-e-adocado-50g-1.png'),
    quantidade: 0,
  },
  {
    nome: 'Leite De Coco Especial 24x200ml - Pet',
    preco: 5.5,
    unidade: 'Fardo',
    imagem: require('../../../../assets/fotos/leite-de-coco-linha-tradicional-200ml-1.png'),
    quantidade: 0,
  },
  {
    nome: 'Leite De Coco Especial 12x500ml - Pet',
    preco: 5.5,
    unidade: 'Fardo',
    imagem: require('../../../../assets/fotos/leite-de-coco-linha-tradicional-500ml-1.png'),
    quantidade: 0,
  },
  {
    nome: 'Leite De Coco Especial 24x200ml - Pet - Atg 24%',
    preco: 5.5,
    unidade: 'Fardo',
    imagem: require('../../../../assets/fotos/leite-de-coco-linha-gourmet-profissional-200ml-1.png'),
    quantidade: 0,
  },
  {
    nome: 'Leite De Coco Especial 12x500ml - Pet - Atg 24%',
    preco: 5.5,
    unidade: 'Fardo',
    imagem: require('../../../../assets/fotos/leite-de-coco-linha-gourmet-profissional-500ml-1.png'),
    quantidade: 0,
  },
  {
    nome: 'Óleo De Coco Extra Virgem 24x200ml',
    preco: 5.5,
    unidade: 'Fardo',
    imagem: require('../../../../assets/fotos/oleo-de-coco-extra-virgem-200ml-1.png'),
    quantidade: 0,
  },
  {
    nome: 'Óleo De Coco Extra Virgem 12x500ml',
    preco: 5.5,
    unidade: 'Fardo',
    imagem: require('../../../../assets/fotos/oleo-de-coco-extra-virgem-500ml-1.png'),
    quantidade: 0,
  },


  // adicione mais produtos aqui
];

export default function Produtos2() {
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
