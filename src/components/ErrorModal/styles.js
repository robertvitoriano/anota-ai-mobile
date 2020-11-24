import StyleSheet from 'react-native'


const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'aliceblue',
    width: 350,
    height: 220,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 4,
    borderColor: '#907e70',
    borderWidth: 4,
  },
  opacity: {
    flex: 1,
    height: windowHeight,
    width: windowWidth,
    opacity: 0.4,
    backgroundColor: 'black',
    position: 'absolute',
    zIndex: 3,
  },
  confirmButton: {
    backgroundColor: '#e4dfc1',
    width: 100,
    borderRadius: 3,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningText: {
    fontSize: 22,
  },
  warningICon: {
    fontSize: 40,
  },
});

export default styles;