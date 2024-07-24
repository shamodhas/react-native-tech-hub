// import React from 'react';

// const GitScreen = React.lazy(
//   () => import('../../screens/technologies/GitScreen.tsx'),
// );
// const GitHubScreen = React.lazy(
//   () => import('../../screens/technologies/GitHubScreen.tsx'),
// );
// const UbuntuServerScreen = React.lazy(
//   () => import('../../screens/technologies/UbuntuServerScreen.tsx'),
// );
// const NginxScreen = React.lazy(
//   () => import('../../screens/technologies/NginxScreen.tsx'),
// );
// const JiraScreen = React.lazy(
//   () => import('../../screens/technologies/JiraScreen.tsx'),
// );
// const TrelloScreen = React.lazy(
//   () => import('../../screens/technologies/TrelloScreen.tsx'),
// );
// const HtmlCssScreen = React.lazy(
//   () => import('../../screens/technologies/HtmlCssScreen.tsx'),
// );
// const JavaScriptScreen = React.lazy(
//   () => import('../../screens/technologies/JavaScriptScreen.tsx'),
// );
// const ReactScreen = React.lazy(
//   () => import('../../screens/technologies/ReactScreen.tsx'),
// );
// const NodeJsScreen = React.lazy(
//   () => import('../../screens/technologies/NodeJsScreen.tsx'),
// );
// const ExpressJsScreen = React.lazy(
//   () => import('../../screens/technologies/ExpressJsScreen.tsx'),
// );
// const MongoDBScreen = React.lazy(
//   () => import('../../screens/technologies/MongoDBScreen.tsx'),
// );
// const AWSScreen = React.lazy(
//   () => import('../../screens/technologies/AWSScreen.tsx'),
// );
// const HerokuScreen = React.lazy(
//   () => import('../../screens/technologies/HerokuScreen.tsx'),
// );
// const DockerScreen = React.lazy(
//   () => import('../../screens/technologies/DockerScreen.tsx'),
// );
// const KubernetesScreen = React.lazy(
//   () => import('../../screens/technologies/KubernetesScreen.tsx'),
// );
// const JenkinsScreen = React.lazy(
//   () => import('../../screens/technologies/JenkinsScreen.tsx'),
// );
// const TerraformScreen = React.lazy(
//   () => import('../../screens/technologies/TerraformScreen.tsx'),
// );
// const MySQLScreen = React.lazy(
//   () => import('../../screens/technologies/MySQLScreen.tsx'),
// );
// const FirebaseScreen = React.lazy(
//   () => import('../../screens/technologies/FirebaseScreen.tsx'),
// );
// const RestApiScreen = React.lazy(
//   () => import('../../screens/technologies/RestApiScreen.tsx'),
// );
// const GraphQLScreen = React.lazy(
//   () => import('../../screens/technologies/GraphQLScreen.tsx'),
// );
// const ReactNativeScreen = React.lazy(
//   () => import('../../screens/technologies/ReactNativeScreen.tsx'),
// );
// const JestScreen = React.lazy(
//   () => import('../../screens/technologies/JestScreen.tsx'),
// );
// const PostmanScreen = React.lazy(
//   () => import('../../screens/technologies/PostmanScreen.tsx'),
// );
// const FigmaScreen = React.lazy(
//   () => import('../../screens/technologies/FigmaScreen.tsx'),
// );
// const AdobeXdScreen = React.lazy(
//   () => import('../../screens/technologies/AdobeXdScreen.tsx'),
// );

