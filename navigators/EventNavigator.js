import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation'

import EventScreen from '../screens/Events';
import EventCalendar from '../screens/EventCalendar';

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
    initialRouteName: 'EventMain'
    }
);

export default EventStack;
