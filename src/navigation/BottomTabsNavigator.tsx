import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GitScreen from '../screens/GitScreen';
import GitHubScreen from '../screens/GitHubScreen';
import UbuntuServerScreen from '../screens/UbuntuServerScreen';
import NginxScreen from '../screens/NginxScreen';
import HomeScreen from '../screens/HomeScreen';
import DocumentationStackNavigator from './DocumentationStackNavigator';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Documentation"
        component={DocumentationStackNavigator}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;


// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import GitScreen from '../screens/GitScreen';
// import GitHubScreen from '../screens/GitHubScreen';
// import UbuntuServerScreen from '../screens/UbuntuServerScreen';
// import NginxScreen from '../screens/NginxScreen';
// import HomeScreen from '../screens/HomeScreen';
// import DocumentationStackNavigator from './DocumentationStackNavigator';
// import ProfileScreen from '../screens/ProfileScreen';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import {View} from 'react-native-reanimated/lib/typescript/Animated';
// import {StyleSheet} from 'react-native';
// import {Text} from 'react-native-paper';

// const Tab = createBottomTabNavigator();

// const BottomTabsNavigator: React.FC = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         tabBarIcon: ({color, size}) => {
//           let iconName;

//           switch (route.name) {
//             case 'Home':
//               iconName = 'home';
//               break;
//             case 'Documentation':
//               iconName = 'description';
//               break;
//             case 'Profile':
//               iconName = 'person';
//               break;
//             default:
//               iconName = 'help';
//               break;
//           }

//           return <Icon name={iconName} size={size} color={color} />;
//         },
//         tabBarLabelStyle: {fontSize: 14}, // Customize label style
//         tabBarStyle: {
//           backgroundColor: '#ffffff', // Tab bar background color
//           height: 60, // Tab bar height
//         },
//         tabBarActiveTintColor: '#6200ea', // Color for active tab
//         tabBarInactiveTintColor: '#b0b0b0', // Color for inactive tab
//         tabBarItemStyle: {
//           borderRadius: 30, // Make tabs rounded
//           margin: 5,
//           backgroundColor: '#f0f0f0', // Background color for each tab
//         },
//         tabBarLabel: ({focused, color}) => (
//           <View
//             style={[
//               styles.tabBarLabelContainer,
//               focused && styles.tabBarLabelFocused,
//             ]}>
//             <Text style={[styles.tabBarLabel, {color}]}>{route.name}</Text>
//           </View>
//         ),
//       })}>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen
//         name="Documentation"
//         component={DocumentationStackNavigator}
//       />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   tabBarLabelContainer: {
//     paddingVertical: 4,
//     paddingHorizontal: 8,
//     borderRadius: 16,
//   },
//   tabBarLabel: {
//     fontSize: 12,
//     textAlign: 'center',
//   },
//   tabBarLabelFocused: {
//     backgroundColor: '#e6e6e6',
//     borderRadius: 12,
//   },
// });

// export default BottomTabsNavigator;
