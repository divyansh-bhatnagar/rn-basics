import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const WeatherItem = ({title, value, unit}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>
        {value}
        {unit}
      </Text>
    </View>
  );
};

const DateTime = () => {
  return (
    <View>
      <View>
        <View>
          <Text>12:30</Text>
        </View>
        <View>
          <Text>Monday, March 12, 2020</Text>
        </View>
        <View>
          <WeatherItem title="Humidity" value="50" unit="%" />
          <WeatherItem title="Pressure" value="50" unit="hpA" />
          <WeatherItem title="SunRise" value="6:00" unit="AM" />
          <WeatherItem title="SunSet" value="6:47" unit="PM" />
        </View>
      </View>
      <View>
        <Text>Asia/Kolkata</Text>
        <Text>4.22N </Text>
      </View>
    </View>
  );
};

export default DateTime;

const styles = StyleSheet.create({});
