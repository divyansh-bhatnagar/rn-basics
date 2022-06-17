import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Context} from '../components/context';

export default function LikedScreen() {
  // const [likedItem, setLikedItem] = useState(null);
  const navigation = useNavigation(); //for navigating to other screens

  const {liked, setLiked} = useContext(Context);

  const data = liked;

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View
              style={{
                borderColor: 'grey',
                borderBottomWidth: 1,
                paddingVertical: 10,
                marginVertical: 10,
              }}>
              <Image
                style={{
                  height: 100,
                  width: 100,
                  margin: 5,
                }}
                source={{uri: item.photo}}
              />
              {/* <Text>Hey: {item.id}</Text> */}
              <Text>{item.title}</Text>

              <Text>{item.description}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