// export const technologyRoutes = [
//   {name: 'Git', route: 'Git', icon: 'git-branch', component: GitScreen},
//   {
//     name: 'GitHub',
//     route: 'GitHub',
//     icon: 'logo-github',
//     component: GitHubScreen,
//   },
//   {
//     name: 'Ubuntu Server',
//     route: 'UbuntuServer',
//     icon: 'server',
//     component: UbuntuServerScreen,
//   },
//   {name: 'Nginx', route: 'Nginx', icon: 'code-slash', component: NginxScreen},
//   {name: 'Jira', route: 'Jira', icon: 'clipboard', component: JiraScreen},
//   {
//     name: 'Trello',
//     route: 'Trello',
//     icon: 'grid-outline',
//     component: TrelloScreen,
//   },
//   {
//     name: 'HTML/CSS',
//     route: 'HtmlCss',
//     icon: 'code-slash',
//     component: HtmlCssScreen,
//   },
//   {
//     name: 'JavaScript',
//     route: 'JavaScript',
//     icon: 'logo-javascript',
//     component: JavaScriptScreen,
//   },
//   {name: 'React', route: 'React', icon: 'logo-react', component: ReactScreen},
//   {
//     name: 'Node.js',
//     route: 'NodeJs',
//     icon: 'logo-nodejs',
//     component: NodeJsScreen,
//   },
//   {
//     name: 'Express.js',
//     route: 'ExpressJs',
//     icon: 'code-slash',
//     component: ExpressJsScreen,
//   },
//   {name: 'MongoDB', route: 'MongoDB', icon: 'server', component: MongoDBScreen},
//   {name: 'AWS', route: 'AWS', icon: 'cloud-outline', component: AWSScreen},
//   {
//     name: 'Heroku',
//     route: 'Heroku',
//     icon: 'cloud-outline',
//     component: HerokuScreen,
//   },
//   {
//     name: 'Docker',
//     route: 'Docker',
//     icon: 'logo-docker',
//     component: DockerScreen,
//   },
//   {
//     name: 'Kubernetes',
//     route: 'Kubernetes',
//     icon: 'logo-kubernetes',
//     component: KubernetesScreen,
//   },
//   {name: 'Jenkins', route: 'Jenkins', icon: 'cog', component: JenkinsScreen},
//   {
//     name: 'Terraform',
//     route: 'Terraform',
//     icon: 'layers',
//     component: TerraformScreen,
//   },
//   {name: 'MySQL', route: 'MySQL', icon: 'server', component: MySQLScreen},
//   {
//     name: 'Firebase',
//     route: 'Firebase',
//     icon: 'logo-firebase',
//     component: FirebaseScreen,
//   },
//   {
//     name: 'RESTful API',
//     route: 'RestApi',
//     icon: 'link-outline',
//     component: RestApiScreen,
//   },
//   {
//     name: 'GraphQL',
//     route: 'GraphQL',
//     icon: 'link-outline',
//     component: GraphQLScreen,
//   },
//   {
//     name: 'React Native',
//     route: 'ReactNative',
//     icon: 'logo-react',
//     component: ReactNativeScreen,
//   },
//   {
//     name: 'Jest',
//     route: 'Jest',
//     icon: 'checkmark-circle-outline',
//     component: JestScreen,
//   },
//   {
//     name: 'Postman',
//     route: 'Postman',
//     icon: 'paper-plane',
//     component: PostmanScreen,
//   },
//   {name: 'Figma', route: 'Figma', icon: 'pencil', component: FigmaScreen},
//   {
//     name: 'Adobe XD',
//     route: 'AdobeXd',
//     icon: 'pencil',
//     component: AdobeXdScreen,
//   },
// ];

import React from 'react';

import GitScreen from '../../screens/technologies/GitScreen.tsx';
import GitHubScreen from '../../screens/technologies/GitHubScreen.tsx';
import UbuntuServerScreen from '../../screens/technologies/UbuntuServerScreen.tsx';
import NginxScreen from '../../screens/technologies/NginxScreen.tsx';
import JiraScreen from '../../screens/technologies/JiraScreen.tsx';
import TrelloScreen from '../../screens/technologies/TrelloScreen.tsx';
import HtmlCssScreen from '../../screens/technologies/HtmlCssScreen.tsx';
import JavaScriptScreen from '../../screens/technologies/JavaScriptScreen.tsx';
import ReactScreen from '../../screens/technologies/ReactScreen.tsx';
import NodeJsScreen from '../../screens/technologies/NodeJsScreen.tsx';
import ExpressJsScreen from '../../screens/technologies/ExpressJsScreen.tsx';
import MongoDBScreen from '../../screens/technologies/MongoDBScreen.tsx';
import AWSScreen from '../../screens/technologies/AWSScreen.tsx';
import HerokuScreen from '../../screens/technologies/HerokuScreen.tsx';
import DockerScreen from '../../screens/technologies/DockerScreen.tsx';
import KubernetesScreen from '../../screens/technologies/KubernetesScreen.tsx';
import MySQLScreen from '../../screens/technologies/MySQLScreen.tsx';
import FirebaseScreen from '../../screens/technologies/FirebaseScreen.tsx';
import RestApiScreen from '../../screens/technologies/RestApiScreen.tsx';
import GraphQLScreen from '../../screens/technologies/GraphQLScreen.tsx';
import ReactNativeScreen from '../../screens/technologies/ReactNativeScreen.tsx';
import JestScreen from '../../screens/technologies/JestScreen.tsx';
import PostmanScreen from '../../screens/technologies/PostmanScreen.tsx';
import FigmaScreen from '../../screens/technologies/FigmaScreen.tsx';
import AdobeXdScreen from '../../screens/technologies/AdobeXdScreen.tsx';
import SpringBootScreen from '../../screens/technologies/SpringBootScreen.tsx';
import JenkinsScreen from '../../screens/technologies/JenkinsScreen.tsx';
import TerraformScreen from '../../screens/technologies/TerraformScreen.tsx';


