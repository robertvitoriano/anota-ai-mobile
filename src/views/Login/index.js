/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import ErrorModal from './../../components/ErrorModal';
import api from './../../services/api.js';
import loginBackground from './../../assets/login_background.png';
import asyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [isKeyBoardOpen, setIsKeyBoardOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleLogin = async() => {
    console.log('this is logging');
    try {

      const response = await api.post('/users/login', {
        email: email,
        password: password,
      });

      if(!response)  return setShowErrorModal(true);

      
      const {token, user} = response.data;
      await asyncStorage.setItem('Authorization', token);
      await asyncStorage.setItem('userId', user._id);
      navigation.navigate('Home');


    } catch (e) {
      console.log('Error', e);
      setShowErrorModal(true)
    }

    
  };

  return (
    <>
      <View style={styles.body}>
        <ImageBackground
          source={loginBackground}
          style={styles.loginBackground}>
          <ErrorModal onClick={setShowErrorModal} show={showErrorModal}/>

          {!isKeyBoardOpen ? (
            <Text style={styles.welcomeText}>Seja bem-vindo(a) ao AnotaAi</Text>
          ) : null}

          <View style={styles.content}>
            <View style={styles.formContainer}>
              <View style={styles.form}>
                <TextInput
                  style={styles.input}
                  placeholder="Digite seu e-mail"
                  onFocus={() => setIsKeyBoardOpen(true)}
                  onSubmitEditing={() => setIsKeyBoardOpen(false)}
                  onChangeText={(text) => setEmail(text)}
                  value={email}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Digite sua senha"
                  onFocus={() => setIsKeyBoardOpen(true)}
                  onSubmitEditing={() => setIsKeyBoardOpen(false)}
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                />
              </View>
              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text>Login</Text>
              </TouchableOpacity>
            </View>
            {!isKeyBoardOpen ? (
              <View style={styles.signUpContainer}>
                <Text style={styles.signUpMessage}>
                  Ainda Não é cadastrado ? Clique abaixo e junte-se a nós!
                </Text>
                <TouchableOpacity style={styles.button}>
                  <Text>Cadastrar</Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  loginBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'relative',
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: 'bold',
    position: 'absolute',
    top: 35,
    textAlign: 'center',
  },
  content: {
    width: '100%',
    height: '70%',
    justifyContent: 'space-around',
    position: 'relative',
    top: 40,
  },
  formContainer: {
    borderColor: '#907e70',
    borderStyle: 'solid',
    borderWidth: 6,
    width: '100%',
    height: 250,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  form: {
    width: '100%',
  },
  input: {
    backgroundColor: 'white',
    marginBottom: 10,
    fontSize:22
  },
  button: {
    backgroundColor: '#e4dfc1',
    width: 100,
    borderRadius: 3,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 140,
    flexDirection: 'column',
    justifyContent: 'space-around',
    position: 'relative',
  },
  signUpMessage: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Login;
