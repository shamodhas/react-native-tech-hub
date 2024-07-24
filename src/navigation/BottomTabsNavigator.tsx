import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import DocumentationStackNavigator from './DocumentationStackNavigator';
import ProfileScreen from '../screens/ProfileScreen';
import Colors from '../constants/Colors';

const Tab = createBottomTabNavigator();

const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label: any =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const iconName =
            route.name === 'Home'
              ? 'home'
              : route.name === 'Documentation'
              ? 'book'
              : 'person';

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={styles.tab}
              activeOpacity={0.8}>
              <View
                style={[
                  styles.iconContainer,
                  // isFocused && styles.activeIconContainer,
                ]}>
                <Icon
                  name={iconName}
                  size={26}
                  color={isFocused ? Colors.background : Colors.textSecondary}
                  style={styles.icon}
                />
              </View>
              {isFocused && (
                <View>
                  <Text style={[styles.label, styles.focusedLabel]}>
                    {label}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const BottomTabsNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textSecondary,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          elevation: 0,
          height: 70,
          position: 'absolute',
          bottom: 0,
          borderRadius: 35,
          overflow: 'hidden',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Documentation"
        component={DocumentationStackNavigator}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    left: 25,
    right: 25,
    height: 70,
    borderRadius: 35,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E1E1E',
  },
  tabBar: {
    flexDirection: 'row',
    height: 70,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    borderRadius: 35,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeIconContainer: {
    backgroundColor: Colors.secondary,
  },
  icon: {
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  focusedLabel: {
    color: Colors.background,
  },
});

export default BottomTabsNavigator;
