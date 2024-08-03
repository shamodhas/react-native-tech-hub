import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../constants/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const NodeJsScreen: React.FC = () => {
  const copyToClipboard = (text: string) => {
    Alert.alert('Copied to clipboard', text);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Node.js</Text>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Overview</Text>
        <Text style={styles.text}>
          Node.js is a JavaScript runtime built on Chrome's V8 JavaScript
          engine. It allows developers to execute JavaScript code on the server
          side, enabling server-side scripting and building scalable network
          applications.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>How to Use It</Text>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.bold}>Install Node.js:</Text>
          </View>
          <View style={styles.inlineCodeWrapper}>
            <View style={styles.inlineCodeContainer}>
              <Text style={styles.inlineCode}>sudo apt install nodejs</Text>
            </View>
            <TouchableOpacity
              onPress={() => copyToClipboard('sudo apt install nodejs')}
              style={styles.copyButton}>
              <MaterialIcons
                name="content-copy"
                size={20}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
          <Text>
            Install Node.js using your package manager or download it from the
            official Node.js website.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>2.</Text>
            <Text style={styles.bold}>Create a Node.js File:</Text>
          </View>
          <View style={styles.inlineCodeWrapper}>
            <View style={styles.inlineCodeContainer}>
              <Text style={styles.inlineCode}>app.js</Text>
            </View>
            <TouchableOpacity
              onPress={() => copyToClipboard('app.js')}
              style={styles.copyButton}>
              <MaterialIcons
                name="content-copy"
                size={20}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
          <Text>Create a new JavaScript file to write your Node.js code.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>3.</Text>
            <Text style={styles.bold}>Write Basic Node.js Code:</Text>
          </View>
          <View style={styles.inlineCodeWrapper}>
            <View style={styles.inlineCodeContainer}>
              <Text style={styles.inlineCode}>
                {
                  "const http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, {'Content-Type': 'text/plain'});\n  res.end('Hello, Node.js!');\n});\nserver.listen(3000, '127.0.0.1');\nconsole.log('Server running at http://127.0.0.1:3000/');"
                }
              </Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                copyToClipboard(
                  "const http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, {'Content-Type': 'text/plain'});\n  res.end('Hello, Node.js!');\n});\nserver.listen(3000, '127.0.0.1');\nconsole.log('Server running at http://127.0.0.1:3000/');",
                )
              }
              style={styles.copyButton}>
              <MaterialIcons
                name="content-copy"
                size={20}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
          <Text>
            Write a simple Node.js server that responds with "Hello, Node.js!"
            when accessed.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>4.</Text>
            <Text style={styles.bold}>Run Your Node.js Application:</Text>
          </View>
          <View style={styles.inlineCodeWrapper}>
            <View style={styles.inlineCodeContainer}>
              <Text style={styles.inlineCode}>node app.js</Text>
            </View>
            <TouchableOpacity
              onPress={() => copyToClipboard('node app.js')}
              style={styles.copyButton}>
              <MaterialIcons
                name="content-copy"
                size={20}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
          <Text>Run your Node.js application using the node command.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>How It Works</Text>
        <Text style={styles.text}>
          Node.js uses an event-driven, non-blocking I/O model that makes it
          lightweight and efficient. It handles many connections simultaneously
          and is suitable for building scalable network applications, such as
          web servers and real-time communication tools.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Sample Exercises</Text>
        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.bold}>Build a RESTful API:</Text>
          </View>
          <Text>
            Create a RESTful API using Node.js with routes to handle different
            HTTP methods.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>2.</Text>
            <Text style={styles.bold}>Create a Chat Application:</Text>
          </View>
          <Text>
            Build a real-time chat application using Node.js and WebSockets.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>3.</Text>
            <Text style={styles.bold}>Implement Authentication:</Text>
          </View>
          <Text>
            Add user authentication to your Node.js application using
            Passport.js or JWT.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>4.</Text>
            <Text style={styles.bold}>Connect to a Database:</Text>
          </View>
          <Text>
            Integrate a database (like MongoDB) with your Node.js application to
            store and retrieve data.
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
  inlineCodeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  inlineCodeContainer: {
    backgroundColor: Colors.secondary,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
    flex: 1,
  },
  inlineCode: {
    fontFamily: 'Courier New',
    color: Colors.background,
    fontSize: 16,
    letterSpacing: 0.5,
  },
  copyButton: {
    padding: 8,
  },
});

export default NodeJsScreen;
