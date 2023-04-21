import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './src/components/Header';
import Body from './src/components/Body';
import Footer from './src/components/Footer';
import Produtos from './src/components/Body/Produtos';
import Produtos2 from './src/components/Body/Produtos2';


export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Header/>
        <Body/>
        <Produtos2/>

      </ScrollView>
      <Footer/>


      

      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 0,
  },

  
});
