import {View, Text} from 'react-native';
import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import AddCartScreen from '../screens/AddCartScreen';

const Tab = createBottomTabNavigator();

export default function BTNavigation() {
  return (
    <Tab.Navigator
      barStyle={{backgroundColor: '#694fad'}}
      activeColor="#fff"
      shifting={true}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Detail" component={DetailScreen} />
      <Tab.Screen name="AddCart" component={AddCartScreen} />
    </Tab.Navigator>
  );
}
