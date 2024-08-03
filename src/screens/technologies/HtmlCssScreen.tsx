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

const HtmlCssScreen: React.FC = () => {
  const copyToClipboard = (text: string) => {
    Alert.alert('Copied to clipboard', text);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>HTML & CSS</Text>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Overview</Text>
        <Text style={styles.text}>
          HTML (HyperText Markup Language) is the standard markup language for
          creating web pages. CSS (Cascading Style Sheets) is used to describe
          the presentation of a document written in HTML or XML.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>How to Use It</Text>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.bold}>Create an HTML File:</Text>
          </View>
          <View style={styles.inlineCodeWrapper}>
            <View style={styles.inlineCodeContainer}>
              <Text style={styles.inlineCode}>index.html</Text>
            </View>
            <TouchableOpacity
              onPress={() => copyToClipboard('index.html')}
              style={styles.copyButton}>
              <MaterialIcons
                name="content-copy"
                size={20}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
          <Text>Create a new HTML file to start your web page.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>2.</Text>
            <Text style={styles.bold}>Add Basic HTML Structure:</Text>
          </View>
          <View style={styles.inlineCodeWrapper}>
            <View style={styles.inlineCodeContainer}>
              <Text style={styles.inlineCode}>
                {
                  '<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n\n</body>\n</html>'
                }
              </Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                copyToClipboard(
                  '<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n\n</body>\n</html>',
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
          <Text>Add the basic structure of an HTML document.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>3.</Text>
            <Text style={styles.bold}>Create a CSS File:</Text>
          </View>
          <View style={styles.inlineCodeWrapper}>
            <View style={styles.inlineCodeContainer}>
              <Text style={styles.inlineCode}>styles.css</Text>
            </View>
            <TouchableOpacity
              onPress={() => copyToClipboard('styles.css')}
              style={styles.copyButton}>
              <MaterialIcons
                name="content-copy"
                size={20}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
          <Text>Create a new CSS file for styling your web page.</Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>4.</Text>
            <Text style={styles.bold}>Link CSS to HTML:</Text>
          </View>
          <View style={styles.inlineCodeWrapper}>
            <View style={styles.inlineCodeContainer}>
              <Text style={styles.inlineCode}>
                {'<link rel="stylesheet" href="styles.css">'}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                copyToClipboard('<link rel="stylesheet" href="styles.css">')
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
            Link your CSS file to your HTML document inside the {'<head>'} tag.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>How It Works</Text>
        <Text style={styles.text}>
          HTML provides the structure of the page, while CSS defines the visual
          style. Together, they create the appearance and layout of a web page.
          HTML elements are used to create content, and CSS rules are used to
          style this content.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Sample Exercises</Text>
        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.bold}>Build a Simple Web Page:</Text>
          </View>
          <Text>
            Use HTML and CSS to create a simple web page with a header, footer,
            and main content area.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>2.</Text>
            <Text style={styles.bold}>Style a Web Page:</Text>
          </View>
          <Text>
            Apply CSS to style the different elements of your web page,
            including text, colors, and layout.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>3.</Text>
            <Text style={styles.bold}>Responsive Design:</Text>
          </View>
          <Text>
            Use media queries to create a responsive design that looks good on
            both desktop and mobile devices.
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

export default HtmlCssScreen;
