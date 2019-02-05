import React from 'react'
import { createStackNavigator} from 'react-navigation'
import {Icon} from 'native-base';

import PrayerScreen from '../screens/Prayers';
import PrayerDetail from '../screens/PrayerDetailScreen';

const PrayerStack = createStackNavigator({
    PrayerList:{
        screen: PrayerScreen
    },
    DetailScreen:{
        screen: PrayerDetail
    }
});

export default PrayerStack;
