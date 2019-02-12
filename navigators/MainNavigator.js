import { createStackNavigator } from 'react-navigation'

import MainScreen from '../screens/MainScreen';
import StudyScreen from '../screens/StudyScreen';

const HomeStack = createStackNavigator({
    //Todo add screens 
    Home:{
        screen: MainScreen
    },
});

export default HomeStack;
