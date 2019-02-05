/*Navigation for app*/

import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createMaterialTopTabNavigator, createStackNavigator} from 'react-navigation'
import {Icon} from 'native-base';

//Screens
import UserProfile from '../screens/UserProfile';
import MainScreen from '../screens/MainScreen';
import EventScreen from '../screens/Events';
import PrayerStack from '../navigators/PrayerNavigator';

const HomeNavigator = createMaterialTopTabNavigator(
    { 
        Main: {
            screen: MainScreen,
            navigationOptions:{
                tabBarLabel: 'Home',
                tabBarIcon: ({tintColor})=>(
                    <Icon style={{color: "white"}} name="home" color={tintColor} size={24}/>
                )
            }
        },
        User: {
            screen: UserProfile,
            navigationOptions:{
                tabBarLabel: 'Profile',
                tabBarIcon: ({tintColor})=>(
                    <Icon style={{color: "white"}} name="person" color={tintColor} size={24}/>
                )
            }
        },
        Prayers: { 
            screen: PrayerStack,
            navigationOptions:{
                tabBarLabel: 'Prayers',
                tabBarIcon: ({tintColor})=>(
                    <Icon style={{color: "white"}} name="hand" color={tintColor} size={24}/>
                )
            }
        }, 
        Events: {
            screen: EventScreen,
            navigationOptions:{
                tabBarLabel: 'Events',
                tabBarIcon: ({tintColor})=>(
                    <Icon style={{color: "white"}} name="calendar" color={tintColor} size={24}/>
                )
            }
        }  
    },
    {
        initialRouteName: 'Main',
        order:['Main','Events','Prayers','User'],
        swipeEnabled: true,
        animationEnabled: true,
        optimizationsEnabled: true,
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'white',
            style: {
                backgroundColor: 'steelblue',
                borderTopWidth: 0.5,
                borderTopColor: 'grey',
            },
            indicatorStyle: {
                height: 0
            },
            tabStyle: {
                marginTop: 10,
                height: 50,
            },
            showIcon: true,
            showLabel: true,
        },
        tabBarPosition: 'bottom',
    }
   
);

export default HomeNavigator;

  