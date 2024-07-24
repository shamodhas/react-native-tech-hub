import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Colors from '../../constants/Colors';

interface TechnologyScreenLayoutProps {
  title: string;
  children: React.ReactNode;
}

const TechnologyScreenLayout: React.FC<TechnologyScreenLayoutProps> = ({
  title,
  children,
}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
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
});

export default TechnologyScreenLayout;
