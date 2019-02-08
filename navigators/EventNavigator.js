import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation'

import EventScreen from '../screens/Events';
import EventCalendar from '../screens/EventCalendar';

import { getStatusBarHeight } from 'react-native-status-bar-height';

const EventStack = createMaterialTopTabNavigator(
    {
        EventMain:{
            screen: EventScreen
        },
        EventCalendar:{
            screen: EventCalendar
        }
    },
    {
    initialRouteName: 'EventMain',
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
        },
        showIcon: true,
        showLabel: true,
    },
    }
);

export default EventStack;
