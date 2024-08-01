import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Colors from '../constants/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  const user = {
    name: 'Shamodha Sahan',
    email: 'shamodha7@gmail.com',
    profilePicture: 'https://placehold.co/150',
  };

  const handleLogout = () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Log Out',
          onPress: () => {
            navigation.navigate('Login');
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{uri: user.profilePicture}}
          style={styles.profilePicture}
        />
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>

        <TouchableOpacity style={styles.editButton}>
          <MaterialIcons name="edit" size={24} color={Colors.background} />
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Account Settings</Text>
        <TouchableOpacity style={styles.settingItem}>
          <MaterialIcons name="password" size={24} color={Colors.primary} />
          <Text style={styles.settingText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <MaterialIcons name="email" size={24} color={Colors.primary} />
          <Text style={styles.settingText}>Update Email</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Privacy & Security</Text>
        <TouchableOpacity style={styles.settingItem}>
          <MaterialIcons name="lock" size={24} color={Colors.primary} />
          <Text style={styles.settingText}>Two-Factor Authentication</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <MaterialIcons
            name="visibility-off"
            size={24}
            color={Colors.primary}
          />
          <Text style={styles.settingText}>Manage App Permissions</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <MaterialIcons name="logout" size={24} color={Colors.background} />
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
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

export default ProfileScreen;
