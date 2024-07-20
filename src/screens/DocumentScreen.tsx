// src/screens/DocumentScreen.tsx
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const DocumentScreen: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Documentation</Text>
      <Button title="Git" onPress={() => navigation.navigate('Git')} />
      <Button title="GitHub" onPress={() => navigation.navigate('GitHub')} />
      <Button
        title="Ubuntu Server"
        onPress={() => navigation.navigate('UbuntuServer')}
      />
      <Button title="Nginx" onPress={() => navigation.navigate('Nginx')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default DocumentScreen;
