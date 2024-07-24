import React from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import Colors from '../../constants/Colors';
import CodeSnippet from '../../components/CodeSnippet';

const GitHubScreen: React.FC = () => {
  const copyToClipboard = (text: string) => {
    Alert.alert('Copied to clipboard', text);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>GitHub - Not finalized</Text>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Overview</Text>
        <Text style={styles.text}>
          GitHub is a web-based platform that uses Git for version control and
          provides collaboration features such as repositories, pull requests,
          issues, and project boards.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>How to Use It</Text>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.bold}>Create a Repository:</Text>
          </View>
          <CodeSnippet
            code="git init"
            onCopy={() => copyToClipboard('git init')}
          />
          <Text>Initialize a new Git repository.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>2.</Text>
            <Text style={styles.bold}>Clone a Repository:</Text>
          </View>
          <CodeSnippet
            code="git clone <repo-url>"
            onCopy={() => copyToClipboard('git clone <repo-url>')}
          />
          <Text>Clone an existing repository from GitHub.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>3.</Text>
            <Text style={styles.bold}>Create a Branch:</Text>
          </View>
          <CodeSnippet
            code="git checkout -b <branch-name>"
            onCopy={() => copyToClipboard('git checkout -b <branch-name>')}
          />
          <Text>Create a new branch and switch to it.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>4.</Text>
            <Text style={styles.bold}>Push Changes:</Text>
          </View>
          <CodeSnippet
            code="git push origin <branch-name>"
            onCopy={() => copyToClipboard('git push origin <branch-name>')}
          />
          <Text>Push your changes to GitHub.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>How It Works</Text>
        <Text style={styles.text}>
          GitHub provides a centralized location for storing and sharing code,
          enabling collaboration among developers. It integrates with various
          tools and services to facilitate development workflows.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Sample Exercises</Text>
        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.bold}>Fork a Repository:</Text>
          </View>
          <Text>
            Fork an existing repository to your own account and clone it.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>2.</Text>
            <Text style={styles.bold}>Create a Pull Request:</Text>
          </View>
          <Text>
            Make changes and submit a pull request to the original repository.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>3.</Text>
            <Text style={styles.bold}>Review Code:</Text>
          </View>
          <Text>Review and provide feedback on pull requests.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>4.</Text>
            <Text style={styles.bold}>Manage Issues:</Text>
          </View>
          <Text>
            Create and manage issues to track bugs and feature requests.
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

export default GitHubScreen;
