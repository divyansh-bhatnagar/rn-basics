import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import {Context} from '../Context/BlogContext';
import Octicons from 'react-native-vector-icons/Octicons';

export default function IndexScreen() {
  //we're using useContext hook to get access to our BlogContext.
  // const blogPosts = useContext(BlogContext);

  //we're using useContext hook to get access to our BlogContext. and we destructure it to get access to our blogPosts array.
  const {state, addBlogPost, deleteBlogPost} = useContext(Context);
  return (
    <View>
      <Text>IndexScreen</Text>
      <Button title="add post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({item}) => {
          return (
            <View style={styles.blogList}>
              <Text style={styles.title}>
                {item.title} - {item.id}
              </Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Octicons name="trash" size={24} color="black" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  blogList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    backgroundColor: '#fafafa',
    borderBottomWidth: 1,

    borderColor: '#ddd',
  },
  title: {
    fontSize: 18,
  },
});
