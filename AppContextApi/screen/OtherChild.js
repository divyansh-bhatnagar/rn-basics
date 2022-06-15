import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {GlobalInfo} from '../App';

const OtherChild = () => {
  //useContext is used to get the value from the context
  const {appColor} = useContext(GlobalInfo);

  return (
    <View>
      <Text style={{color: appColor, fontSize: 20}}>Other Child</Text>
    </View>
  );
};

export default OtherChild;

const styles = StyleSheet.create({});
