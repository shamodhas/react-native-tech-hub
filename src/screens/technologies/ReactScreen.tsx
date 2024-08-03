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

const ReactScreen: React.FC = () => {
  const copyToClipboard = (text: string) => {
    Alert.alert('Copied to clipboard', text);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>React</Text>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Overview</Text>
        <Text style={styles.text}>
          React is a JavaScript library for building user interfaces. It allows
          developers to create single-page applications with a component-based
          architecture. React efficiently updates and renders the right
          components when data changes.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>How to Use It</Text>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.bold}>Create a React App:</Text>
          </View>
          <View style={styles.inlineCodeWrapper}>
            <View style={styles.inlineCodeContainer}>
              <Text style={styles.inlineCode}>npx create-react-app my-app</Text>
            </View>
            <TouchableOpacity
              onPress={() => copyToClipboard('npx create-react-app my-app')}
              style={styles.copyButton}>
              <MaterialIcons
                name="content-copy"
                size={20}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
          <Text>
            Create a new React application using the Create React App CLI tool.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>2.</Text>
            <Text style={styles.bold}>Start the Development Server:</Text>
          </View>
          <View style={styles.inlineCodeWrapper}>
            <View style={styles.inlineCodeContainer}>
              <Text style={styles.inlineCode}>npm start</Text>
            </View>
            <TouchableOpacity
              onPress={() => copyToClipboard('npm start')}
              style={styles.copyButton}>
              <MaterialIcons
                name="content-copy"
                size={20}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
          <Text>
            Run the development server to view your application in the browser.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>3.</Text>
            <Text style={styles.bold}>Create a Component:</Text>
          </View>
          <View style={styles.inlineCodeWrapper}>
            <View style={styles.inlineCodeContainer}>
              <Text style={styles.inlineCode}>
                {'const MyComponent = () => <div>Hello, React!</div>;'}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                copyToClipboard(
                  'const MyComponent = () => <div>Hello, React!</div>;',
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
            Create a new React component to build reusable UI elements.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>4.</Text>
            <Text style={styles.bold}>Use Props and State:</Text>
          </View>
          <View style={styles.inlineCodeWrapper}>
            <View style={styles.inlineCodeContainer}>
              <Text style={styles.inlineCode}>
                {'const MyComponent = (props) => <div>{props.message}</div>;'}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                copyToClipboard(
                  'const MyComponent = (props) => <div>{props.message}</div>;',
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
            Use props and state to manage data and handle events in your
            components.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>How It Works</Text>
        <Text style={styles.text}>
          React uses a virtual DOM to efficiently update and render changes.
          Components are the building blocks of React applications and can be
          composed to build complex user interfaces. React's declarative
          approach makes it easier to reason about application state and
          behavior.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Sample Exercises</Text>
        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.bold}>Build a To-Do List:</Text>
          </View>
          <Text>
            Create a simple to-do list application with add, remove, and mark
            tasks as completed functionalities.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>2.</Text>
            <Text style={styles.bold}>Implement Routing:</Text>
          </View>
          <Text>
            Use React Router to create a multi-page application with different
            routes and navigation.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>3.</Text>
            <Text style={styles.bold}>Fetch Data from an API:</Text>
          </View>
          <Text>
            Fetch data from a public API and display it in your React
            application using hooks.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>4.</Text>
            <Text style={styles.bold}>Manage State with Redux:</Text>
          </View>
          <Text>
            Integrate Redux to manage global state in your React application.
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

export default ReactScreen;
