import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Modal } from 'react-native';

export default function Produto() {
    return (
        
        <View style={styles.container}>
            <Image></Image>
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