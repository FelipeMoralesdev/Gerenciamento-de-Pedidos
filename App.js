import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './src/components/Header';
import Body from './src/components/Body';
import RenderProdutos from './src/components/Body/RenderProdutos';


export default function App() {
  

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Header/>
        <Body/>
        <RenderProdutos/>
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
