import { 
  createSwitchNavigator, 
  createStackNavigator, 
  createAppContainer,
} from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';

import HomeNavigator from './navigators/HomeNavigator';

//Stack of app navigation

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
    App: HomeNavigator,
    Auth: AuthStack,
    AuthLoading: AuthLoadingScreen,
  },
  {
    //Start at login screen
    initialRouteName: 'Auth',
  }
));



