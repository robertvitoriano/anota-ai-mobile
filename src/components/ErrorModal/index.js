import React,{useState,useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const ErrorModal = ({onClick,show}) => {

  return (
    
     <>
    {show?( <>
      <View style={styles.opacity} />
      <View style={styles.wrapper}>
        <Text style={styles.warningText}>Ocorreu um erro</Text>
        <TouchableOpacity style={styles.confirmButton} onPress={()=>onClick(false)}>
          <Text>Ok</Text>
        </TouchableOpacity>
      </View>
      </>
      ):null}
    </>
  );
};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'aliceblue',
    width: 350,
    height: 220,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
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
  },
  confirmButton:{
    backgroundColor: '#e4dfc1',
    width: 100,
    borderRadius: 3,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningText:{
    fontSize:22
  }
});

export default ErrorModal;
