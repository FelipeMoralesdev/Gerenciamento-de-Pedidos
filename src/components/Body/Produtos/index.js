import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet,  } from 'react-native';

export default function Produtos() {
    return (
        
        <View style={styles.container}>
            <Image 
            style={styles.imagem} 
            source={require('../../../../assets/pd17-coco-flocado-queimado-100g-1.png')}
            
            
            />

            <View>
                <View style={styles.titulo}>
                    <Text> Coco Flocado</Text>
                </View>

                <View style={styles.linha}>
                    <Text>Preço:</Text>

                </View>

                <View style={styles.linha}>
                    <Text>Quantidade:</Text>
                    <TextInput></TextInput>
                </View>

                <View style={styles.linha}>
                    <Text>Unidade:</Text>

                </View>

                <View style={styles.linha}>
                    <Text>Valor total: </Text>

                </View>




            </View>
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
        resizeMode: "contain",
    },
  });