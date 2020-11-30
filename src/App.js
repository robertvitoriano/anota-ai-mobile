import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text} from 'react-native';
import { createDrawerNavigator,useIsDrawerOpen } from '@react-navigation/drawer';


import {NavigationContainer} from '@react-navigation/native';
import {Login, Home} from './views';

const Drawer= createDrawerNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Drawer.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Login"
      >
        <Drawer.Screen name="Login" component={Login}  options={{swipeEnabled:false}} />
        <Drawer.Screen name="Home" component={Home}  />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
