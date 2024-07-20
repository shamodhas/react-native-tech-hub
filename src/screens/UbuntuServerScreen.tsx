import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Clipboard,
  StyleSheet,
  ScrollView,
} from 'react-native';

const UbuntuServerScreen: React.FC = () => {
  const [command, setCommand] = useState('');

  const handleCopy = async () => {
    const code = `ssh user@server '${command}'`;
    await Clipboard.setString(code);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ubuntu Server Commands</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Command"
        value={command}
        onChangeText={setCommand}
      />
      <Button title="Generate and Copy Command" onPress={handleCopy} />
      <Text style={styles.code}>{`ssh user@server '${command}'`}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  code: {
    marginTop: 20,
    fontFamily: 'Courier New',
    color: '#333',
  },
});

export default UbuntuServerScreen;
