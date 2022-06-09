import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import BottomTab from './BottomTab';

import HomeScreen from '../src/HomeScreen';
import LikedScreen from '../src/LikedScreen';
import DetailScreen from '../src/DetailScreen';

const AppStack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={BottomTab} />
      <AppStack.Screen name="Liked" component={LikedScreen} />
      <AppStack.Screen name="detail" component={DetailScreen} />
    </AppStack.Navigator>
  );
}

const styles = StyleSheet.create({});
