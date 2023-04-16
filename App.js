import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './src/components/Header';
import Body from './src/components/Body';
import Produtos from './src/components/Body/Produtos';


export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      
      <ScrollView>
      <Body/>
      <Produtos/>
      </ScrollView>
      

      
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
