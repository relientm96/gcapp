import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import UserProfile from '../screens/UserProfile';
import MainScreen from '../screens/MainScreen';

const HomeNavigator = createMaterialBottomTabNavigator(
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

  