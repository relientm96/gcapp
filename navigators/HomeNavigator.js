import { createDrawerNavigator} from 'react-navigation';

import UserProfile from '../screens/UserProfile';
import MainScreen from '../screens/MainScreen';

const HomeNavigator = createDrawerNavigator(
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
    }
);

export default HomeNavigator;

  