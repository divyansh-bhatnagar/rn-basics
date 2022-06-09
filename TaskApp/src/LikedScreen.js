import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function LikedScreen() {
  const navigation = useNavigation(); //for navigating to other screens
  return (
    <View>
      <Text>likedScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
