import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {technologyRoutes} from '../navigation/routes/technologyRoutes';

const {width} = Dimensions.get('window');

const TechnologiesMenuScreen: React.FC = ({navigation}: any) => {
  const [search, setSearch] = useState('');

  const filteredTechnologies = technologyRoutes.filter(tech =>
    tech.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Explore Technologies</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search technologies..."
        value={search}
        onChangeText={setSearch}
      />
      <View style={styles.grid}>
        {filteredTechnologies.map(item => (
          <TouchableOpacity
            key={item.route}
            style={styles.card}
            onPress={() =>
              navigation.navigate(item.route, {
                techIndex: technologyRoutes.indexOf(item),
              })
            }
            activeOpacity={0.9}>
            <Icon name={item.icon} size={48} color={'#fff'} />
            <Text style={styles.cardText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
    // paddingBottom: 100,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: Colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  searchInput: {
    height: 40,
    borderColor: Colors.secondary,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
    color: Colors.textPrimary,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 150,
  },
  card: {
    width: width / 3 - 40,
    margin: 10,
    padding: 20,
    backgroundColor: Colors.secondary,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  cardText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
});

export default TechnologiesMenuScreen;
