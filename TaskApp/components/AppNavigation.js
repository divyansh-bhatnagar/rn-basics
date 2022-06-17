import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState, useContext} from 'react';

import BottomTab from './BottomTab';

import HomeScreen from '../src/HomeScreen';
import LikedScreen from '../src/LikedScreen';
import DetailScreen from '../src/DetailScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Context} from './context';

const AppStack = createNativeStackNavigator();

export default function AppNavigation({route}) {
  const {liked, setLiked} = useContext(Context);

  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Home"
        component={BottomTab}
        options={{
          headerTitle: 'Home',
        }}
      />
      <AppStack.Screen
        name="Liked"
        component={LikedScreen}
        options={{
          headerTitle: 'Detail',
        }}
      />

      <AppStack.Screen
        name="detail"
        component={DetailScreen}
        options={({route}) => ({
          headerTitle: 'Detail',
          headerRight: () => {
            const {data} = route.params;
            setLiked(liked => [...liked, data]);

            return (
              <Pressable
                onPress={() => {
                  if (liked.includes(data.id) === true) {
                    liked.splice(liked.indexOf(data.id), 1),
                      setLiked(liked),
                      console.log('liked after splice:', liked);
                  } else {
                    setLiked(liked.filter(id => id !== route.params.data.id));
                    console.log('liked after press:', liked);
                  }
                }}>
                <MaterialCommunityIcons
                  name={
                    liked.includes(route.params.data.id)
                      ? 'heart-outline'
                      : 'heart'
                  }
                  size={28}
                  color={liked.includes(route.params.data.id) ? 'red' : 'black'}
                />
              </Pressable>
            );
          },
        })}
      />
    </AppStack.Navigator>
  );
}
