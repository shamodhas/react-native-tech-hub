import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Tech Hub</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#007bff',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Header;
