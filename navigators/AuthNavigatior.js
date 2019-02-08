import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';

//Stack of authentication navigation flow
const AuthStack = createStackNavigator(
    { 
      Login: {
        screen: LoginScreen
      }
      //TODO: Add Register (and Forgot Password) screens
    },
);

export default AuthStack

