import React from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import Colors from '../../constants/Colors';
import CodeSnippet from '../../components/CodeSnippet';

const NginxScreen: React.FC = () => {
  const copyToClipboard = (text: string) => {
    Alert.alert('Copied to clipboard', text);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Nginx - not finalized</Text>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Overview</Text>
        <Text style={styles.text}>
          Nginx is a high-performance web server and reverse proxy server. It is
          known for its stability, rich feature set, simple configuration, and
          low resource consumption.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>How to Use It</Text>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.bold}>Install Nginx:</Text>
          </View>
          <CodeSnippet
            code="sudo apt install nginx"
            onCopy={() => copyToClipboard('sudo apt install nginx')}
          />
          <Text>Install the Nginx web server.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>2.</Text>
            <Text style={styles.bold}>Start Nginx:</Text>
          </View>
          <CodeSnippet
            code="sudo systemctl start nginx"
            onCopy={() => copyToClipboard('sudo systemctl start nginx')}
          />
          <Text>Start the Nginx service.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>3.</Text>
            <Text style={styles.bold}>Enable Nginx:</Text>
          </View>
          <CodeSnippet
            code="sudo systemctl enable nginx"
            onCopy={() => copyToClipboard('sudo systemctl enable nginx')}
          />
          <Text>Enable Nginx to start on boot.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>4.</Text>
            <Text style={styles.bold}>Check Status:</Text>
          </View>
          <CodeSnippet
            code="sudo systemctl status nginx"
            onCopy={() => copyToClipboard('sudo systemctl status nginx')}
          />
          <Text>Check the status of the Nginx service.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>How It Works</Text>
        <Text style={styles.text}>
          Nginx uses an event-driven architecture to handle multiple connections
          simultaneously, making it highly scalable and efficient. It can be
          used as a web server, reverse proxy, load balancer, and HTTP cache.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Sample Exercises</Text>
        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.bold}>Create a Server Block:</Text>
          </View>
          <CodeSnippet
            code="sudo nano /etc/nginx/sites-available/example.com"
            onCopy={() =>
              copyToClipboard(
                'sudo nano /etc/nginx/sites-available/example.com',
              )
            }
          />
          <Text>Create a server block configuration file for your domain.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>2.</Text>
            <Text style={styles.bold}>Enable the Site:</Text>
          </View>
          <CodeSnippet
            code="sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/"
            onCopy={() =>
              copyToClipboard(
                'sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/',
              )
            }
          />
          <Text>Enable the new site by creating a symbolic link.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>3.</Text>
            <Text style={styles.bold}>Test Configuration:</Text>
          </View>
          <CodeSnippet
            code="sudo nginx -t"
            onCopy={() => copyToClipboard('sudo nginx -t')}
          />
          <Text>Test the Nginx configuration for syntax errors.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>4.</Text>
            <Text style={styles.bold}>Reload Nginx:</Text>
          </View>
          <CodeSnippet
            code="sudo systemctl reload nginx"
            onCopy={() => copyToClipboard('sudo systemctl reload nginx')}
          />
          <Text>Reload Nginx to apply changes.</Text>
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

export default NginxScreen;
