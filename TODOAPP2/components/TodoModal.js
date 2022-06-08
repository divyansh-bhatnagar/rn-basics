import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const TodoModal = props => {
  return (
    <View>
      <Modal
        animationType="slide"
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          props.setModalVisible(false);
        }}>
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            marginTop: 10,
            paddingRight: 10,
            position: 'absolute',
          }}
          onPress={() => {
            props.setModalVisible(false);
            props.setCategory(null);
            props.setTasks('');
          }}>
          <AntDesign name="close" size={25} color="#414C68" />
        </TouchableOpacity>

        <View style={{position: 'absolute', marginTop: 200, marginLeft: 50}}>
          <TextInput
            disabled={props.taskArray.length > 0 ? true : false}
            placeholder="Here write Task"
            style={styles.TextInput}
            value={props.tasks} //for see the realtime changes.
            onChangeText={text => {
              //grab the text and then we set the tasks to be that text.
              props.setTasks(text);
            }}
          />
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={props.categoryData}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={props.category}
            onChange={item => {
              props.setCategory(item.value);
            }}
            renderLeftIcon={() => (
              <FontAwesome
                style={styles.icon}
                name="tasks"
                size={24}
                color="black"
              />
            )}
          />
          <View>
            <TouchableOpacity
              onPress={() =>
                props.handleAddUpdate(props.tasks, props.category)
              }>
              <View style={styles.btn}>
                <AntDesign name="check" size={24} color="white" />
              </View>
            </TouchableOpacity>

            {/* <TouchableOpacity onPress={() => props.handleAddUpdate()}>
              <View style={styles.btn}>
                <Entypo name="add-to-list" size={24} color="white" />
              </View>
            </TouchableOpacity> */}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TodoModal;

const styles = StyleSheet.create({
  TextInput: {
    position: 'relative',
    width: 270,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderColor: '#412A68',
    borderWidth: 1,
  },
  dropdown: {
    width: 250,
    margin: 16,
    height: 50,
    borderBottomColor: '#414C68',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  btn: {
    marginTop: 20,
    width: 60,
    height: 60,
    borderRadius: 60,
    marginLeft: 125,
    //borderWidth: 1,
    backgroundColor: '#414C68',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
