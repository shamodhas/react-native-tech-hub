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

const GitScreen: React.FC = () => {
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleCopy = async () => {
    const code = `git commit -m "${message}" && git push ${url}`;
    await Clipboard.setString(code);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Git Commands</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Repository URL"
        value={url}
        onChangeText={setUrl}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Commit Message"
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Generate and Copy Command" onPress={handleCopy} />
      <Text
        style={
          styles.code
        }>{`git commit -m "${message}" && git push ${url}`}</Text>
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

export default GitScreen;
