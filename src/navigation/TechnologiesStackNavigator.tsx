import React, {Suspense} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {technologyRoutes} from './routes/technologyRoutes';
import LazyLoadComponent from '../components/LazyLoadComponent';
import TechnologiesMenuScreen from '../screens/TechnologiesMenuScreen';

const Stack = createStackNavigator();

const TechnologiesStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Technologies"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        key="Technologies"
        name="Technologies"
        component={TechnologiesMenuScreen}
      />
      {technologyRoutes.map(({route, component: Component}) => (
        <Stack.Screen
          key={route}
          name={route}
          component={
            Component
            //   (props: any) => (
            //   <LazyLoadComponent Component={Component} {...props} />
            // )
          }
        />
      ))}
    </Stack.Navigator>
  );
};

export default TechnologiesStackNavigator;
