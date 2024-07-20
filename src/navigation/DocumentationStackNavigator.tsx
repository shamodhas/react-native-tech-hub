import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DocumentScreen from '../screens/DocumentScreen';
import GitScreen from '../screens/GitScreen';
import GitHubScreen from '../screens/GitHubScreen';
import UbuntuServerScreen from '../screens/UbuntuServerScreen';
import NginxScreen from '../screens/NginxScreen';

const Stack = createStackNavigator();

const DocumentationStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Document"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Document" component={DocumentScreen} />
      <Stack.Screen name="Git" component={GitScreen} />
      <Stack.Screen name="GitHub" component={GitHubScreen} />
      <Stack.Screen name="UbuntuServer" component={UbuntuServerScreen} />
      <Stack.Screen name="Nginx" component={NginxScreen} />
    </Stack.Navigator>
  );
};

export default DocumentationStackNavigator;
