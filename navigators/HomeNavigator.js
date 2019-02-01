import { createDrawerNavigator} from 'react-navigation';

import UserProfile from '../screens/UserProfile';
import MainScreen from '../screens/MainScreen';

const HomeNavigator = createDrawerNavigator(
    { 
        User: {
            screen: UserProfile,
        },  
        Main: {
            screen: MainScreen,
        }
    },
);

export default HomeNavigator;

  