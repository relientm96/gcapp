import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createMaterialTopTabNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons';
import UserProfile from '../screens/UserProfile';
import MainScreen from '../screens/MainScreen';

const HomeNavigator = createMaterialTopTabNavigator(
    { 
        Main: {
            screen: MainScreen,
            navigationOptions:{
                tabBarLabel: 'Home',
                tabBarIcon: ({tintColor})=>(
                    <Icon name="ios-home" color={tintColor} size={24}/>
                )
            }
        },
        User: {
            screen: UserProfile,
            navigationOptions:{
                tabBarLabel: 'Profile',
                tabBarIcon: ({tintColor})=>(
                    <Icon name="ios-person" color={tintColor} size={24}/>
                )
            }
        } 
    },
    {
        initialRouteName: 'Main',
        order:['Main','User'],
        tabBarOptions: {
            activeTintColor: 'skyblue',
            inactiveTintColor: 'grey',
            style: {
                backgroundColor: 'steelblue'
            },
            indicatorStyle: {
                height: 0
            },
            showIcon: true

        }
    }
);

export default HomeNavigator;

  