import {View, Text} from 'react-native';
import React from 'react';

import Feed from './src/Feed';
import {Provider} from 'react-redux';

import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Feed />
    </Provider>
  );
};

export default App;
