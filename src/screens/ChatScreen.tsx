import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constants/Colors';
import {FlatList} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const renderItem = ({item}: {item: any}) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === 'You' ? styles.myMessage : styles.otherMessage,
      ]}>
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.messageSender}>{item.sender}</Text>
      <Text style={styles.messageTimestamp}>{item.timestamp}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={90}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.messagesList}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton}>
          <MaterialIcons name="send" size={24} color={Colors.background} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  messagesList: {
    padding: 16,
  },
  messageContainer: {
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    maxWidth: '80%',
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: Colors.primary,
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.secondary,
  },
  messageText: {
    color: Colors.background,
    fontSize: 16,
  },
  messageSender: {
    color: Colors.textSecondary,
    fontSize: 12,
    marginTop: 5,
  },
  messageTimestamp: {
    color: Colors.textSecondary,
    fontSize: 10,
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: Colors.backgroundSecondary,
    borderTopWidth: 1,
    borderTopColor: Colors.primary,
  },
  input: {
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: Colors.background,
    fontSize: 16,
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: Colors.primary,
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChatScreen;
