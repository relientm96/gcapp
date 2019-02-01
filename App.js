import { 
  createSwitchNavigator, 
  createStackNavigator, 
  createAppContainer,
} from 'react-navigation';

import UserProfile from './screens/UserProfile';
import LoginScreen from './screens/LoginScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';

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
    AuthLoading: AuthLoadingScreen,
  },
  {
    //Start at login screen
    initialRouteName: 'Auth',
  }
));



