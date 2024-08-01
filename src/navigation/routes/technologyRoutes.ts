import React from 'react';

const GitHubScreen = React.lazy(
  () => import('../../screens/technologies/GitHubScreen.tsx'),
);
const UbuntuServerScreen = React.lazy(
  () => import('../../screens/technologies/UbuntuServerScreen.tsx'),
);
const NginxScreen = React.lazy(
  () => import('../../screens/technologies/NginxScreen.tsx'),
);
const JiraScreen = React.lazy(
  () => import('../../screens/technologies/JiraScreen.tsx'),
);
const TrelloScreen = React.lazy(
  () => import('../../screens/technologies/TrelloScreen.tsx'),
);
const HtmlCssScreen = React.lazy(
  () => import('../../screens/technologies/HtmlCssScreen.tsx'),
);
const JavaScriptScreen = React.lazy(
  () => import('../../screens/technologies/JavaScriptScreen.tsx'),
);
const ReactScreen = React.lazy(
  () => import('../../screens/technologies/ReactScreen.tsx'),
);
const NodeJsScreen = React.lazy(
  () => import('../../screens/technologies/NodeJsScreen.tsx'),
);
const ExpressJsScreen = React.lazy(
  () => import('../../screens/technologies/ExpressJsScreen.tsx'),
);
const MongoDBScreen = React.lazy(
  () => import('../../screens/technologies/MongoDBScreen.tsx'),
);
const AWSScreen = React.lazy(
  () => import('../../screens/technologies/AWSScreen.tsx'),
);
const HerokuScreen = React.lazy(
  () => import('../../screens/technologies/HerokuScreen.tsx'),
);
const DockerScreen = React.lazy(
  () => import('../../screens/technologies/DockerScreen.tsx'),
);
const KubernetesScreen = React.lazy(
  () => import('../../screens/technologies/KubernetesScreen.tsx'),
);
const JenkinsScreen = React.lazy(
  () => import('../../screens/technologies/JenkinsScreen.tsx'),
);
const TerraformScreen = React.lazy(
  () => import('../../screens/technologies/TerraformScreen.tsx'),
);
const MySQLScreen = React.lazy(
  () => import('../../screens/technologies/MySQLScreen.tsx'),
);
const FirebaseScreen = React.lazy(
  () => import('../../screens/technologies/FirebaseScreen.tsx'),
);
const RestApiScreen = React.lazy(
  () => import('../../screens/technologies/RestApiScreen.tsx'),
);
const GraphQLScreen = React.lazy(
  () => import('../../screens/technologies/GraphQLScreen.tsx'),
);
const ReactNativeScreen = React.lazy(
  () => import('../../screens/technologies/ReactNativeScreen.tsx'),
);
const JestScreen = React.lazy(
  () => import('../../screens/technologies/JestScreen.tsx'),
);
const PostmanScreen = React.lazy(
  () => import('../../screens/technologies/PostmanScreen.tsx'),
);
const FigmaScreen = React.lazy(
  () => import('../../screens/technologies/FigmaScreen.tsx'),
);
const AdobeXdScreen = React.lazy(
  () => import('../../screens/technologies/AdobeXdScreen.tsx'),
);
const SpringBootScreen = React.lazy(
  () => import('../../screens/technologies/SpringBootScreen.tsx'),
);
const GitScreen = React.lazy(
  () => import('../../screens/technologies/GitScreen.tsx'),
);

