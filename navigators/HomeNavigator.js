import { createStackNavigator} from 'react-navigation';

import UserProfile from '../screens/UserProfile';
import MainScreen from '../screens/MainScreen';

const HomeNavigator = createStackNavigator(
    { 
        Main: {
            screen: MainScreen,
        },
        User: {
            screen: UserProfile,
        } 
    },
    {
        initialRouteName: 'Main',
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);

export default HomeNavigator;

  