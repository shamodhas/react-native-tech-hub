import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StackNavigationProp} from '@react-navigation/stack';

interface TechnologyScreenLayoutProps {
  title: string;
  navigation: StackNavigationProp<any>;
  children: React.ReactNode;
  image: any;
}

const TechnologyScreenLayout: React.FC<TechnologyScreenLayoutProps> = ({
  title,
  navigation,
  children,
  image,
}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Icon name="arrow-back" size={32} color="#000" />
          <Text style={styles.title}> {title}</Text>
        </TouchableOpacity>
        <Image source={image} style={styles.image} />
      </View>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 0,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginRight: 10,
  },
  image: {
    width: 64,
    height: 64,
  },
  backButton: {
    padding: 8,
    paddingRight: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: 0,
  },
});

export default TechnologyScreenLayout;
