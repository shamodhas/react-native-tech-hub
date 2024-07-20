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

const GitHubScreen: React.FC = () => {
  const [repo, setRepo] = useState('');
  const [description, setDescription] = useState('');

  const handleCopy = async () => {
    const code = `git init && git remote add origin ${repo} && git commit -m "${description}" && git push -u origin master`;
    await Clipboard.setString(code);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>GitHub Commands</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Repository URL"
        value={repo}
        onChangeText={setRepo}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Commit Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Generate and Copy Command" onPress={handleCopy} />
      <Text
        style={
          styles.code
        }>{`git init && git remote add origin ${repo} && git commit -m "${description}" && git push -u origin master`}</Text>
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

export default GitHubScreen;
