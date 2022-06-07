import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import signin from '../assets/Image/signin.jpg';

import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const navigation = useNavigation(); //for navigating to other screens

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const __isValidEmail = email => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }; //for validating the email (reg-ex)

  const __isValidPassword = password => {
    console.log(password);
    let re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let result = re.test(String(password));
    console.log(result);
    return re.test(String(password));
  }; //for validating the password (reg-ex)

  //Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.

  const __doLogin = () => {
    if (!email) {
      setError('email required *');
      setValid(false);
      return;
    } else if (!password) {
      setError('password required *');
      setValid(false);
      return;
    } else if (!__isValidEmail(email)) {
      setError('Invalid email *');
      setValid(false);
      return;
    } else if (!__isValidPassword(password)) {
      setError(
        'Invalid password. Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.',
      );
      setValid(false);
      return;
    } else {
      setValid(true);
    }

    __doSingIn(email, password);
  };

  //to use this function when the HomeScreen appends. we are using useEffect hook
  // const getData = async () => {
  //   const fetchData = await AsyncStorage.getItem('Data');
  //   console.log('fetchData', fetchData);
  //   const parsedData = JSON.parse(fetchData);

  //   console.log('ID:', parsedData.Id);
  //   console.log('pData:', parsedData.email);
  //   return parsedData;
  // };

  //checking the user have entered the email & password or not.
  //   const setData = async () => {
  //     if (email.length == 0) {
  //       Alert.alert('Please enter email');
  //     } else if (password.length == 0) {
  //       Alert.alert('Please enter password');
  //     } else {
  //       try {
  //         await AsyncStorage.setItem('email', email);
  //         await AsyncStorage.setItem('password', password);

  //         navigation.navigate('Home');
  //       } catch (error) {
  //         console.log('Error Occurred :', error);
  //       }

  //   }
  //  };

  const onSignUPPressed = () => {
    // console.warn('Sign UP pressed');

    navigation.navigate('SignUp');
  };

  const onLoginPressed = async () => {
    // console.warn('Login pressed');
    const fetchData = await AsyncStorage.getItem('Data');
    console.log('fetchData', fetchData);
    if (fetchData !== null) {
      const parsedData = JSON.parse(fetchData);

      // console.log('pData:', parsedData.email);

      // console.log('parsedData', parsedData);
      //
      parsedData.forEach(element => {
        if (element.email === email && element.password === password) {
          navigation.navigate('Home', {email: element.email}); //if user is logged in then we are navigating to HomeScreen.
        }
      });
    }

    // navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.imgView} source={signin} resizeMode="contain" />

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputStyle}
          placeholder={'Enter username or email'}
          placeholderTextColor="#3282B8"
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder={'Enter password'}
          placeholderTextColor="#3282B8"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
        <View style={styles.btnStyle}>
          <Button title="Login" onPress={onLoginPressed} />
        </View>
        <TouchableOpacity style={{margin: 50}}>
          <Text>
            You don't have an account?{' '}
            <Text style={{color: 'red'}} onPress={onSignUPPressed}>
              {' '}
              Sign Up{' '}
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inputView: {
    marginHorizontal: 20,
    // alignItems: 'center',
  },
  inputStyle: {
    width: 300,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  imgView: {
    width: '60%',
    height: 200,
    // maxWidth: 300,
    // maxHeight: 150,
  },
  btnStyle: {
    width: 200,
    marginTop: 20,
    marginHorizontal: 55,
  },
});
