import {useState, useRef} from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculator = () => {
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

  const calcular = () => {
    const num1 = Number(number);
    const num2 = Number(lastNumber);

    switch (lastOperation.current) {
      case Operadores.sumar:
        setNumber(`${num1 + num2}`);

        break;
      case Operadores.restar:
        setNumber(`${num2 - num1}`);

        break;
      case Operadores.multiplicar:
        setNumber(`${num1 * num2}`);

        break;
      case Operadores.dividir:
        setNumber(`${num2 / num1}`);

        break;
      case undefined:
        break;
    }

    setLastNumber('');
  };

  return {
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
  };
};
