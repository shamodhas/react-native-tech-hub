// src/screens/UbuntuServerScreen.tsx
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Clipboard,
  Alert,
  StyleSheet,
} from 'react-native';

const UbuntuServerScreen: React.FC = () => {
  const [serverIp, setServerIp] = useState('');
  const [command, setCommand] = useState('');

  const copyToClipboard = (text: string) => {
    Clipboard.setString(text);
    Alert.alert('Copied to clipboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ubuntu Server Commands</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Server IP"
        value={serverIp}
        onChangeText={setServerIp}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Command"
        value={command}
        onChangeText={setCommand}
      />
      <Button
        title="Generate SSH Command"
        onPress={() => copyToClipboard(`ssh user@${serverIp} "${command}"`)}
      />
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
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default UbuntuServerScreen;
