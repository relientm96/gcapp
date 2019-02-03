/*Navigation for app*/

import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createMaterialTopTabNavigator} from 'react-navigation'
import {Icon} from 'native-base';

//Screens
import UserProfile from '../screens/UserProfile';
import MainScreen from '../screens/MainScreen';
import EventScreen from '../screens/Events';
import PrayerScreen from '../screens/Prayers';

const HomeNavigator = createMaterialTopTabNavigator(
    { 
        Main: {
            screen: MainScreen,
            navigationOptions:{
                tabBarLabel: 'Home',
                tabBarIcon: ({tintColor})=>(
                    <Icon name="home" color={tintColor} size={24}/>
                )
            }
        },
        User: {
            screen: UserProfile,
            navigationOptions:{
                tabBarLabel: 'Profile',
                tabBarIcon: ({tintColor})=>(
                    <Icon name="person" color={tintColor} size={24}/>
                )
            }
        },
        Prayers: {
            screen: PrayerScreen,
            navigationOptions:{
                tabBarLabel: 'Prayers',
                tabBarIcon: ({tintColor})=>(
                    <Icon name="hand" color={tintColor} size={24}/>
                )
            }
        }, 
        Events: {
            screen: EventScreen,
            navigationOptions:{
                tabBarLabel: 'Events',
                tabBarIcon: ({tintColor})=>(
                    <Icon name="calendar" color={tintColor} size={24}/>
                )
            }
        }  
    },
    {
        initialRouteName: 'Main',
        order:['Main','Events','Prayers','User'],
        swipeEnabled: true,
        animationEnabled: false,
        tabBarOptions: {
            activeTintColor: 'orange',
            inactiveTintColor: 'white',
            style: {
                backgroundColor: 'steelblue'
            },
            indicatorStyle: {
                height: 0
            },
            showIcon: true,
            showLabel: true,
        },
        tabBarPosition: 'bottom',
    }
   
);

export default HomeNavigator;

  