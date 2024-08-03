import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
  StatusBar,
} from 'react-native';
import Colors from '../constants/Colors';

const LoginScreen: React.FC = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    navigation.navigate('Main'); // Navigate to the main app
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.png')} // Add your logo image in the assets folder
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.subtitle}>
          Learn How to Work with Technologies in the IT Industry
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor={Colors.textSecondary}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor={Colors.textSecondary}
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signupLink}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: Colors.secondary,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 15,
  },
  subtitle: {
    fontSize: 20,
    color: Colors.textPrimary,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: '600',
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginBottom: 30,
  },
  input: {
    height: 50,
    backgroundColor: Colors.backgroundSecondary,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: Colors.textPrimary,
    fontSize: 16,
    borderColor: Colors.secondary,
    borderWidth: 1,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  loginButton: {
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  loginButtonText: {
    color: Colors.background,
    fontSize: 18,
    fontWeight: '700',
  },
  signupLink: {
    marginTop: 20,
    alignItems: 'center',
  },
  signupText: {
    color: Colors.secondary,
    fontSize: 16,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
});

export default LoginScreen;
