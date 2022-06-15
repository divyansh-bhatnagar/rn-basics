import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import DetailScreen from './DetailScreen';

FlatListData = [
  {
    id: 1,
    title: 'Shoes',
    photo:
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    description: 'The shoes are in multicolor and its unisex.',
  },
  {
    id: 2,
    title: 'BagPack',
    photo:
      'https://images.unsplash.com/photo-1575844264771-892081089af5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    description:
      'The Bag is for tracking with sleeping-bag and contains two days equipment within it and its unisex.',
  },
  {
    id: 3,
    title: 'Dress',
    photo:
      'https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    description: 'Cute pretty red dress.',
  },
  {
    id: 4,
    title: 'Formal outfit for men',
    photo:
      'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    description:
      'Its formal outfit dress code for formal lovers with watch , wallet , shirt and jeans.',
  },
  {
    id: 5,
    title: 'Formal outfit for women',
    photo:
      'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
    description:
      'Its formal outfit dress code for formal lovers with women shirt, jeans and belly-shoes.',
  },
  {
    id: 6,
    title: 'Watch',
    photo:
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
    description: 'Its wrist watch with analog functionality.',
  },
];

export default function HomeScreen() {
  const navigation = useNavigation(); //for navigating to other screens

  return (
    <TouchableOpacity>
      <FlatList
        data={FlatListData}
        renderItem={element => {
          //console.log(element);
          return (
            <View style={styles.container}>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() =>
                  navigation.navigate('detail', {data: element.item})
                }>
                <Image
                  style={{
                    height: 100,
                    width: 100,
                    margin: 5,
                  }}
                  source={{uri: element.item.photo}}
                />

                <View style={styles.text}>
                  <Text style={styles.title}>{element.item.title}</Text>
                  <Text>{element.item.description}</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'CreteRound_Italic',
  },
  text: {
    flex: 1,
    flexDirection: 'column',
    fontSize: 16,
    padding: 10,
  },
});
