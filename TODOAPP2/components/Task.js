import {StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Task = props => {
  return (
    console.log('props', props.data.check),
    (
      <View style={styles.container}>
        <CheckBox
          value={props.data.check}
          onValueChange={() => props.handleCheck(props.data.id)}
        />
        <View style={styles.item}>
          {/* <View style={styles.square} /> */}
          <View style={{width: 150}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                textDecorationLine: props.data.check ? 'line-through' : 'none',
              }}>
              {props.data.task}
            </Text>
            <Text
              style={{
                fontSize: 12,
                textDecorationLine: props.data.check ? 'line-through' : 'none',
              }}>
              category: {props.data.category.label}
            </Text>
          </View>
        </View>
        <Feather
          name="edit"
          size={24}
          color="green"
          onPress={() => props.handleEdit(props.data)}
        />
        <AntDesign
          name="delete"
          size={24}
          color="red"
          onPress={() => {
            props.deleteTask(props.data.id);
          }}
        />
      </View>
    )
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: 260,
    //height: 100,
    padding: 12,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'flex-start',
    marginBottom: 20,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
