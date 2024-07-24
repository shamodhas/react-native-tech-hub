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

// primary color - #1F4B2C, secoun- #4D7111, third - C3E956, four- 91EAAF, five - #F4FFFC

