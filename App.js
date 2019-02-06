import { 
  createSwitchNavigator, 
  createAppContainer,
} from 'react-navigation';

import AuthLoadingScreen from './screens/AuthLoadingScreen';

import AppNavigator from './navigators/HomeNavigator';
import AuthStack from './navigators/AuthNavigatior';

//The Main App Container
export default createAppContainer(createSwitchNavigator(
  {
    App: AppNavigator,
    Auth: AuthStack,
    AuthLoading: AuthLoadingScreen,
  },
  {
    //Start at login screen
    initialRouteName: 'Auth',
  }
));



