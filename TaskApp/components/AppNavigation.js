import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';

import BottomTab from './BottomTab';

import HomeScreen from '../src/HomeScreen';
import LikedScreen from '../src/LikedScreen';
import DetailScreen from '../src/DetailScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppStack = createNativeStackNavigator();

export default function AppNavigation() {
  const [liked, setLiked] = useState([]);
  console.log('liked:', liked);
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
            return (
              <Pressable
                onPress={async () => {
                  //console.log('route:', route);
                  //if there is id in route then it is a liked item and we can remove from liked as well.
                  if (
                    liked.length > 0 &&
                    liked.includes(route.params.data.id)
                  ) {
                    const newLiked = liked.filter(
                      item => item !== route.params.data.id, //remove the item from the liked array
                    );
                    setLiked(newLiked);
                  } else if (
                    //if that is not in liked array then add it to favorite
                    liked.length > 0 &&
                    !liked.includes(route.params.data.id)
                  ) {
                    setLiked([...liked, route.params.data.id]);
                  } else {
                    setLiked([route.params.data.id]); //we're adding the first item to the liked array because the list is empty as initially
                  }

                  const likedData = await AsyncStorage.getItem('likeData'); //get data from AsyncStorage
                  const likedDataJson = JSON.parse(likedData); //convert string to JSON
                  console.log('likedDataJson:', likedDataJson);
                  let newLikedData = []; //create new array
                  if (
                    likedData !== null &&
                    liked.includes(route.params.data.id)
                  ) {
                    console.log('we are in if');
                    //if likedData is not null and isLiked is false we're removing data from asyncstorage.
                    newLikedData = likedDataJson.filter(
                      item => item.id !== route.params.data.id,
                    );

                    // console.log('newLikedData:', newLikedData);
                    // console.log('likedDataJson:', likedDataJson);
                  } else if (
                    likedData !== null &&
                    !liked.includes(route.params.data.id)
                  ) {
                    console.log('we are in else if');
                    //if likedData is not null and isLiked is true we're adding data to asyncstorage.

                    newLikedData.push(route.params.data);
                  } else {
                    console.log('we are in else');
                    //if likedData is null we're adding data to asyncstorage.
                    newLikedData.push(route.params.data);
                  }
                  console.log('newLikedData:', newLikedData);
                  await AsyncStorage.setItem(
                    'likeData',
                    JSON.stringify(newLikedData),
                  ); //set data to AsyncStorage
                }}>
                <MaterialCommunityIcons
                  name={
                    liked.includes(route.params.data.id)
                      ? 'heart'
                      : 'heart-outline'
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

const styles = StyleSheet.create({});
