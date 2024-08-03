import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Colors from '../constants/Colors';
import {technologyRoutes} from '../navigation/routes/technologyRoutes';
import TechnologyCard from '../components/TechnologyCard';

const TechnologiesMenuScreen: React.FC = ({navigation}: any) => {
  const [search, setSearch] = useState('');

  const filteredTechnologies = technologyRoutes.filter((tech: any) =>
    tech.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore Technologies</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search technologies..."
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <View style={styles.grid}>
        {filteredTechnologies.map((item: any) => (
          <TouchableOpacity
            key={item.route}
            style={styles.card}
            onPress={() =>
              navigation.navigate(item.route, {
                techIndex: technologyRoutes.indexOf(item),
              })
            }
            activeOpacity={0.9}>
            <TechnologyCard image={item.image} title={item.name} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: Colors.accent,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
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
    color: '#000',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 50,
    padding: 20,
  },
  card: {
    width: '48%',
    height: 150,
    marginBottom: 10,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
});

export default TechnologiesMenuScreen;
