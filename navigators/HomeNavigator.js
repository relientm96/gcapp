import { createBottomTabNavigator} from 'react-navigation';
import UserProfile from '../screens/UserProfile';

const HomeNavigator = createBottomTabNavigator(
    { 
      User: {
        screen: UserProfile,
      },  
    }
  );

export default HomeNavigator;
