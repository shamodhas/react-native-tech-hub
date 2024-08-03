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

const AWSScreen: React.FC = () => {
  const copyToClipboard = (text: string) => {
    Alert.alert('Copied to clipboard', text);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>AWS</Text>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Overview</Text>
        <Text style={styles.text}>
          Amazon Web Services (AWS) provides a wide range of cloud computing
          services, including computing power, storage, and databases. AWS
          enables you to deploy and manage applications on a global scale.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>How to Use It</Text>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.bold}>Sign Up for AWS:</Text>
          </View>
          <View style={styles.inlineCodeWrapper}>
            <View style={styles.inlineCodeContainer}>
              <Text style={styles.inlineCode}>aws.amazon.com</Text>
            </View>
            <TouchableOpacity
              onPress={() => copyToClipboard('aws.amazon.com')}
              style={styles.copyButton}>
              <MaterialIcons
                name="content-copy"
                size={20}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
          <Text>Sign up for an AWS account to access their services.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>2.</Text>
            <Text style={styles.bold}>Access AWS Management Console:</Text>
          </View>
          <View style={styles.inlineCodeWrapper}>
            <View style={styles.inlineCodeContainer}>
              <Text style={styles.inlineCode}>console.aws.amazon.com</Text>
            </View>
            <TouchableOpacity
              onPress={() => copyToClipboard('console.aws.amazon.com')}
              style={styles.copyButton}>
              <MaterialIcons
                name="content-copy"
                size={20}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
          <Text>
            Use the AWS Management Console to manage your resources and
            services.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>3.</Text>
            <Text style={styles.bold}>Use AWS CLI:</Text>
          </View>
          <View style={styles.inlineCodeWrapper}>
            <View style={styles.inlineCodeContainer}>
              <Text style={styles.inlineCode}>aws configure</Text>
            </View>
            <TouchableOpacity
              onPress={() => copyToClipboard('aws configure')}
              style={styles.copyButton}>
              <MaterialIcons
                name="content-copy"
                size={20}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
          <Text>
            Configure AWS CLI to interact with AWS services from the command
            line.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>How It Works</Text>
        <Text style={styles.text}>
          AWS provides a set of cloud-based services including computing,
          storage, and networking. You can manage and deploy applications using
          various AWS tools and interfaces.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Sample Exercises</Text>
        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.bold}>Deploy a Web Application:</Text>
          </View>
          <Text>
            Deploy a simple web application using AWS Elastic Beanstalk.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>2.</Text>
            <Text style={styles.bold}>Set Up a Database:</Text>
          </View>
          <Text>
            Create and configure a database using AWS RDS or DynamoDB.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>3.</Text>
            <Text style={styles.bold}>Configure S3 Buckets:</Text>
          </View>
          <Text>
            Set up S3 buckets for storage and manage access permissions.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>4.</Text>
            <Text style={styles.bold}>Monitor Your Resources:</Text>
          </View>
          <Text>
            Use CloudWatch to monitor and analyze the performance of your AWS
            resources.
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

export default AWSScreen;
