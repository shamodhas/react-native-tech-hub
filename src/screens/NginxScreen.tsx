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

const NginxScreen: React.FC = () => {
  const [domain, setDomain] = useState('');
  const [root, setRoot] = useState('');

  const handleCopy = async () => {
    const code = `server {
      listen 80;
      server_name ${domain};
      root ${root};
      index index.html;
      
      location / {
        try_files \$uri \$uri/ =404;
      }
    }`;
    await Clipboard.setString(code);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Nginx Configuration</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Domain"
        value={domain}
        onChangeText={setDomain}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Root Directory"
        value={root}
        onChangeText={setRoot}
      />
      <Button title="Generate and Copy Configuration" onPress={handleCopy} />
      <Text style={styles.code}>{`server {
      listen 80;
      server_name ${domain};
      root ${root};
      index index.html;
      
      location / {
        try_files \$uri \$uri/ =404;
      }
    }`}</Text>
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

export default NginxScreen;
