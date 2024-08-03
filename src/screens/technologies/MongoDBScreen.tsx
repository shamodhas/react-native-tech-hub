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

const MongoDBScreen: React.FC = () => {
  const copyToClipboard = (text: string) => {
    Alert.alert('Copied to clipboard', text);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>MongoDB</Text>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Overview</Text>
        <Text style={styles.text}>
          MongoDB is a NoSQL database that uses a document-oriented data model.
          It stores data in JSON-like documents, which makes it highly flexible
          and scalable for modern applications.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>How to Use It</Text>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.bold}>Install MongoDB:</Text>
          </View>
          <View style={styles.inlineCodeWrapper}>
            <View style={styles.inlineCodeContainer}>
              <Text style={styles.inlineCode}>sudo apt install mongodb</Text>
            </View>
            <TouchableOpacity
              onPress={() => copyToClipboard('sudo apt install mongodb')}
              style={styles.copyButton}>
              <MaterialIcons
                name="content-copy"
                size={20}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
          <Text>Install MongoDB on your server or local machine.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>2.</Text>
            <Text style={styles.bold}>Start MongoDB Service:</Text>
          </View>
          <View style={styles.inlineCodeWrapper}>
            <View style={styles.inlineCodeContainer}>
              <Text style={styles.inlineCode}>sudo service mongodb start</Text>
            </View>
            <TouchableOpacity
              onPress={() => copyToClipboard('sudo service mongodb start')}
              style={styles.copyButton}>
              <MaterialIcons
                name="content-copy"
                size={20}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
          <Text>Start the MongoDB service to begin using it.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>3.</Text>
            <Text style={styles.bold}>Use MongoDB Shell:</Text>
          </View>
          <View style={styles.inlineCodeWrapper}>
            <View style={styles.inlineCodeContainer}>
              <Text style={styles.inlineCode}>mongo</Text>
            </View>
            <TouchableOpacity
              onPress={() => copyToClipboard('mongo')}
              style={styles.copyButton}>
              <MaterialIcons
                name="content-copy"
                size={20}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
          <Text>Access the MongoDB shell to interact with your database.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>How It Works</Text>
        <Text style={styles.text}>
          MongoDB uses a flexible schema and stores data in BSON (Binary JSON)
          format. It allows you to store documents with varying structures,
          making it suitable for applications with changing data needs.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Sample Exercises</Text>
        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.bold}>Create a Database:</Text>
          </View>
          <Text>Create a new database and collections in MongoDB.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>2.</Text>
            <Text style={styles.bold}>Insert Documents:</Text>
          </View>
          <Text>Insert sample documents into your MongoDB collections.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>3.</Text>
            <Text style={styles.bold}>Query Documents:</Text>
          </View>
          <Text>
            Write queries to retrieve and manipulate documents in your MongoDB
            database.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>4.</Text>
            <Text style={styles.bold}>Create Indexes:</Text>
          </View>
          <Text>Create indexes to improve query performance in MongoDB.</Text>
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

export default MongoDBScreen;