export const technologyRoutes = [
  {name: 'Git', route: 'Git', icon: 'git-branch', component: GitScreen},
  {
    name: 'GitHub',
    route: 'GitHub',
    icon: 'logo-github',
    component: GitHubScreen,
  },
  {
    name: 'Ubuntu Server',
    route: 'UbuntuServer',
    icon: 'server',
    component: UbuntuServerScreen,
  },
  {name: 'Nginx', route: 'Nginx', icon: 'code-slash', component: NginxScreen},
  {name: 'Jira', route: 'Jira', icon: 'clipboard', component: JiraScreen},
  {
    name: 'Trello',
    route: 'Trello',
    icon: 'grid-outline',
    component: TrelloScreen,
  },
  {
    name: 'HTML/CSS',
    route: 'HtmlCss',
    icon: 'code-slash',
    component: HtmlCssScreen,
  },
  {
    name: 'JavaScript',
    route: 'JavaScript',
    icon: 'logo-javascript',
    component: JavaScriptScreen,
  },
  {name: 'React', route: 'React', icon: 'logo-react', component: ReactScreen},
  {
    name: 'Node.js',
    route: 'NodeJs',
    icon: 'logo-nodejs',
    component: NodeJsScreen,
  },
  {
    name: 'Express.js',
    route: 'ExpressJs',
    icon: 'code-slash',
    component: ExpressJsScreen,
  },
  {
    name: 'Spring Boot',
    route: 'SpringBoot',
    icon: 'logo-java',
    component: SpringBootScreen,
  },
  {name: 'MongoDB', route: 'MongoDB', icon: 'server', component: MongoDBScreen},
  {name: 'AWS', route: 'AWS', icon: 'cloud-outline', component: AWSScreen},
  {
    name: 'Heroku',
    route: 'Heroku',
    icon: 'cloud-outline',
    component: HerokuScreen,
  },
  {
    name: 'Docker',
    route: 'Docker',
    icon: 'logo-docker',
    component: DockerScreen,
  },
  {
    name: 'Kubernetes',
    route: 'Kubernetes',
    icon: 'logo-kubernetes',
    component: KubernetesScreen,
  },
  {name: 'Jenkins', route: 'Jenkins', icon: 'cog', component: JenkinsScreen},
  {
    name: 'Terraform',
    route: 'Terraform',
    icon: 'layers',
    component: TerraformScreen,
  },
  {name: 'MySQL', route: 'MySQL', icon: 'server', component: MySQLScreen},
  {
    name: 'Firebase',
    route: 'Firebase',
    icon: 'logo-firebase',
    component: FirebaseScreen,
  },
  {
    name: 'RESTful API',
    route: 'RestApi',
    icon: 'link-outline',
    component: RestApiScreen,
  },
  {
    name: 'GraphQL',
    route: 'GraphQL',
    icon: 'link-outline',
    component: GraphQLScreen,
  },
  {
    name: 'React Native',
    route: 'ReactNative',
    icon: 'logo-react',
    component: ReactNativeScreen,
  },
  {
    name: 'Jest',
    route: 'Jest',
    icon: 'checkmark-circle-outline',
    component: JestScreen,
  },
  {
    name: 'Postman',
    route: 'Postman',
    icon: 'paper-plane',
    component: PostmanScreen,
  },
  {name: 'Figma', route: 'Figma', icon: 'pencil', component: FigmaScreen},
  {
    name: 'Adobe XD',
    route: 'AdobeXd',
    icon: 'pencil',
    component: AdobeXdScreen,
  },
];
