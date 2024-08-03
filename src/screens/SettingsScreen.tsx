// src/screens/SettingsScreen.tsx

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Colors from '../constants/Colors'; // Adjust the path as needed

const SettingsScreen: React.FC = () => {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Settings</Text>
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
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: Colors.primary,
    marginBottom: 16,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  userEmail: {
    fontSize: 18,
    color: Colors.textPrimary,
    marginBottom: 20,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 20,
    padding: 12,
    elevation: 4,
  },
  editButtonText: {
    color: Colors.background,
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginBottom: 24,
    backgroundColor: Colors.secondary,
    borderRadius: 15,
    padding: 16,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 12,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  settingText: {
    fontSize: 16,
    color: Colors.textPrimary,
    marginLeft: 12,
    fontWeight: 'bold',
  },
  logoutContainer: {
    marginTop: 30,
    paddingBottom: 100,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 20,
    padding: 12,
    elevation: 4,
  },
  logoutButtonText: {
    color: Colors.background,
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
