import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, useState } from 'react-native';
import Header from './src/components/Header';
import Body from './src/components/Body';


export default function App() {


  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Header/>
        <Body/>
      </ScrollView>
      


      

      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 0,
    alignSelf: 'stretch',
  },
  scroll: {
    alignSelf: 'stretch', 
  },
  
});