export const technologyRoutes = [
  {
    name: 'Git',
    route: 'Git',
    // icon: 'git-branch'
    image: require('../../assets/git.png'),
    component: GitScreen,
  },
  {
    name: 'GitHub',
    route: 'GitHub',
    // icon: 'logo-github',
    image: require('../../assets/github.png'),
    component: GitHubScreen,
  },
  {
    name: 'Ubuntu Server',
    route: 'UbuntuServer',
    // icon: 'server',
    image: require('../../assets/ubuntu.png'),
    component: UbuntuServerScreen,
  },
  {
    name: 'Nginx',
    route: 'Nginx',
    image: require('../../assets/nginx.png'),
    component: NginxScreen,
  },
  {
    name: 'Jira',
    route: 'Jira',
    // , icon: 'clipboard'
    image: require('../../assets/jira.png'),
    component: JiraScreen,
  },
  {
    name: 'Trello',
    route: 'Trello',
    // icon: 'grid-outline',
    image: require('../../assets/trello.png'),
    component: TrelloScreen,
  },
  {
    name: 'HTML/CSS',
    route: 'HtmlCss',
    // icon: 'code-slash',
    image: require('../../assets/html.png'),
    // image: require('../../assets/css.png'),
    component: HtmlCssScreen,
  },
  {
    name: 'JavaScript',
    route: 'JavaScript',
    // icon: 'logo-javascript',
    image: require('../../assets/js.png'),
    component: JavaScriptScreen,
  },
  {
    name: 'React',
    route: 'React',
    //  icon: 'logo-react',
    image: require('../../assets/react.png'),
    component: ReactScreen,
  },
  {
    name: 'Node.js',
    route: 'NodeJs',
    // icon: 'logo-nodejs',
    image: require('../../assets/node-js.png'),
    component: NodeJsScreen,
  },
  {
    name: 'Express.js',
    route: 'ExpressJs',
    // icon: 'code-slash',
    image: require('../../assets/express-js.png'),
    component: ExpressJsScreen,
  },
  {
    name: 'Spring Boot',
    route: 'SpringBoot',
    image: require('../../assets/spring-boot.png'),
    component: SpringBootScreen,
  },
  {
    name: 'MongoDB',
    route: 'MongoDB',
    // icon: 'server',
    image: require('../../assets/mongodb.png'),
    component: MongoDBScreen,
  },
  {
    name: 'AWS',
    route: 'AWS',
    // icon: 'cloud-outline',
    image: require('../../assets/aws.png'),
    component: AWSScreen,
  },
  {
    name: 'Heroku',
    route: 'Heroku',
    // icon: 'cloud-outline',
    image: require('../../assets/heroku.png'),
    component: HerokuScreen,
  },
  {
    name: 'Docker',
    route: 'Docker',
    // icon: 'logo-docker',
    image: require('../../assets/docker.png'),
    component: DockerScreen,
  },
  {
    name: 'Kubernetes',
    route: 'Kubernetes',
    // icon: 'logo-kubernetes',
    image: require('../../assets/kubernetes.png'),
    component: KubernetesScreen,
  },
  {
    name: 'Jenkins',
    route: 'Jenkins',
    //  icon: 'cog',
    image: require('../../assets/jenkins.png'),
    component: JenkinsScreen,
  },
  {
    name: 'Terraform',
    route: 'Terraform',
    // icon: 'layers',
    image: require('../../assets/terraform.png'),
    component: TerraformScreen,
  },
  {
    name: 'MySQL',
    route: 'MySQL',
    // icon: 'server',
    image: require('../../assets/mysql.png'),
    component: MySQLScreen,
  },
  {
    name: 'Firebase',
    route: 'Firebase',
    // icon: 'logo-firebase',
    image: require('../../assets/firebase.png'),
    component: FirebaseScreen,
  },
  {
    name: 'RESTful API',
    route: 'RestApi',
    // icon: 'link-outline',
    image: require('../../assets/rest-api.png'),
    component: RestApiScreen,
  },
  {
    name: 'GraphQL',
    route: 'GraphQL',
    // icon: 'link-outline',
    image: require('../../assets/graphql.png'),
    component: GraphQLScreen,
  },
  {
    name: 'React Native',
    route: 'ReactNative',
    // icon: 'logo-react',
    image: require('../../assets/react.png'),
    component: ReactNativeScreen,
  },
  {
    name: 'Jest',
    route: 'Jest',
    // icon: 'checkmark-circle-outline',
    image: require('../../assets/jest.png'),
    component: JestScreen,
  },
  {
    name: 'Postman',
    route: 'Postman',
    // icon: 'paper-plane',
    image: require('../../assets/postman.png'),
    component: PostmanScreen,
  },
  {
    name: 'Figma',
    route: 'Figma',
    //  icon: 'pencil',
    image: require('../../assets/figma.png'),
    component: FigmaScreen,
  },
  {
    name: 'Adobe XD',
    route: 'AdobeXd',
    // icon: 'pencil',
    image: require('../../assets/adobe-xd.png'),
    component: AdobeXdScreen,
  },
];
