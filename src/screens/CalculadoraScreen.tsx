import React from 'react';
import {Text, View} from 'react-native';
import ButtonCalc from '../components/ButtonCalc';
import styles from '../theme/appTheme';
import {useCalculator} from '../hooks/useCalculator';

function CalculadoraScreen() {
  const {
    lastNumber,
    number,
    clear,
    setNumberDisplay,
    positiveNegative,
    deleteLastNumber,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculator();

  return (
    <View>
      {lastNumber !== '0' && <Text style={styles.resultAux}>{lastNumber}</Text>}

      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      <View style={styles.keybContainer}>
        <ButtonCalc action={clear} text="C" color="#9B9B9B" />
        <ButtonCalc action={positiveNegative} text="+/-" color="#9B9B9B" />
        <ButtonCalc action={deleteLastNumber} text="Del" color="#9B9B9B" />
        <ButtonCalc action={btnDividir} text="/" color="#FF9427" />
      </View>

      <View style={styles.keybContainer}>
        <ButtonCalc text="7" action={setNumberDisplay} />
        <ButtonCalc text="8" action={setNumberDisplay} />
        <ButtonCalc text="9" action={setNumberDisplay} />
        <ButtonCalc action={btnMultiplicar} text="X" color="#FF9427" />
      </View>

      <View style={styles.keybContainer}>
        <ButtonCalc text="4" action={setNumberDisplay} />
        <ButtonCalc text="5" action={setNumberDisplay} />
        <ButtonCalc text="6" action={setNumberDisplay} />
        <ButtonCalc action={btnRestar} text="-" color="#FF9427" />
      </View>

      <View style={styles.keybContainer}>
        <ButtonCalc text="1" action={setNumberDisplay} />
        <ButtonCalc text="2" action={setNumberDisplay} />
        <ButtonCalc text="3" action={setNumberDisplay} />
        <ButtonCalc action={btnSumar} text="+" color="#FF9427" />
      </View>

      <View style={styles.keybContainer}>
        <ButtonCalc text="0" action={setNumberDisplay} ancho />
        <ButtonCalc text="." action={setNumberDisplay} />
        <ButtonCalc action={calcular} text="=" color="#FF9427" />
      </View>
    </View>
  );
}

export default CalculadoraScreen;
