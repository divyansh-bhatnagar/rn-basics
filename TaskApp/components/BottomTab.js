import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../src/HomeScreen';
import LikedScreen from '../src/LikedScreen';

const Stack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      barStyle={{backgroundColor: '#694fad'}}
      activeColor="#fff"
      shifting={true}>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Liked"
        component={LikedScreen}
        options={{
          tabBarLabel: 'Liked',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="cards-heart"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
