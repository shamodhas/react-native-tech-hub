import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabsNavigator from './BottomTabsNavigator';

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
