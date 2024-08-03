import React from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';
import Colors from '../constants/Colors';

const LoadingComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
});

export default LoadingComponent;
