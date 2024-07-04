import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screen/Home';
import Welcome from './src/screen/Welcome';
import Login from './src/screen/Login';
import Register from './src/screen/Register';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})