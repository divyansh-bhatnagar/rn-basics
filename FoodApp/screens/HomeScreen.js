import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View, Button, Image} from 'react-native';

import axios from 'axios';

import {BASEURL} from '../utils/BASEURL';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import {weatherConditions} from '../utils/WeatherStyle';

const HomeScreen = props => {
  const [temperature, setTemperature] = useState(0);
  const [weatherCondition, setWeatherCondition] = useState(null);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [FeelsLike, setFeelsLike] = useState(0);
  const [sunRise, setSunRise] = useState('');
  const [sunSet, setSunSet] = useState('');
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [error, setError] = useState(null);
  const [lat, setLat] = useState(23.0497);
  const [lon, setLon] = useState(72.5018);

  // useEffect(async () => {

  // }, [lat, lon]);

  return (
    <View style={styles.weatherContainer}>
      <View style={styles.cityText}>
        <MaterialIcons name="location-on" size={35} color="red" />
        <Text style={{fontSize: 35, color: '#fff', fontWeight: 'bold'}}>
          <Text>{city}</Text>
          <Text> ( {country} )</Text>
        </Text>
      </View>
      <View style={styles.headerContainer}>
        <Image
          source={{uri: 'http://openweathermap.org/img/wn/50d@2x.png'}}
          style={{height: 100, width: 100, marginLeft: 50}}
        />
        <Text style={{fontSize: 50, color: '#fff', fontWeight: '500'}}>
          {temperature}˚
        </Text>
      </View>
      <View
        style={{
          marginLeft: 50,
          flexDirection: 'column',
          bottom: 200,
        }}>
        <Text style={{fontSize: 24, color: '#fff', fontWeight: '700'}}>
          {weatherCondition}
        </Text>
        <Text style={{fontSize: 18, color: '#fff', marginTop: 7}}>
          Feels Like: {FeelsLike}
        </Text>
        <View style={{flexDirection: 'row', marginTop: 7}}>
          <Image
            source={require('../assets/Image/humidtypic.png')}
            style={{height: 20, width: 20}}
          />
          <Text style={{fontSize: 18, color: '#fff', marginLeft: 5}}>
            Humidity: {humidity}
          </Text>
        </View>
        {/* <Text style={{fontSize: 14, color: '#fff', marginLeft: 5}}>
          {sunRise}
        </Text>
        <Text style={{fontSize: 14, color: '#fff', marginLeft: 5}}>
          {sunSet}
        </Text> */}
        <View style={{flexDirection: 'row', marginTop: 7}}>
          <Entypo name="air" size={20} color="blue" />
          <Text style={{fontSize: 18, color: '#fff', marginLeft: 5}}>
            Wind speed: {wind}
          </Text>
        </View>
      </View>

      {/* <View>
        <TextInput style={styles.latStyle}>{lat}</TextInput>
        <TextInput style={styles.lonStyle}>{lon}</TextInput>
      </View> */}

      {/* <View style={styles.bodyContainer}>
        <Text style={styles.title}>So Sunny</Text>
        <Text style={styles.subtitle}>It hurts my eyes!</Text>
      </View> */}
      {/* <View>
        <DateTime />
      </View> */}
      <View style={{marginBottom: 20}}>
        <Button
          style={styles.buttonStyle}
          title="Fetch Weather"
          onPress={async () => {
            try {
              const response = await axios.get(
                `${BASEURL}/weather?lat=${lat}&lon=${lon}&appid=016e2b22185880548878d11addeecdb7&units=metric`,
              );
              console.log('response', response.data);
              const responseJson = response.data;
              console.log('responseJson', responseJson.main.temp);
              setTemperature(responseJson.main.temp);
              setWeatherCondition(responseJson.weather[0].main);
              setCity(responseJson.name);
              setCountry(responseJson.sys.country);
              setFeelsLike(responseJson.main.feels_like);
              setSunRise(responseJson.sys.sunrise);
              setSunSet(responseJson.sys.sunset);
              setHumidity(responseJson.main.humidity);
              setWind(responseJson.wind.speed);
            } catch (error) {
              setError(error);
            }
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    backgroundColor: '#A5DEF1',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cityText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    color: '#73607C',
    margin: 10,
  },
  tempText: {
    fontSize: 48,
    color: '#fff',
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40,
  },
  title: {
    fontSize: 48,
    color: '#fff',
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
  },
});
