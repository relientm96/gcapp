import { createStackNavigator, createAppContainer } from 'react-navigation';

import UserProfile from './screens/UserProfile';
import LoginScreen from './screens/LoginScreen';

const AppStackNavigator = createStackNavigator(
  {
    User: UserProfile,
    Login: LoginScreen
  },
  {    
    initialRouteName : "Login"
  }
);

const App = createAppContainer(AppStackNavigator);

export default App;

