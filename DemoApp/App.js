import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [data, setData] = useState(null);

  //this will run when our screen will be rendering.(here we check the user is logged in or not.)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); //in the given time we check that our user is logged or not.
  }, []);

  useEffect(() => {
    const bootstrapAsync = async () => {
      const fetchData = await AsyncStorage.getItem('Data');
      console.log('fetchData', fetchData);
      const parsedData = JSON.parse(fetchData);
      setData(parsedData);
    };

    bootstrapAsync();
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={data ? 'Home' : 'Login'}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <LoginScreen /> */}
      {/* <SignUpScreen /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
