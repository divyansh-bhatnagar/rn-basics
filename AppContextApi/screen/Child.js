import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {GlobalInfo} from '../App';
import SuperChild from './SuperChild';

const Child = () => {
  //useContext is used to get the value from the context
  const {appColor} = useContext(GlobalInfo);
  console.log('appColor:', appColor);
  return (
    <View>
      <Text style={{color: appColor, fontSize: 15}}>child</Text>
      <SuperChild />
    </View>
  );
};

export default Child;

const styles = StyleSheet.create({});
