import {StyleSheet, Text, View, Image} from 'react-native';
import {useRoute} from '@react-navigation/native';
import React, {useContext} from 'react';
import {Context} from '../components/context';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';

export default function DetailScreen({route}) {
  const {data} = route.params;
  const {liked, setLiked, FlatListData} = useContext(Context);
  console.log('data:', data);
  if (liked.find(Item => Item.id === data.id)) {
    console.log('i am in if');
    liked.splice(liked.indexOf(data), 1);
    setLiked(liked);
    console.log('liked after splice:', liked);
  } else if (liked.find(Item => Item.id === data.id) === undefined) {
    console.log('i am in else-if');
    liked.push(data);
    setLiked(liked);
    console.log('liked after push:', liked);
  } else {
    console.log('i am in else');
    setLiked(liked);
    console.log('liked after setLiked:', liked);
  }

  // liked.push(data);
  // setLiked(data);

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
