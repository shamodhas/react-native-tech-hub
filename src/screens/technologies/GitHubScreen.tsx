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
      <View style={styles.section}>
        <Text style={styles.subtitle}>Introduction</Text>
        <Text style={styles.text}>
          GitHub is a platform for version control and collaborative software
          development. It is built on top of Git, a version control system that
          tracks changes to files and coordinates work on those files among
          multiple people. GitHub provides a web-based interface for managing
          Git repositories, making it easier to collaborate with others, track
          changes, and integrate with various development tools.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Overview</Text>
        <Text style={styles.text}>
          GitHub is a platform for version control and collaboration, allowing
          multiple people to work on projects simultaneously. It uses Git for
          version control and provides various features for project management
          and collaboration.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Basic Usage</Text>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.bold}>Create a Repository:</Text>
          </View>
          <CodeSnippet
            code="git init"
            onCopy={() => copyToClipboard('git init')}
          />
          <Text>Initialize a new Git repository in your local directory.</Text>
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
          <Text>Copy a remote repository to your local machine.</Text>
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
          <Text>Create a new branch for your changes.</Text>
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
          <Text>Upload your changes to the remote repository.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Advanced Features</Text>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>5.</Text>
            <Text style={styles.bold}>Create a Pull Request:</Text>
          </View>
          <CodeSnippet
            code="gh pr create --title 'Add new feature' --body 'Description of the feature' --base main --head <branch-name>"
            onCopy={() =>
              copyToClipboard(
                "gh pr create --title 'Add new feature' --body 'Description of the feature' --base main --head <branch-name>",
              )
            }
          />
          <Text>Submit your changes for review and merging.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>6.</Text>
            <Text style={styles.bold}>Resolve Merge Conflicts:</Text>
          </View>
          <CodeSnippet
            code="git merge <branch-name> && git status"
            onCopy={() =>
              copyToClipboard('git merge <branch-name> && git status')
            }
          />
          <Text>Handle any conflicts that arise during merging.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>7.</Text>
            <Text style={styles.bold}>Use GitHub Actions:</Text>
          </View>
          <CodeSnippet
            code="name: CI\non: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - name: Set up Node.js\n        uses: actions/setup-node@v2\n        with:\n          node-version: '14'\n      - run: npm install\n      - run: npm test"
            onCopy={() =>
              copyToClipboard(
                "name: CI\non: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - name: Set up Node.js\n        uses: actions/setup-node@v2\n        with:\n          node-version: '14'\n      - run: npm install\n      - run: npm test",
              )
            }
          />
          <Text>
            Automate workflows like testing and deployment using GitHub Actions.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Best Practices</Text>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>8.</Text>
            <Text style={styles.bold}>Commit Frequently:</Text>
          </View>
          <Text>
            Make small, frequent commits to keep track of your progress and make
            it easier to debug and review changes.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>9.</Text>
            <Text style={styles.bold}>Write Clear Commit Messages:</Text>
          </View>
          <Text>
            Provide descriptive messages for your commits to make it easier for
            others (and yourself) to understand the changes.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>10.</Text>
            <Text style={styles.bold}>Review Pull Requests:</Text>
          </View>
          <Text>
            Thoroughly review code changes in pull requests to ensure code
            quality and adherence to project standards.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Sample Exercises</Text>
        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.bold}>Fork and Clone a Repository:</Text>
          </View>
          <Text>
            Fork an existing repository, clone it to your local machine, and
            make some changes.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>2.</Text>
            <Text style={styles.bold}>Create and Merge a Pull Request:</Text>
          </View>
          <Text>
            Work on a new branch, create a pull request, and merge it after
            review.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>3.</Text>
            <Text style={styles.bold}>Resolve a Merge Conflict:</Text>
          </View>
          <Text>Simulate and resolve a merge conflict in a branch.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>4.</Text>
            <Text style={styles.bold}>Set Up a GitHub Action:</Text>
          </View>
          <Text>Configure a simple GitHub Action workflow for CI/CD.</Text>
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
