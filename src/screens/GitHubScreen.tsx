import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constants/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const GitHubScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>GitHub</Text>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Overview</Text>
        <Text style={styles.text}>
          GitHub is a web-based platform for version control and collaboration
          using Git. It provides hosting for software development and version
          control using Git, along with additional features such as issue
          tracking, project management, and a collaborative environment.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>How to Use It</Text>
        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.bold}>Create a GitHub Account:</Text>
            <Text style={styles.text}>
              {' '}
              Go to <Text style={styles.inlineCode}>
                https://github.com/
              </Text>{' '}
              and sign up for an account.
            </Text>
          </View>
          <View style={styles.inlineCodeWrapper}>
            <View style={styles.inlineCodeContainer}>
              <Text style={styles.inlineCode}>https://github.com/</Text>
            </View>
            <TouchableOpacity style={styles.copyButton}>
              <MaterialIcons
                name="content-copy"
                size={20}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>2.</Text>
            <Text style={styles.bold}>Create a Repository:</Text>
            <Text style={styles.text}>
              {' '}
              Click the '+' icon on the top-right corner and select 'New
              repository'. Fill in the details and click 'Create repository'.
            </Text>
          </View>
        </View>
        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>3.</Text>
            <Text style={styles.bold}>Push Local Changes:</Text>
            <Text style={styles.text}>
              {' '}
              Add your local repository to GitHub by running{' '}
              <Text style={styles.inlineCode}>
                git remote add origin [URL]
              </Text>{' '}
              and then push using{' '}
              <Text style={styles.inlineCode}>git push -u origin main</Text>.
            </Text>
          </View>
          <View style={styles.inlineCodeWrapper}>
            <View style={styles.inlineCodeContainer}>
              <Text style={styles.inlineCode}>git remote add origin [URL]</Text>
              <Text style={styles.inlineCode}>git push -u origin main</Text>
            </View>
            <TouchableOpacity style={styles.copyButton}>
              <MaterialIcons
                name="content-copy"
                size={20}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>How It Works</Text>
        <Text style={styles.text}>
          GitHub uses Git for version control and adds a web-based interface
          with additional features. You can create repositories to store your
          code, collaborate with others, and track issues. GitHub also
          integrates with many tools and services to enhance development
          workflows.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Sample Exercises</Text>
        <View style={styles.stepContainer}>
          <Text style={styles.stepNumber}>1.</Text>
          <Text style={styles.text}>
            Create a GitHub repository and push a local project to it.
          </Text>
        </View>
        <View style={styles.stepContainer}>
          <Text style={styles.stepNumber}>2.</Text>
          <Text style={styles.text}>
            Collaborate with a teammate by forking a repository and submitting a
            pull request.
          </Text>
        </View>
        <View style={styles.stepContainer}>
          <Text style={styles.stepNumber}>3.</Text>
          <Text style={styles.text}>
            Use GitHub Issues to track tasks and bugs in a project.
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

export default GitHubScreen;
