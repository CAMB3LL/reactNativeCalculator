import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

function ButtonFAB({title, onPress, position = 'br'}: Props) {
  return Platform.OS === 'ios' ? (
    <View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        style={[
          styles.buttonLocation,
          position === 'br' ? styles.right : styles.left,
        ]}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  ) : (
    <View
      style={[
        styles.buttonLocation,
        position === 'br' ? styles.right : styles.left,
      ]}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('black', false, 30)}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1363DF',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  buttonLocation: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  left: {
    left: 25,
  },
  right: {
    right: 25,
  },
});

export default ButtonFAB;
