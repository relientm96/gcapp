/*Navigation for app*/

import React from 'react'
import { createMaterialTopTabNavigator, createStackNavigator} from 'react-navigation'
import {Icon} from 'native-base';

//Screens
import UserProfile from '../screens/UserProfile';
import MainScreen from '../screens/MainScreen';
import StudyScreen from '../screens/StudyScreen';

//Navigators
import PrayerStack from '../navigators/PrayerNavigator';
import EventStack from '../navigators/EventNavigator';

const AppNavigator = createMaterialTopTabNavigator(
    { 
        Main: {
            screen: MainScreen,
            navigationOptions:{
              //  tabBarLabel: 'Home',
                tabBarIcon: ({tintColor})=>(
                    <Icon style={{color: "white"}} name="home" color={tintColor} size={24}/>
                )
            }
        },
        Study: {
            screen: StudyScreen,
            navigationOptions:{
              //  tabBarLabel: 'Home',
                tabBarIcon: ({tintColor})=>(
                    <Icon style={{color: "white"}} name="book" color={tintColor} size={24}/>
                )
            }
        },
        User: {
            screen: UserProfile,
            navigationOptions:{
               // tabBarLabel: 'Profile',
                tabBarIcon: ({tintColor})=>(
                    <Icon style={{color: "white"}} name="person" color={tintColor} size={24}/>
                )
            }
        },
        Prayers: { 
            screen: PrayerStack,
            navigationOptions:{
               // tabBarLabel: 'Prayers',
                tabBarIcon: ({tintColor})=>(
                    <Icon style={{color: "white"}} name="hand" color={tintColor} size={24}/>
                )
            }
        }, 
        Events: {
            screen: EventStack,
            navigationOptions:{
              //  tabBarLabel: 'Events',
                tabBarIcon: ({tintColor})=>(
                    <Icon style={{color: "white"}} name="calendar" color={tintColor} size={24}/>
                )
            }
        }  
    },
    {
        initialRouteName: 'Main',
        order:['Main','Study','Events','Prayers','User'],
        swipeEnabled: false,
        animationEnabled: false,
        optimizationsEnabled: true,
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: '#f2f2f2',
            style: {
                backgroundColor: 'steelblue',
                borderTopWidth: 0,
                shadowOffset:{width:5,height:3},
                shadowColor:'black',
                shadowOpacity: 0.5,
                elevation: 5
            },
            indicatorStyle: {
                height: 0
            },
            tabStyle: {
                marginTop: 5,
                height: 45,
                marginBottom: 5,
            },
            showIcon: true,
            showLabel: false,
        },
        tabBarPosition: 'bottom',
    }
   
);

export default AppNavigator;

  