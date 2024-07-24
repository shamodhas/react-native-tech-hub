import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../constants/Colors';

interface CodeSnippetProps {
  code: string;
  onCopy: () => void;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({code, onCopy}) => {
  return (
    <View style={styles.inlineCodeWrapper}>
      <View style={styles.inlineCodeContainer}>
        <Text style={styles.inlineCode}>{code}</Text>
      </View>
      <TouchableOpacity onPress={onCopy} style={styles.copyButton}>
        <MaterialIcons name="content-copy" size={20} color={Colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default CodeSnippet;
