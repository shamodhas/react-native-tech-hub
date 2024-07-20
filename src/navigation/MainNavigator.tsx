import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabsNavigator from './BottomTabsNavigator';

const MainNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
