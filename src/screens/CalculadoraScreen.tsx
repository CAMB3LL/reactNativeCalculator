import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import ButtonCalc from '../components/ButtonCalc';
import styles from '../theme/appTheme';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

function CalculadoraScreen() {
  const [lastNumber, setLastNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const lastOperation = useRef<Operadores>();

  const clear = () => {
    setNumber('0');
    setLastNumber('0');
  };

  const setNumberDisplay = (currentNumber: string) => {
    if (number.includes('.') && currentNumber === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (currentNumber === '.') {
        setNumber(number + currentNumber);
      } else if (currentNumber === '0' && number.includes('.')) {
        setNumber(number + currentNumber);
      } else if (currentNumber !== '0' && !number.includes('.')) {
        setNumber(currentNumber);
      } else if (currentNumber === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + currentNumber);
      }
    } else {
      setNumber(number + currentNumber);
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const deleteLastNumber = () => {
    if (number.length === 1 && number === '0') {
      return;
    }

    if (number.length === 2 && number.includes('-')) {
      setNumber('0');
      return;
    }

    setNumber(number.slice(0, number.length - 1));
    return;
  };

  const handleSetLastNumber = () => {
    if (number.endsWith('.')) {
      setLastNumber(number.slice(0, -1));
    } else {
      setLastNumber(number);
    }

    setNumber('0');
  };

  const btnSumar = () => {
    handleSetLastNumber();
    lastOperation.current = Operadores.sumar;
    return;
  };

  const btnRestar = () => {
    handleSetLastNumber();
    lastOperation.current = Operadores.restar;
    return;
  };

  const btnMultiplicar = () => {
    handleSetLastNumber();
    lastOperation.current = Operadores.multiplicar;
    return;
  };

  const btnDividir = () => {
    handleSetLastNumber();
    lastOperation.current = Operadores.dividir;
    return;
  };

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
        <ButtonCalc action={handleSetLastNumber} text="=" color="#FF9427" />
      </View>
    </View>
  );
}

export default CalculadoraScreen;
