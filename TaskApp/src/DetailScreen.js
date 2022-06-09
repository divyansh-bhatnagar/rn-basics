import {StyleSheet, Text, View, Image} from 'react-native';
import {useRoute} from '@react-navigation/native';
import React from 'react';

export default function DetailScreen({route}) {
  const {data} = route.params;
  console.log('data:', data);
  return (
    <View>
      <Image
        style={{height: 100, width: 100, margin: 5}}
        source={{uri: route.params.data.photo}}
      />
      <Text>{route.params.data.title}</Text>
      <Text>{route.params.data.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
