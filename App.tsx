/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react'; 
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'; 
import Screen1 from './src/views/Screen1';
import Login from './src/views/Login';
import CreateAccount from './src/views/CreateAccount';
import Verify from './src/views/Verify';
import Home from './src/views/Home';

const Stack = createNativeStackNavigator();
 
function App(): JSX.Element {
   
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcom" component={Screen1}  options={{title: 'Welcome',headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{title: 'Login',headerShown:false}} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} options={{title: 'Create Account',headerShown:false}} />
        <Stack.Screen name="Verify" component={Verify} options={{title: 'Verify',headerShown:false}} />
        <Stack.Screen name="Home" component={Home} options={{title: 'Home',headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
   
});

export default App;
