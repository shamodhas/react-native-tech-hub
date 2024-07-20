// src/screens/NginxScreen.tsx
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

const NginxScreen: React.FC = () => {
  const [domain, setDomain] = useState('');
  const [config, setConfig] = useState('');

  const copyToClipboard = (text: string) => {
    Clipboard.setString(text);
    Alert.alert('Copied to clipboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nginx Configuration</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Domain Name"
        value={domain}
        onChangeText={setDomain}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Nginx Configuration"
        value={config}
        onChangeText={setConfig}
      />
      <Button
        title="Generate Nginx Config"
        onPress={() =>
          copyToClipboard(
            `server { \n\tserver_name ${domain}; \n\t${config} \n}`,
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

export default NginxScreen;
