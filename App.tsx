/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from './src/views/Screen1';
import Login from './src/views/Login';
import CreateAccount from './src/views/CreateAccount';
import Verify from './src/views/Verify';
import Home from './src/views/Home';

import { Image } from 'react-native';
import images from './src/config/images';
import Ruches from './src/views/Ruches';
import Members from './src/views/Members';
import AddMember from './src/views/AddMember';
import AddRiche from './src/views/AddRiche';
import DetailleProduit from './src/views/DetailleProduit';
import MonCompte from './src/views/MonCompte';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function MemberStack() {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Member" component={Members} options={{ title: 'Liste des membres', headerShown: true }} />
      <Stack.Screen name="AddMember" component={AddMember} options={{ title: 'Ajouter un membre', headerShown: true }} />
    </Stack.Navigator>
  );
}

function RicheStack() {

  return (
    <Stack.Navigator>
      <Stack.Screen name="MesRiches" component={Ruches} options={{ title: 'Mes Riches', headerShown: true }} />
      <Stack.Screen name="AddRiche" component={AddRiche} options={{ title: 'Nouvelle Rurche', headerShown: true }} />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Tab.Navigator >

      <Tab.Screen name="HomeRoot" key={'HomeUi'} component={Home} options={{
        headerShown: false, tabBarIcon: ({ color }) => (
          <Image source={images.ICON_TAB_BAR} style={{ height: 15, width: 15 }} />
        ), title: 'Marché'
      }} />
      <Tab.Screen name="Riches" key={'Riches'} component={RicheStack} options={{
        headerShown: false, tabBarIcon: ({ color }) => (
          <Image source={images.ICON_TAB_RUCHE} style={{ height: 15, width: 15 }} />
        ), title: 'Riches'
      }} />
      <Tab.Screen name="MemberStack" key={'MemberStack'} component={MemberStack} options={{
        headerShown: false, tabBarIcon: ({ color }) => (
          <Image source={images.ICON_TAB_MEMBERS} style={{ height: 15, width: 15 }} />
        ), title: 'Membres'
      }} />

      <Tab.Screen name="User" key={'UserCtr'} component={MonCompte} options={{
        headerShown: true, tabBarIcon: ({ color }) => (
          <Image source={images.ICON_TAB_USER} style={{ height: 15, width: 15 }} />
        ), title: 'Mon compte'
      }} />


    </Tab.Navigator>
  );
}


function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcom" component={Screen1} options={{ title: 'Welcome', headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login', headerShown: false }} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ title: 'Create Account', headerShown: false }} />
        <Stack.Screen name="Verify" component={Verify} options={{ title: 'Verify', headerShown: false }} />
        <Stack.Screen name="Home" component={HomeStack} options={{ title: 'Home', headerShown: false }} />
        <Stack.Screen name="DetailleProduit" component={DetailleProduit} options={{ title: 'Detaille du produit', headerShown: true }} />
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
