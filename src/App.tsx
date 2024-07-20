import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Provider} from 'react-redux';
import { store } from './store/store';
import MainNavigator from './navigation/MainNavigator';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

export default App;
