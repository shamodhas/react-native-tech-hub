import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  ImageSourcePropType,
} from 'react-native';
import Colors from '../constants/Colors';
import {Image} from 'react-native';

interface TechnologyCardProps {
  image: ImageSourcePropType;
  title: string;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({image, title}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: Colors.accent,
    padding: 15,
    width: '100%',
    height: '100%',
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default TechnologyCard;
