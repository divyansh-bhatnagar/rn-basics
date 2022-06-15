import {View, Text} from 'react-native';
import React, {createContext, useState} from 'react';
import Child from './screen/Child';
import OtherChild from './screen/OtherChild';

export const GlobalInfo = createContext(); //create a context

export default function App() {
  const [color, setColor] = useState('green');

  const [day, setDay] = useState('Saturday'); //for displaying the day and by default it is set to Saturday.

  //making function for getting data from superchild.
  const getDay = item => {
    setDay(item); //setting the day to the context from superchild.
    console.log('getDay:', item);
  };
  return (
    //Provider is the container for the context and passing value to child and super child

    //passing getDay function to super child.
    <GlobalInfo.Provider value={{appColor: color, getDay: getDay}}>
      <View>
        <Text style={{fontSize: 24}}>App screen {day}</Text>
        <Child />
        <OtherChild />
      </View>
    </GlobalInfo.Provider>
  );
}
