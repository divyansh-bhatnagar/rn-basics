import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  FlatList,
  Image,
  Modal,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import AntDesign from 'react-native-vector-icons/AntDesign';
import React, {useState, useEffect} from 'react';
import list from './assets/images/list.png';
import Task from './components/Task';
import TodoModal from './components/TodoModal';

const categoryData = [
  {label: 'Birthday Party', value: '1'},
  {label: 'Buy Food', value: '2'},
  {label: 'Buy Cloths', value: '3'},
  {label: 'Buy Groceries', value: '4'},
  {label: 'Done By Today', value: '5'},
  {label: 'Add to Code', value: '6'},
  {label: 'Greetings', value: '7'},
];

const App = () => {
  //task is the state to track the task.
  //setTask is the function to update the state.
  const [taskId, setTaskId] = useState(1);

  const [taskItem, setTaskItem] = useState([]); //array of tasks

  const [modalVisible, setModalVisible] = useState(false);

  const [tasks, setTasks] = useState('');
  const [category, setCategory] = useState(null);

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    if (taskItem.length > 0) {
      const lastItem = taskItem[taskItem.length - 1].id; //get the last item in the array
      setTaskId(lastItem + 1); //increment the id by 1
    }
  }, []);
  console.log('taskItem', taskItem);

  const handleAddTask = async (tasks, category) => {
    console.log('task', tasks); //print the task which we're stored in state.

    const categoryItem = categoryData.find(item => item.value === category);

    console.log('categoryItem', categoryItem);
    setModalVisible(false);
    setTaskItem([
      ...taskItem,
      {id: taskId, task: tasks, category: categoryItem, check: false},
    ]); //add the task to the array

    Keyboard.dismiss(); //dismiss the keyboard.
    setTaskId(taskId + 1); //increment the id by 1
    setTasks(''); //clear the text input.
    setCategory(null); //clear the dropdown.
  };

  // console.log('TaskItem', JSON.parse(taskItem));

  const renderList = ({item, index}) => {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        {/* onPress={() => {
           deleteTask(item);
         }} */}

        <Task
          data={item}
          deleteTask={deleteTask}
          handleEdit={handleEdit}
          handleCheck={handleCheck}
        />
      </View>
    );
  };

  const deleteTask = id => {
    console.log('before filter', taskItem);
    itemsCopy = taskItem.filter(a => a.id !== id);
    //remove the item from the array.
    console.log('after filter', itemsCopy);
    setTaskItem(itemsCopy); //update the state.
  };

  const onUpdate = () => {
    const categoryItem = categoryData.find(item => item.value === category);
    setTaskItem(
      taskItem.map(todoItem => {
        if (todoItem.id === editId) {
          return {...todoItem, task: tasks, category: categoryItem};
        } else {
          return todoItem;
        }
      }),
    );
    setTasks('');
    setCategory(null);
    setModalVisible(false);
  };

  const handleEdit = ({id, task, category}) => {
    setCategory(category.value);
    setTasks(task);
    setEditId(id);
    console.log('updated state:' + task + ' ' + category);

    setModalVisible(true);
  };

  console.log('modalVisible: ', modalVisible);

  const handleCheck = id => {
    setTaskItem(
      taskItem.map(todoItem => {
        if (todoItem.id === id) {
          return {...todoItem, check: !todoItem.check};
        } else {
          return todoItem;
        }
      }),
    );
  };
  console.log('checkedValue :', taskItem);

  return (
    <View style={styles.container}>
      {/* Today's Task */}
      <View style={styles.textWrapper}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.sectionTitle}>
            Todo{' '}
            <Text style={{color: '#414C68', fontSize: 34, fontWeight: 'bold'}}>
              List
            </Text>
          </Text>
          <View
            style={{
              color: '#fff',
            }}>
            <TouchableOpacity
              style={styles.addList}
              onPress={() => setModalVisible(true)}>
              <AntDesign name="plus" size={26} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.items}>
          {/* This is where the task is go! */}

          <FlatList
            keyExtractor={(item, index) => item.id}
            data={taskItem}
            renderItem={renderList}
          />
        </View>
      </View>

      {/* For Opening Modal */}

      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTask}>
        <TodoModal
          onUpdate={onUpdate}
          setCategory={setCategory}
          category={category}
          setTasks={setTasks}
          tasks={tasks}
          handleEdit={handleEdit}
          taskArray={taskItem}
          handleAddTask={handleAddTask}
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
          categoryData={categoryData}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  imageView: {
    marginTop: 150,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
  },
  imageContainer: {
    height: 250,
    width: 250,
    opacity: 0.2,
  },
  textWrapper: {
    padding: 50,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#8F8F8F',
  },
  items: {
    marginTop: 30,
  },
  addList: {
    borderColor: 'lightBlue',
    padding: 16,
    width: 60,
    height: 60,
    borderRadius: 60,
    borderWidth: 1,
    backgroundColor: '#414C68',
  },
  writeTask: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    // flexDirection: 'Column',
    // justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '400',
  },
});
