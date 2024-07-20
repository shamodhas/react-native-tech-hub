// src/screens/GitHubScreen.tsx
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

const GitHubScreen: React.FC = () => {
  const [repoUrl, setRepoUrl] = useState('');
  const [issueTitle, setIssueTitle] = useState('');

  const copyToClipboard = (text: string) => {
    Clipboard.setString(text);
    Alert.alert('Copied to clipboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GitHub Operations</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter GitHub Repo URL"
        value={repoUrl}
        onChangeText={setRepoUrl}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Issue Title"
        value={issueTitle}
        onChangeText={setIssueTitle}
      />
      <Button
        title="Generate GitHub Issue URL"
        onPress={() =>
          copyToClipboard(
            `https://github.com/${repoUrl}/issues/new?title=${encodeURIComponent(
              issueTitle,
            )}`,
          )
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

export default GitHubScreen;
