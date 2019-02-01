import React from 'react'
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import UserProfile from './screens/UserProfile';
import LoginScreen from './screens/LoginScreen';

//Stack of app navigation
const AppStack = createStackNavigator(
  { 
    User: {
      screen: UserProfile,
    },  
  }
);

//Stack of authentication navigation flow
const AuthStack = createStackNavigator(
  { 
    Login: {
      screen: LoginScreen
    }
  },
);

//The Main App Container
export default createAppContainer(createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
  },
  {
    //Start at login screen
    initialRouteName: 'Auth',
  }
));



