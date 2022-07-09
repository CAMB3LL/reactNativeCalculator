import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
//import LoginScreen from './src/screens/LoginScreen';
import CalculadoraScreen from './src/screens/CalculadoraScreen';
import styles from './src/theme/appTheme';

//import ContadorScreen from './src/screens/ContadorScreen';

function App() {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalculadoraScreen />
    </SafeAreaView>
  );
}

export default App;
