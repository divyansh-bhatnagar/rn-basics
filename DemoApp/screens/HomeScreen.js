import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = props => {
  const navigation = useNavigation(); //for navigating to other screens

  // const [email, setEmail] = useState('');

  // useEffect(() => {
  //   getData();
  // }, []);

  // console.log('Data', email);

  //to use this function when the HomeScreen appends. we are using useEffect hook
  // const getData = async id => {
  //   try {
  //     await AsyncStorage.getItem('Data').then(value => {
  //       if (value !== null) {
  //         const dataParsed = JSON.parse(value);
  //         console.log('value', dataParsed);
  //         setEmail(dataParsed.email);
  //       }
  //     });
  //   } catch (error) {
  //     console.log('Error Occurred :', error);
  //   }
  // };

  //signout function
  // const removeData = async () => {
  //   try {
  //     await AsyncStorage.clear();

  //     navigation.navigate('Login');
  //   } catch (error) {
  //     console.log('Error Occurred :', error);
  //   }
  // };

  const removeData = async () => {
    try {
      const fetchData = await AsyncStorage.getItem('Data');
      console.log('fetchData', fetchData);
      if (fetchData !== null) {
        const parsedData = JSON.parse(fetchData);

        // console.log('pData:', parsedData.email);

        // console.log('parsedData', parsedData);
        //
        parsedData.forEach(element => {
          if (element.email === props.route.params?.email) {
            console.log('error' + element.email);
            // console.log(element.email);
            navigation.navigate('Login'); //if user is logged in then we are navigating to HomeScreen.
          }
          // navigation.navigate('Login');
        });
      }
      // await AsyncStorage.removeItem(email);

      //   navigation.navigate('Login');
      //   // return true;
    } catch (exception) {
      return false;
    }
  };

  // const removeData = async () => {
  //   try {
  //     AsyncStorage.removeItem('email', email);
  //     AsyncStorage.removeItem('password', password);

  //     navigation.navigate('Login');
  //   } catch (error) {
  //     console.log('Error Occurred :', error);
  //   }
  // };

  //   const onLogOutPressed = () => {
  //     console.warn('Logout pressed');

  //     // navigation.navigate('Home');
  //   };

  return (
    <View>
      <Text>Hello, {props.route.params?.email}</Text>
      <Button title="Sign out" onPress={removeData} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
