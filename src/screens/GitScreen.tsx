// src/screens/GitScreen.tsx
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

const GitScreen: React.FC = () => {
  const [url, setUrl] = useState('');
  const [commitMessage, setCommitMessage] = useState('');

  const copyToClipboard = (text: string) => {
    Clipboard.setString(text);
    Alert.alert('Copied to clipboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Git Operations</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Git URL"
        value={url}
        onChangeText={setUrl}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Commit Message"
        value={commitMessage}
        onChangeText={setCommitMessage}
      />
      <Button
        title="Generate Git Command"
        onPress={() =>
          copyToClipboard(`git commit -m "${commitMessage}" && git push ${url}`)
        }
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

export default GitScreen;
