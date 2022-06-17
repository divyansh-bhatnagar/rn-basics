import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './src/HomeScreen';
import LikedScreen from './src/LikedScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './components/BottomTab';
import AppNavigation from './components/AppNavigation';

import ContextProvider from './components/context';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </ContextProvider>
  );
}

const styles = StyleSheet.create({});
