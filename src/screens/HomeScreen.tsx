import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';
import Colors from '../constants/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types/mainNavigationTypes';
import TechnologyCard from '../components/TechnologyCard';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const animatedValue = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  const animatedStyle = {
    opacity: animatedValue,
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0.95, 1],
        }),
      },
    ],
  };

  const topTechnologies = [
    {
      image: require('../assets/nginx.png'),
      title: 'Nginx - How to work',
    },
    {
      image: require('../assets/github.png'),
      title: 'GitHub - Learn and practice',
    },
    {
      image: require('../assets/spring-boot.png'),
      title: 'Spring Boot - Learn and practice',
    },
    {
      image: require('../assets/ubuntu.png'),
      title: 'Ubuntu Server - How to work',
    },
    {
      image: require('../assets/github.png'),
      title: 'GitHub - Learn and practice',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.subtitle}>Shamodha Sahan</Text>
        </View>
        <Image source={require('../assets/my.jpg')} style={styles.userImage} />
      </View>

      <View style={styles.middleContainer}>
        <View style={styles.featuredContainer}>
          <Text style={styles.sectionTitle}>Top Technologies</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.featuredScroll}>
            {topTechnologies.map((tech, index) => (
              <Animated.View
                key={`tech-home-${index}`}
                style={[styles.featuredItem, animatedStyle]}>
                <TechnologyCard image={tech.image} title={tech.title} />
              </Animated.View>
            ))}
          </ScrollView>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActionsContainer}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActions}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => navigation.navigate('Technologies')}>
              <MaterialIcons name="book" size={30} color={Colors.primary} />
              <Text style={styles.actionText}>Technologies</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => navigation.navigate('Profile')}>
              <MaterialIcons name="person" size={30} color={Colors.primary} />
              <Text style={styles.actionText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => navigation.navigate('Settings')}>
              <MaterialIcons name="settings" size={30} color={Colors.primary} />
              <Text style={styles.actionText}>Settings</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Announcements */}
        <View style={styles.announcementsContainer}>
          <Text style={styles.sectionTitle}>Announcements</Text>
          <View style={styles.announcementItem}>
            <MaterialIcons
              name="announcement"
              size={24}
              color={Colors.tertiary}
            />
            <Text style={styles.announcementText}>
              New feature coming soon!
            </Text>
          </View>
          <View style={styles.announcementItem}>
            <MaterialIcons
              name="announcement"
              size={24}
              color={Colors.tertiary}
            />
            <Text style={styles.announcementText}>
              Maintenance scheduled for tomorrow.
            </Text>
          </View>
        </View>

        {/* Upcoming Events */}
        <View style={styles.eventsContainer}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          <View style={styles.eventItem}>
            <Text style={styles.eventDate}>July 30, 2024</Text>
            <Text style={styles.eventDescription}>
              Webinar on React Native Development
            </Text>
          </View>
          <View style={styles.eventItem}>
            <Text style={styles.eventDate}>August 5, 2024</Text>
            <Text style={styles.eventDescription}>
              Workshop on Modern UI Design
            </Text>
          </View>
        </View>

        {/* Updates & Notifications */}
        <View style={styles.updatesContainer}>
          <Text style={styles.sectionTitle}>Recent Updates</Text>
          <View style={styles.updateItem}>
            <MaterialIcons name="info" size={24} color={Colors.primary} />
            <Text style={styles.updateText}>New feature added to the app.</Text>
          </View>
          <View style={styles.updateItem}>
            <MaterialIcons name="info" size={24} color={Colors.primary} />
            <Text style={styles.updateText}>
              Bug fixes and performance improvements.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  userImage: {
    width: 64,
    height: 64,
    borderRadius: 16,
  },
  middleContainer: {
    paddingHorizontal: 10,
  },
  header: {
    marginBottom: 24,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderColor: Colors.accent,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#262626',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginTop: 4,
  },
  featuredContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#262626',
    marginBottom: 16,
  },
  featuredScroll: {
    paddingVertical: 8,
  },
  featuredItem: {
    width: 150,
    height: 200,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: '70%',
    borderRadius: 20,
  },
  featuredText: {
    fontSize: 18,
    // color: Colors.background,
    marginTop: 8,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  quickActionsContainer: {
    marginBottom: 24,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    flex: 1,
    marginHorizontal: 8,
    elevation: 5,
  },
  actionText: {
    color: Colors.primary,
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  announcementsContainer: {
    marginBottom: 24,
  },
  announcementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    elevation: 5,
  },
  announcementText: {
    fontSize: 16,
    color: Colors.tertiary,
    marginLeft: 12,
    fontWeight: 'bold',
  },
  eventsContainer: {
    marginBottom: 24,
  },
  eventItem: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    elevation: 5,
  },
  eventDate: {
    fontSize: 16,
    color: Colors.tertiary,
    fontWeight: 'bold',
  },
  eventDescription: {
    fontSize: 18,
    color: Colors.secondary,
    marginTop: 4,
    fontWeight: 'bold',
  },
  updatesContainer: {
    marginBottom: 24,
  },
  updateItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  updateText: {
    fontSize: 16,
    color: Colors.primary,
    marginLeft: 12,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
