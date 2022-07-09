import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function LoginScreen() {
  return (
    <View>
      <Text style={style.title}>VIRTUAL SCREW IN MACHINE</Text>
      <Text style={style.subtitle}>Asistente de roscado CNC</Text>
    </View>
  );
}

const style = StyleSheet.create({
  body: {
    borderColor: 'white',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  subtitle: {
    color: 'white',
    fontWeight: '300',
    fontSize: 20,
  },
});

export default LoginScreen;
