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
      <View style={styles.section}>
        <Text style={styles.subtitle}>Introduction</Text>
        <Text style={styles.text}>
          Ubuntu Server is a popular choice for web hosting and server
          management due to its stability, security, and ease of use. It is an
          open-source operating system based on Debian, providing a robust
          platform for various server-related tasks including web hosting, cloud
          services, and more.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Basic Setup</Text>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.bold}>Update System:</Text>
          </View>
          <CodeSnippet
            code="sudo apt update && sudo apt upgrade"
            onCopy={() =>
              copyToClipboard('sudo apt update && sudo apt upgrade')
            }
          />
          <Text>
            Update the package list and upgrade all installed packages to their
            latest versions.
          </Text>
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
          <Text>Install the Apache web server to serve web pages.</Text>
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
          <Text>
            Start the Apache service so it begins serving web content.
          </Text>
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
          <Text>Configure Apache to start automatically on system boot.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Intermediate Configuration</Text>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>5.</Text>
            <Text style={styles.bold}>Configure Firewall:</Text>
          </View>
          <CodeSnippet
            code="sudo ufw allow 'Apache Full'"
            onCopy={() => copyToClipboard("sudo ufw allow 'Apache Full'")}
          />
          <Text>Set up the firewall to allow traffic for Apache services.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>6.</Text>
            <Text style={styles.bold}>Create Virtual Host:</Text>
          </View>
          <CodeSnippet
            code="sudo nano /etc/apache2/sites-available/example.com.conf"
            onCopy={() =>
              copyToClipboard(
                'sudo nano /etc/apache2/sites-available/example.com.conf',
              )
            }
          />
          <Text>Set up a virtual host configuration file for your domain.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>7.</Text>
            <Text style={styles.bold}>Enable Virtual Host:</Text>
          </View>
          <CodeSnippet
            code="sudo a2ensite example.com.conf"
            onCopy={() => copyToClipboard('sudo a2ensite example.com.conf')}
          />
          <Text>Activate the virtual host configuration you created.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>8.</Text>
            <Text style={styles.bold}>Reload Apache:</Text>
          </View>
          <CodeSnippet
            code="sudo systemctl reload apache2"
            onCopy={() => copyToClipboard('sudo systemctl reload apache2')}
          />
          <Text>Apply changes by reloading the Apache service.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Advanced Features</Text>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>9.</Text>
            <Text style={styles.bold}>Manage Users and Permissions:</Text>
          </View>
          <CodeSnippet
            code="sudo adduser <username>\nsudo usermod -aG sudo <username>"
            onCopy={() =>
              copyToClipboard(
                'sudo adduser <username>\nsudo usermod -aG sudo <username>',
              )
            }
          />
          <Text>Add a new user and grant administrative privileges.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>10.</Text>
            <Text style={styles.bold}>Set Up Automated Backups:</Text>
          </View>
          <CodeSnippet
            code="sudo apt install rsync\nrsync -av --delete /source/directory /backup/directory"
            onCopy={() =>
              copyToClipboard(
                'sudo apt install rsync\nrsync -av --delete /source/directory /backup/directory',
              )
            }
          />
          <Text>
            Install rsync and set up a backup schedule for your files.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Sample Exercises</Text>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.bold}>Configure SSL for Apache:</Text>
          </View>
          <CodeSnippet
            code="sudo apt install certbot python3-certbot-apache\nsudo certbot --apache"
            onCopy={() =>
              copyToClipboard(
                'sudo apt install certbot python3-certbot-apache\nsudo certbot --apache',
              )
            }
          />
          <Text>Set up SSL certificates and configure Apache for HTTPS.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>2.</Text>
            <Text style={styles.bold}>Install and Configure MySQL:</Text>
          </View>
          <CodeSnippet
            code="sudo apt install mysql-server\nsudo mysql_secure_installation"
            onCopy={() =>
              copyToClipboard(
                'sudo apt install mysql-server\nsudo mysql_secure_installation',
              )
            }
          />
          <Text>Install MySQL server and secure your installation.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>3.</Text>
            <Text style={styles.bold}>Deploy a Sample Application:</Text>
          </View>
          <CodeSnippet
            code="sudo git clone <repo-url>\nsudo cp -r <app-directory> /var/www/html/"
            onCopy={() =>
              copyToClipboard(
                'sudo git clone <repo-url>\nsudo cp -r <app-directory> /var/www/html/',
              )
            }
          />
          <Text>
            Clone a repository and deploy a sample application to your web
            server.
          </Text>
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
