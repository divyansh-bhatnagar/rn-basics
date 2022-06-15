import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useContext} from 'react';
import {GlobalInfo} from '../App';

const SuperChild = () => {
  //useContext is used to get the value from the context
  //getting appColor and getDay from the context(importing through useContext)
  const {appColor, getDay} = useContext(GlobalInfo);
  const day = 'Monday'; //we're sending this value to the context(parent-app.js)
  return (
    <View>
      <Text style={{color: appColor, fontSize: 18}}>superChild</Text>
      <Button title="get-day" onPress={() => getDay(day)} />
    </View>
  );
};

export default SuperChild;

const styles = StyleSheet.create({});
