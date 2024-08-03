import React from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import Colors from '../../constants/Colors';
import CodeSnippet from '../../components/CodeSnippet';

const JiraScreen: React.FC = () => {
  const copyToClipboard = (text: string) => {
    Alert.alert('Copied to clipboard', text);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Jira</Text>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Overview</Text>
        <Text style={styles.text}>
          Jira is a project management tool developed by Atlassian. It is used
          for bug tracking, issue tracking, and project management in agile
          software development.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>How to Use It</Text>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.bold}>Create a Project:</Text>
          </View>
          <Text>
            Create a new project by navigating to Projects &gt; Create Project.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>2.</Text>
            <Text style={styles.bold}>Create an Issue:</Text>
          </View>
          <Text>Create a new issue by clicking on Create &gt; Issue.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>3.</Text>
            <Text style={styles.bold}>Track Progress:</Text>
          </View>
          <Text>Track the progress of issues using boards and backlogs.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>4.</Text>
            <Text style={styles.bold}>Generate Reports:</Text>
          </View>
          <Text>
            Generate various reports to track the performance of your project.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>How It Works</Text>
        <Text style={styles.text}>
          Jira provides a comprehensive suite of tools for managing agile
          projects, including Scrum and Kanban boards, customizable workflows,
          and real-time reporting. It helps teams plan, track, and release
          projects efficiently.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Sample Exercises</Text>
        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.bold}>Create a Sprint:</Text>
          </View>
          <Text>
            Create a new sprint in your Scrum board and assign issues to it.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>2.</Text>
            <Text style={styles.bold}>Track Sprint Progress:</Text>
          </View>
          <Text>
            Track the progress of your sprint using the Sprint board and
            Burndown chart.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>3.</Text>
            <Text style={styles.bold}>Close a Sprint:</Text>
          </View>
          <Text>
            Close the sprint once all issues are resolved or moved to the next
            sprint.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>4.</Text>
            <Text style={styles.bold}>Generate a Sprint Report:</Text>
          </View>
          <Text>
            Generate a sprint report to analyze the performance of your team
            during the sprint.
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

export default JiraScreen;
