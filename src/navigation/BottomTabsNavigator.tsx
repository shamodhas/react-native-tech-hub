import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Colors from '../constants/Colors';
import TechnologyStackNavigator from './TechnologiesStackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import ChatScreen from '../screens/ChatScreen';

const Tab = createBottomTabNavigator();

const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        if (route.name === 'Settings') return null;

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

        const iconName = `${
          route.name === 'Home'
            ? 'home'
            : route.name === 'Technologies'
            ? 'laptop'
            : route.name === 'Profile'
            ? 'person'
            : route.name === 'Chat'
            ? 'chatbox'
            : 'home'
        }${isFocused ? '' : '-outline'}`;

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={styles.tab}
            activeOpacity={0.8}>
            <View
              style={[
                styles.iconContainer,
                isFocused && styles.activeIconContainer,
              ]}>
              <Icon
                name={iconName}
                size={26}
                color={isFocused ? Colors.background : Colors.textSecondary}
                style={styles.icon}
              />
              {isFocused && (
                <Text
                  style={[styles.label]}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {label}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
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
          borderRadius: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Technologies" component={TechnologyStackNavigator} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{tabBarButton: () => null}}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#1E1E1E',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeIconContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  icon: {
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    color: Colors.background,
  },
});

export default BottomTabsNavigator;
