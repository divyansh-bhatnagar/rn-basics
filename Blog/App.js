import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import IndexScreen from './src/Screens/IndexScreen';
import {Provider} from './src/Context/BlogContext';

const Stack = createNativeStackNavigator();

//NavigationContainer ---> this is wrapping navigation container
//createAppContainer(navigator);  === NavigationContainer

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Index" component={IndexScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
