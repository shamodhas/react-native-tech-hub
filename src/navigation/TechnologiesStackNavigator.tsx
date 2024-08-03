import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LazyLoadComponent from '../components/LazyLoadComponent';
import TechnologiesMenuScreen from '../screens/TechnologiesMenuScreen';
import {technologyRoutes} from './routes/technologyRoutes';
import TechnologyScreenLayout from '../components/layout/TechnologyScreenLayout';

const Stack = createStackNavigator();

const TechnologiesStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Technologies"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}>
      <Stack.Screen
        key="Technologies"
        name="Technologies"
        component={TechnologiesMenuScreen}
      />
      {technologyRoutes.map(({name, route, component: Component, image}) => (
        <Stack.Screen
          key={route}
          name={route}
          children={(props: any) => (
            <TechnologyScreenLayout title={name} image={image} {...props}>
              <LazyLoadComponent Component={Component} {...props} />
            </TechnologyScreenLayout>
          )}
        />
      ))}
    </Stack.Navigator>
  );
};

export default TechnologiesStackNavigator;
