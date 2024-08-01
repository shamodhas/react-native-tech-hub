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
      <View style={styles.section}>
        <Text style={styles.subtitle}>Introduction</Text>
        <Text style={styles.text}>
          Nginx is a high-performance web server and reverse proxy server known
          for its stability, rich feature set, and low resource consumption. It
          is often used for serving static content, load balancing, and acting
          as a reverse proxy for web applications.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Basic Setup</Text>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.bold}>Install Nginx:</Text>
          </View>
          <CodeSnippet
            code="sudo apt update\nsudo apt install nginx"
            onCopy={() =>
              copyToClipboard('sudo apt update\nsudo apt install nginx')
            }
          />
          <Text>Install Nginx from the official repository.</Text>
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
          <Text>Start the Nginx service to begin serving content.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>3.</Text>
            <Text style={styles.bold}>Enable Nginx on Boot:</Text>
          </View>
          <CodeSnippet
            code="sudo systemctl enable nginx"
            onCopy={() => copyToClipboard('sudo systemctl enable nginx')}
          />
          <Text>Ensure Nginx starts automatically on system boot.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>4.</Text>
            <Text style={styles.bold}>Check Nginx Status:</Text>
          </View>
          <CodeSnippet
            code="sudo systemctl status nginx"
            onCopy={() => copyToClipboard('sudo systemctl status nginx')}
          />
          <Text>Verify that the Nginx service is running correctly.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Intermediate Configuration</Text>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>5.</Text>
            <Text style={styles.bold}>Configure a Virtual Host:</Text>
          </View>
          <CodeSnippet
            code="sudo nano /etc/nginx/sites-available/example.com"
            onCopy={() =>
              copyToClipboard(
                'sudo nano /etc/nginx/sites-available/example.com',
              )
            }
          />
          <Text>Create a virtual host configuration file for your domain.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>6.</Text>
            <Text style={styles.bold}>Enable the Virtual Host:</Text>
          </View>
          <CodeSnippet
            code="sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/"
            onCopy={() =>
              copyToClipboard(
                'sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/',
              )
            }
          />
          <Text>
            Link the configuration file to the sites-enabled directory.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>7.</Text>
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
            <Text style={styles.stepNumber}>8.</Text>
            <Text style={styles.bold}>Reload Nginx:</Text>
          </View>
          <CodeSnippet
            code="sudo systemctl reload nginx"
            onCopy={() => copyToClipboard('sudo systemctl reload nginx')}
          />
          <Text>Apply changes by reloading Nginx.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Advanced Features</Text>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>9.</Text>
            <Text style={styles.bold}>Set Up SSL with Let's Encrypt:</Text>
          </View>
          <CodeSnippet
            code="sudo apt install certbot python3-certbot-nginx\nsudo certbot --nginx"
            onCopy={() =>
              copyToClipboard(
                'sudo apt install certbot python3-certbot-nginx\nsudo certbot --nginx',
              )
            }
          />
          <Text>
            Install Certbot and configure SSL certificates with Let's Encrypt.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>10.</Text>
            <Text style={styles.bold}>Configure Load Balancing:</Text>
          </View>
          <CodeSnippet
            code="sudo nano /etc/nginx/nginx.conf"
            onCopy={() => copyToClipboard('sudo nano /etc/nginx/nginx.conf')}
          />
          <Text>
            Set up load balancing in the main Nginx configuration file.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Sample Exercises</Text>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.bold}>Configure Reverse Proxy:</Text>
          </View>
          <CodeSnippet
            code="sudo nano /etc/nginx/sites-available/reverse-proxy\n# Add proxy_pass configuration"
            onCopy={() =>
              copyToClipboard(
                'sudo nano /etc/nginx/sites-available/reverse-proxy\n# Add proxy_pass configuration',
              )
            }
          />
          <Text>Set up Nginx as a reverse proxy for a web application.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>2.</Text>
            <Text style={styles.bold}>Create a Custom Error Page:</Text>
          </View>
          <CodeSnippet
            code="sudo nano /etc/nginx/sites-available/example.com\n# Add error_page directive"
            onCopy={() =>
              copyToClipboard(
                'sudo nano /etc/nginx/sites-available/example.com\n# Add error_page directive',
              )
            }
          />
          <Text>Customize error pages for your website.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>3.</Text>
            <Text style={styles.bold}>Monitor Nginx Logs:</Text>
          </View>
          <CodeSnippet
            code="sudo tail -f /var/log/nginx/access.log\nsudo tail -f /var/log/nginx/error.log"
            onCopy={() =>
              copyToClipboard(
                'sudo tail -f /var/log/nginx/access.log\nsudo tail -f /var/log/nginx/error.log',
              )
            }
          />
          <Text>Monitor Nginx access and error logs for troubleshooting.</Text>
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
