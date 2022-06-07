import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useNavigation} from '@react-navigation/native';
import signup from '../assets/Image/signup.jpg';

const SignUpScreen = () => {
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

  useEffect(() => {
    AsyncStorage.getAllKeys(data => {
      console.log(data);
    });
  }, []);

  //checking the user have entered the email & password or not.
  const setData = async () => {
    if (email.length == 0) {
      Alert.alert('Please enter email');
    } else if (password.length == 0) {
      Alert.alert('Please enter password');
    } else {
      //adding multiple data in async storage
      try {
        const fetchData = await AsyncStorage.getItem('Data');
        console.log('fetchData', fetchData);
        const parsedData = JSON.parse(fetchData);
        if (parsedData !== null) {
          parsedData.push({email: email, password: password});
          await AsyncStorage.setItem('Data', JSON.stringify(parsedData));
          console.log('parsedData', parsedData);
        } else {
          const data = [{email: email, password: password}];
          await AsyncStorage.setItem('Data', JSON.stringify(data));
        }
        // const data = {
        //   Id: id,
        //   email: email,
        //   password: password,
        // };

        //await AsyncStorage.setItem(`${id}`, JSON.stringify(data));
        // await AsyncStorage.setItem('Data', JSON.stringify(data));

        navigation.navigate('Login');
      } catch (error) {
        console.log('Error Occurred :', error);
      }
      //AsyncStorage.setItem('email', email);
      //AsyncStorage.setItem('password', password);
    }
  };

  const onSignInPressed = () => {
    // console.warn('Sign In pressed');

    navigation.navigate('Login');
  };
  const onRegisterPressed = () => {
    // console.warn('Register pressed');

    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Image source={signup} style={styles.imgStyle} resizeMode="contain" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter username or Email"
          placeholderTextColor="#FF6768"
          onChangeText={email => setEmail(email)}
          value={email}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Enter password"
          placeholderTextColor="#FF6768"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
          value={password}
        />
        <View style={styles.btnStyle}>
          <Button title="Register" onPress={setData} />
        </View>
        <TouchableOpacity style={{margin: 50}}>
          <Text>
            You already have an account?{' '}
            <Text style={{color: 'red'}} onPress={onSignInPressed}>
              {' '}
              Login{' '}
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inputView: {
    marginHorizontal: 20,
    // alignItems: 'center',
  },
  inputText: {
    width: 300,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  imgStyle: {
    width: '60%',
    height: 200,
  },
  btnStyle: {
    width: 200,
    marginHorizontal: 55,
    marginTop: 20,
    //backgroundColor: '#DD4D44',
  },
});
