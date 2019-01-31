import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation';

import UserProfile from './screens/UserProfile';
import LoginScreen from './screens/LoginScreen';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppStackNavigator = createStackNavigator(
  {
    User: UserProfile,
    Login: LoginScreen,
  },
  {
    initialRouteName : "Login"
  }
);

const AppContainer = createAppContainer(AppStackNavigator);


