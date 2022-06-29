import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React, {useState, useEffect} from 'react';

import SearchBar from '../component/SearchBar';

import { useSelector , useDispatch } from 'react-redux';
import { getUser } from '../store/action';

const HomeScreen = ({navigation}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [pageNumber, setPageNumber] = useState(1); 
    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.user);

    //Api call to get user data
    useEffect(() => {
        dispatch(getUser(pageNumber));
    }, [pageNumber])

    //after getting user data from api call, set user data to state and append to existing data.
    useEffect(() => {
      if(user !== null) {
       if(user.data.length > 0 && userData.length === 0) {
        setUserData(user.data);
      }else if (user.data.length > 0 && userData.length > 0) {
        setUserData([...userData, ...user.data]);
      }
    }
    }, [user])

    let today = new Date();
    let date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();

    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var time = hours + ":" + min ;

  return (
    <View>
      <SearchBar />
        <FlatList
        contentContainerStyle={styles.contentContainer}
            data={userData}
            renderItem={({item}) => {
                return (
                  <View style={styles.dataView}>
                    <Image style={styles.image} source={{uri: item.avatar}} />
                    <View style={styles.name}>
                    <Text style={styles.flname}>{item.first_name} <Text>{item.last_name}</Text></Text>
                    </View>
                    <View style={styles.dateTime}>
                    <Text>{date}</Text>
                    <Text>{time} am / pm</Text>
                    </View>
                  </View>
                )
            }
            }
            onEndReached={() => {
              if(user.total_pages > pageNumber){
                setPageNumber(pageNumber + 1);
              }
            }}
            onEndReachedThreshold={0.1}
        />
        
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  dataView: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 40,
    borderColor: '#000',
    borderWidth: 1,
    alignItems: 'center',
  },
  image: {
    marginLeft: 10,
    width: 80,
    height: 80,
    borderRadius: 50,

  },
  name: {
    marginLeft: 15,
  },
  flname: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateTime: {
    marginLeft: 40,
    marginTop: 5,
    alignItems: 'flex-end',
  },
  contentContainer: {
    paddingBottom: 100,
  },
})