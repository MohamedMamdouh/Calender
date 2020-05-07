import React from 'react';
import AppNavigation from '../../navigation/AppNavigation';
import {Provider} from 'react-redux';
import createStore from '../../redux';

// create our store
const store = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
