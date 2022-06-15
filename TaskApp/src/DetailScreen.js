import {StyleSheet, Text, View, Image} from 'react-native';
import {useRoute} from '@react-navigation/native';
import React from 'react';

export default function DetailScreen({route}) {
  const {data} = route.params;
  //console.log('data:', data);
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: route.params.data.photo}} />
      <Text style={styles.title}>{route.params.data.title}</Text>
      <Text style={styles.desc}>{route.params.data.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  img: {
    marginTop: 20,
    height: 200,
    width: 200,
    margin: 5,
    borderRadius: 10,
  },
  title: {
    color: 'black',
    marginTop: 20,
    fontSize: 20,
    fontWeight: '500',
  },
  desc: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    fontSize: 14,
  },
});
