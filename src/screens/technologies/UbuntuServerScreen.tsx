import React from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import Colors from '../../constants/Colors';
import CodeSnippet from '../../components/CodeSnippet';

const UbuntuServerScreen: React.FC = () => {
  const copyToClipboard = (text: string) => {
    Alert.alert('Copied to clipboard', text);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ubuntu Server - not finalized</Text>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Overview</Text>
        <Text style={styles.text}>
          Ubuntu Server is a free, open-source operating system that is widely
          used for web hosting, cloud computing, and various server-related
          tasks. It is based on Debian and known for its robustness and ease of
          use.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>How to Use It</Text>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.bold}>Update Packages:</Text>
          </View>
          <CodeSnippet
            code="sudo apt update && sudo apt upgrade"
            onCopy={() =>
              copyToClipboard('sudo apt update && sudo apt upgrade')
            }
          />
          <Text>Update the package lists and upgrade installed packages.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>2.</Text>
            <Text style={styles.bold}>Install Apache:</Text>
          </View>
          <CodeSnippet
            code="sudo apt install apache2"
            onCopy={() => copyToClipboard('sudo apt install apache2')}
          />
          <Text>Install the Apache web server.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>3.</Text>
            <Text style={styles.bold}>Start Apache:</Text>
          </View>
          <CodeSnippet
            code="sudo systemctl start apache2"
            onCopy={() => copyToClipboard('sudo systemctl start apache2')}
          />
          <Text>Start the Apache service.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>4.</Text>
            <Text style={styles.bold}>Enable Apache:</Text>
          </View>
          <CodeSnippet
            code="sudo systemctl enable apache2"
            onCopy={() => copyToClipboard('sudo systemctl enable apache2')}
          />
          <Text>Enable Apache to start on boot.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>How It Works</Text>
        <Text style={styles.text}>
          Ubuntu Server provides a stable and secure environment for running
          applications and services. It uses the APT package manager to
          facilitate software installation and management.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Sample Exercises</Text>
        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.bold}>Configure a Firewall:</Text>
          </View>
          <CodeSnippet
            code="sudo ufw allow 'Apache Full'"
            onCopy={() => copyToClipboard('sudo ufw allow Apache Full')}
          />
          <Text>Allow Apache traffic through the firewall.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>2.</Text>
            <Text style={styles.bold}>Create a Virtual Host:</Text>
          </View>
          <CodeSnippet
            code="sudo nano /etc/apache2/sites-available/example.com.conf"
            onCopy={() =>
              copyToClipboard(
                'sudo nano /etc/apache2/sites-available/example.com.conf',
              )
            }
          />
          <Text>Create a virtual host configuration file.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>3.</Text>
            <Text style={styles.bold}>Enable the Site:</Text>
          </View>
          <CodeSnippet
            code="sudo a2ensite example.com.conf"
            onCopy={() => copyToClipboard('sudo a2ensite example.com.conf')}
          />
          <Text>Enable the new site configuration.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>4.</Text>
            <Text style={styles.bold}>Reload Apache:</Text>
          </View>
          <CodeSnippet
            code="sudo systemctl reload apache2"
            onCopy={() => copyToClipboard('sudo systemctl reload apache2')}
          />
          <Text>Reload Apache to apply changes.</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: Colors.background,
    paddingBottom: 100,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: 16,
  },
  section: {
    marginBottom: 24,
    padding: 20,
    backgroundColor: Colors.textSecondary,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.secondary,
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.primary,
  },
  stepContainer: {
    marginBottom: 16,
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  stepNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
    marginRight: 8,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default UbuntuServerScreen;
