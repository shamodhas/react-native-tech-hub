import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window');

const DocumentScreen: React.FC = ({navigation}: any) => {
  const [search, setSearch] = useState('');

  const filteredTechnologies = technologies.filter(tech =>
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
      <FlatList
        data={filteredTechnologies}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate(item.route)}
            activeOpacity={0.9}>
            <Icon name={item.icon} size={48} color={'#fff'} />
            <Text style={styles.cardText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.route}
        numColumns={2}
        contentContainerStyle={styles.grid}
      />
    </ScrollView>
  );
};

const technologies = [
  {name: 'Git', route: 'Git', icon: 'git-branch'},
  {name: 'GitHub', route: 'GitHub', icon: 'logo-github'},
  {name: 'Ubuntu Server', route: 'UbuntuServer', icon: 'server'},
  {name: 'Nginx', route: 'Nginx', icon: 'code-slash'},
  {name: 'Jira', route: 'Jira', icon: 'clipboard'},
  {name: 'Trello', route: 'Trello', icon: 'grid-outline'},
  {name: 'HTML/CSS', route: 'HtmlCss', icon: 'code-slash'},
  {name: 'JavaScript', route: 'JavaScript', icon: 'logo-javascript'},
  {name: 'React', route: 'React', icon: 'logo-react'},
  {name: 'Node.js', route: 'NodeJs', icon: 'logo-nodejs'},
  {name: 'Express.js', route: 'ExpressJs', icon: 'code-slash'},
  {name: 'MongoDB', route: 'MongoDB', icon: 'server'},
  {name: 'AWS', route: 'AWS', icon: 'cloud-outline'},
  {name: 'Heroku', route: 'Heroku', icon: 'cloud-outline'},
  {name: 'Docker', route: 'Docker', icon: 'logo-docker'},
  {name: 'Kubernetes', route: 'Kubernetes', icon: 'logo-kubernetes'},
  {name: 'Jenkins', route: 'Jenkins', icon: 'cog'},
  {name: 'Terraform', route: 'Terraform', icon: 'layers'},
  {name: 'MySQL', route: 'MySQL', icon: 'server'},
  {name: 'Firebase', route: 'Firebase', icon: 'logo-firebase'},
  {name: 'RESTful API', route: 'RestApi', icon: 'link-outline'},
  {name: 'GraphQL', route: 'GraphQL', icon: 'link-outline'},
  {name: 'React Native', route: 'ReactNative', icon: 'logo-react'},
  {name: 'Jest', route: 'Jest', icon: 'checkmark-circle-outline'},
  {name: 'Postman', route: 'Postman', icon: 'paper-plane'},
  {name: 'Figma', route: 'Figma', icon: 'pencil'},
  {name: 'Adobe XD', route: 'AdobeXd', icon: 'pencil'},
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
    paddingBottom: 100,
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
  card: {
    width: width / 2 - 30,
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
  grid: {
    alignItems: 'center',
  },
});

export default DocumentScreen;
