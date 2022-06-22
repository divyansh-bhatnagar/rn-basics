import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchScreen = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Ionicons
        name="search"
        size={30}
        color="black"
        style={styles.iconStyle}
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputText}
        placeholder="Search"
        //value={term}
        // onChangeText={newTerm => onTermChange(newTerm)}
        // onChangeText={onTermChange}
        // onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: '#D3D3D3',
    height: 50,
    marginHorizontal: 15,
    borderRadius: 10,
    flexDirection: 'row',
  },
  inputText: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
});

export default SearchScreen;
