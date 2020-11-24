import React, {useState, useEffect} from 'react';
import styles from 'styles.js'
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const ErrorModal = ({onClick, show}) => {

  const myButton = (
    <Icon.Button
      name="facebook"
      backgroundColor="#3b5998"
    >
      Login with Facebook
    </Icon.Button>
  );
  
  const customTextButton = (
    <Icon.Button name="facebook" backgroundColor="#3b5998" size={40}>
      <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>
        Login with Facebook
      </Text>
    </Icon.Button>
  );


  return (
    <>
      {show ? (
        <>
          <View style={styles.opacity} />
          <View style={styles.wrapper}>
            {customTextButton}
            <Text style={styles.warningText}>Ocorreu um erro</Text>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => onClick(false)}>
              <Text>Ok</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : null}
    </>
  );
};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default ErrorModal;
