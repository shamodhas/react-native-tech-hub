import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text} from 'react-native';

const Stack = createStackNavigator();

function text(): React.JSX.Element {
  return <Text>Hello</Text>;
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={text} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
