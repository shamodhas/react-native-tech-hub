import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import NavigationButton from '../components/NavigationButtons';
import {useNavigation} from '@react-navigation/native';

const DocumentScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <NavigationButton
        title="Git"
        onPress={() => navigation.navigate('Git')}
      />
      <NavigationButton
        title="GitHub"
        onPress={() => navigation.navigate('GitHub')}
      />
      <NavigationButton
        title="Ubuntu Server"
        onPress={() => navigation.navigate('UbuntuServer')}
      />
      <NavigationButton
        title="Nginx"
        onPress={() => navigation.navigate('Nginx')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});

export default DocumentScreen;
