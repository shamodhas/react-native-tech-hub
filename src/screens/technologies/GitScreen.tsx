import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Colors from '../../constants/Colors';
import CodeSnippet from '../../components/CodeSnippet';

const GitScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Introduction */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Introduction to Git</Text>
        <Text style={styles.text}>
          Welcome to the Git course! This course will cover the basics of Git, a
          distributed version control system, and its core concepts.
        </Text>
      </View>

      {/* Lesson 1: Overview */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Lesson 1: Overview of Git</Text>
        <Text style={styles.text}>
          Git is a distributed version control system that allows multiple
          developers to work on a project simultaneously. It helps track
          changes, manage code versions, and collaborate with others
          efficiently.
        </Text>
      </View>

      {/* Lesson 2: Basic Commands */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Lesson 2: Basic Commands</Text>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.bold}>Initialize a Repository:</Text>
          </View>
          <CodeSnippet code="git init" onCopy={() => {}} />
          <Text>to create a new Git repository.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>2.</Text>
            <Text style={styles.bold}>Stage Changes:</Text>
          </View>
          <CodeSnippet code="git add &lt;file&gt;" onCopy={() => {}} />
          <Text>Add files to the staging area.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>3.</Text>
            <Text style={styles.bold}>Commit Changes:</Text>
          </View>
          <CodeSnippet code='git commit -m "message"' onCopy={() => {}} />
          <Text>Commit staged changes.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>4.</Text>
            <Text style={styles.bold}>Push to Remote:</Text>
          </View>
          <CodeSnippet
            code="git push origin &lt;branch&gt;"
            onCopy={() => {}}
          />
          <Text>Push changes to a remote repository.</Text>
        </View>
      </View>

      {/* Lesson 3: Branching and Merging */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Lesson 3: Branching and Merging</Text>
        <Text style={styles.text}>
          Git allows you to create branches to work on different features or
          fixes without affecting the main codebase. After completing work on a
          branch, you can merge it back into the main branch.
        </Text>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.bold}>Create a Branch:</Text>
          </View>
          <CodeSnippet
            code="git branch &lt;branch-name&gt;"
            onCopy={() => {}}
          />
          <Text>Create a new branch.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>2.</Text>
            <Text style={styles.bold}>Switch Branches:</Text>
          </View>
          <CodeSnippet
            code="git checkout &lt;branch-name&gt;"
            onCopy={() => {}}
          />
          <Text>Switch to the specified branch.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>3.</Text>
            <Text style={styles.bold}>Merge Branches:</Text>
          </View>
          <CodeSnippet code="git merge &lt;branch-name&gt;" onCopy={() => {}} />
          <Text>Merge changes from one branch into the current branch.</Text>
        </View>
      </View>

      {/* Lesson 4: Advanced Git Commands */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Lesson 4: Advanced Git Commands</Text>
        <Text style={styles.text}>
          Explore advanced Git commands for more complex operations.
        </Text>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.bold}>Rebase Branch:</Text>
          </View>
          <CodeSnippet
            code="git rebase &lt;branch-name&gt;"
            onCopy={() => {}}
          />
          <Text>Reapply commits on top of another base branch.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>2.</Text>
            <Text style={styles.bold}>View Commit History:</Text>
          </View>
          <CodeSnippet code="git log" onCopy={() => {}} />
          <Text>Show the commit history for the repository.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>3.</Text>
            <Text style={styles.bold}>Undo Changes:</Text>
          </View>
          <CodeSnippet code="git revert &lt;commit-id&gt;" onCopy={() => {}} />
          <Text>Undo changes made by a commit.</Text>
        </View>
      </View>

      {/* Lesson 5: Git Best Practices */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Lesson 5: Git Best Practices</Text>
        <Text style={styles.text}>
          Follow best practices to maintain a clean and manageable Git history.
        </Text>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.bold}>Write Meaningful Commit Messages:</Text>
          </View>
          <Text>Ensure commit messages are clear and descriptive.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>2.</Text>
            <Text style={styles.bold}>Keep Commits Small:</Text>
          </View>
          <Text>
            Make small, focused commits rather than large, sweeping changes.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>3.</Text>
            <Text style={styles.bold}>Regularly Pull Updates:</Text>
          </View>
          <Text>
            Keep your local repository up-to-date with remote changes.
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
  codeText: {
    fontFamily: 'monospace',
    backgroundColor: Colors.backgroundSecondary,
    padding: 4,
    borderRadius: 4,
  },
});

export default GitScreen;
