import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GitScreen from '../screens/GitScreen';
import GitHubScreen from '../screens/GitHubScreen';
import UbuntuServerScreen from '../screens/UbuntuServerScreen';
import NginxScreen from '../screens/NginxScreen';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Git">
      <Stack.Screen name="Git" component={GitScreen} />
      <Stack.Screen name="GitHub" component={GitHubScreen} />
      <Stack.Screen name="UbuntuServer" component={UbuntuServerScreen} />
      <Stack.Screen name="Nginx" component={NginxScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
