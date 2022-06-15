import React, {useReducer, createContext} from 'react';

import createDataContext from './createDataContext';

const BlogContext = React.createContext(); //create context

const blogPosts = [{title: 'Post #1'}, {title: 'Post #2'}];

//reducer func
const blogReducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_BLOG_POST':
      return state.filter(blogPost => blogPost.id !== action.payload);
    case 'ADD_BLOG_POST':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999),
          title: `Blog Post #${state.length + 1}`,
        },
      ];
    default:
      return state;
  }
};

//modify the reducer func to add a new blog post.
const addBlogPost = dispatch => {
  return () => {
    dispatch({type: 'ADD_BLOG_POST'});
  };
};

const deleteBlogPost = dispatch => {
  return () => {
    dispatch({type: 'DELETE_BLOG_POST', payload: id});
  };
};

//calling createDataContext, passing reducer func, object with all actions, and initial state.
//And they're returned/ come back to us context object and provider that makes it available to our child components.
export const {Context, Provider} = createDataContext(
  blogReducer,
  {addBlogPost, deleteBlogPost},
  [],
);
