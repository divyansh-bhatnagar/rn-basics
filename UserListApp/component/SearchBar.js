import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        size={30}
        color="black"
        style={styles.iconStyle}
      />
      <TextInput 
        placeholder='search'
        autoCapitalize="none"
        autoCorrect={false} 
        style={styles.inputText}
        />
    </View>
  )
}

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        borderRadius: 25,
        marginTop: 15,
        marginBottom: 10,
        backgroundColor: '#D3D3D3',
        height: 50,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 20,
      },
    inputText: {
        flex: 1,
        fontSize: 18,
      },
});