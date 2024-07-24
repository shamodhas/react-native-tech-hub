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
import {useNavigation} from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  // Animation values for featured items
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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Here’s what’s happening today</Text>
      </View>

      {/* Featured Content */}
      <View style={styles.featuredContainer}>
        <Text style={styles.sectionTitle}>Featured Content</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.featuredScroll}>
          <Animated.View style={[styles.featuredItem, animatedStyle]}>
            <Image
              source={{uri: 'https://via.placeholder.com/300x200'}}
              style={styles.featuredImage}
            />
            <Text style={styles.featuredText}>Explore New Features</Text>
          </Animated.View>
          <Animated.View style={[styles.featuredItem, animatedStyle]}>
            <Image
              source={{uri: 'https://via.placeholder.com/300x200'}}
              style={styles.featuredImage}
            />
            <Text style={styles.featuredText}>Top Tips & Tricks</Text>
          </Animated.View>
        </ScrollView>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActionsContainer}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActions}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('Documentation')}>
            <MaterialIcons name="book" size={30} color={Colors.background} />
            <Text style={styles.actionText}>Documentation</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('Profile')}>
            <MaterialIcons name="person" size={30} color={Colors.background} />
            <Text style={styles.actionText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('Settings')}>
            <MaterialIcons
              name="settings"
              size={30}
              color={Colors.background}
            />
            <Text style={styles.actionText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Announcements */}
      <View style={styles.announcementsContainer}>
        <Text style={styles.sectionTitle}>Announcements</Text>
        <View style={styles.announcementItem}>
          <MaterialIcons name="announcement" size={24} color={Colors.primary} />
          <Text style={styles.announcementText}>New feature coming soon!</Text>
        </View>
        <View style={styles.announcementItem}>
          <MaterialIcons name="announcement" size={24} color={Colors.primary} />
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: Colors.background,
  },
  header: {
    marginBottom: 24,
    padding: 20,
    backgroundColor: Colors.primary,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.background,
  },
  subtitle: {
    fontSize: 20,
    color: Colors.background,
    marginTop: 4,
  },
  featuredContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 16,
  },
  featuredScroll: {
    paddingVertical: 8,
  },
  featuredItem: {
    width: 300,
    height: 200,
    backgroundColor: Colors.secondary,
    borderRadius: 20,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    elevation: 6,
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: '70%',
    borderRadius: 20,
  },
  featuredText: {
    fontSize: 18,
    color: Colors.background,
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
    backgroundColor: Colors.primary,
    borderRadius: 20,
    padding: 16,
    flex: 1,
    marginHorizontal: 8,
    elevation: 5,
  },
  actionText: {
    color: Colors.background,
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
    backgroundColor: Colors.secondary,
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    elevation: 5,
  },
  announcementText: {
    fontSize: 16,
    color: Colors.primary,
    marginLeft: 12,
    fontWeight: 'bold',
  },
  eventsContainer: {
    marginBottom: 24,
  },
  eventItem: {
    backgroundColor: Colors.secondary,
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    elevation: 5,
  },
  eventDate: {
    fontSize: 16,
    color: Colors.primary,
    fontWeight: 'bold',
  },
  eventDescription: {
    fontSize: 18,
    color: Colors.textPrimary,
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
