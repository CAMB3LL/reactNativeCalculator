const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 10,
    justifyContent: 'flex-end',
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 20,
  },
  resultAux: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  keybContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default styles;
