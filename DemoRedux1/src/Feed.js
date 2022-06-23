import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';

import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';

import {BASEURL} from '../api/BASEURL';
import {gettingUsers, updateUser, deleteUser} from '../store/action';

export default function Feed() {
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState('');
  const [userId, setUserId] = useState(null);

  const comingData = useSelector(state => state.updateDelete);
  //console.log('comingData', comingData);
  const dispatch = useDispatch();

  function updateDeleteHandler() {}

  return (
    <View style={styles.container}>
      <Text style={{fontWeight: '800', fontSize: 20, marginHorizontal: 10}}>
        Users:
      </Text>
      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 5,
          paddingVertical: 5,
          paddingHorizontal: 5,
        }}>
        <FlatList
          data={comingData.users}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={{borderColor: 'grey', borderWidth: 1}}>
                <Text style={{color: 'grey'}}>ID: {item.id}</Text>
                <Text style={{color: 'black'}}>Name: {item.name}</Text>
                <Text style={{color: 'black'}}>UserName: {item.username}</Text>
                <View style={{flexDirection: 'row'}}>
                  {/* <Button
                    title="Delete"
                    onPress={async () => {
                      try {
                        const response = await axios.delete(
                          `${BASEURL}/users/${item.id}`,
                        );
                        const data = await response.data;
                        console.log('response after delete: ', data);
                      } catch (error) {
                        console.log('error: ', error);
                      }
                    }}
                  /> */}
                  <Button
                    title="Delete"
                    onPress={async () => {
                      dispatch(deleteUser(item));
                    }}
                  />
                  <Button
                    title="update"
                    onPress={() => {
                      setUserId(item.id);
                      setModalVisible(true);
                    }}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Fetch Users"
          onPress={async () => {
            console.log('clicked');
            try {
              console.log('clickedInside');
              const response = await fetch(
                'https://web-api-test1.herokuapp.com/users/all',
                {method: 'GET'},
              );
              const data = await response.json();
              console.log('response: ', data);
              // setUsers(response.data);
              dispatch(gettingUsers(data));
              // console.log('users: ', users);
            } catch (error) {
              console.log('error: ', error);
              setError(error);
            }
          }}
        />
      </View>
      <Modal visible={modalVisible}>
        <View>
          <TextInput
            placeholder="update name"
            value={value}
            onChangeText={value => setValue(value)}
          />
          {/* <Button
            title="update"
            onPress={async () => {
              try {
                const response = await axios.put(`${BASEURL}/users/${userId}`, {
                  name: value,
                });
                const data = await response.data;
                console.log('response after update: ', data);
              } catch (error) {
                console.log('error: ', error);
              }
            }}
          /> */}
          <Button
            title="update"
            onPress={() => {
              dispatch(updateUser({id: userId, name: value}));
            }}
          />
          <Button title="close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    bottom: 0,
  },
});
