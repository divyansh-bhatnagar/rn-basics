import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
import React from 'react';

// import axios from 'axios';

const UserDisplayScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Users: </Text>
      <View>
        <FlatList />
      </View>
      <View style={styles.btn}>
        <Button title="Fetch Users" />
      </View>
    </View>
  );
};

export default UserDisplayScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    bottom: 0,
  },
});
