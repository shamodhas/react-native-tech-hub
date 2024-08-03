import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface NavigationButtonProps {
  title: string;
  onPress: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NavigationButton;
