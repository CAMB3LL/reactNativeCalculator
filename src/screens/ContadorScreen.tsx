import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ButtonFAB from '../components/ButtonFAB';

function ContadorScreen() {
  const [valor, setValor] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador: {valor}</Text>

      <ButtonFAB title="-1" onPress={() => setValor(valor - 1)} position="bl" />
      <ButtonFAB title="+1" onPress={() => setValor(valor + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
    top: -15,
  },
});

export default ContadorScreen;
