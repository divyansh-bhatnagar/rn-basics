import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LikedScreen() {
  const [likedItem, setLikedItem] = useState(null);
  const navigation = useNavigation(); //for navigating to other screens

  useEffect(() => {
    console.log('likedvalue:', likedValue);
    const likedValue = async () => {
      const likedData = await AsyncStorage.getItem('likeData'); //get data from AsyncStorage
      console.log('likedData:', likedData);
      setLikedItem(JSON.parse(likedData)); //set data to likedItem
    };
    //whenever the screen is Focused, run the likedValue function
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      likedValue();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, []);

  return (
    <View>
      <Text>Hey: </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
