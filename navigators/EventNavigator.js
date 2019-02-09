import React from 'react'
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import {Icon} from 'native-base';

import EventScreen from '../screens/Events';
import EventCalendar from '../screens/EventCalendar';

import { getStatusBarHeight } from 'react-native-status-bar-height';

const EventStack = createMaterialTopTabNavigator(
    {
        EventMain:{
            screen: EventScreen,
            navigationOptions:{
                tabBarLabel: 'Events'
            }
        },
        EventCalendar:{
            screen: EventCalendar,
            navigationOptions:{
                tabBarLabel: 'Calendar'
            }
        }
    },
    {
    initialRouteName: 'EventMain',
    swipeEnabled: false,
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
            marginTop: getStatusBarHeight(),
            height: 55.5,
        },
        showIcon: true,
        showLabel: true,
    },
    }
);

export default EventStack;
