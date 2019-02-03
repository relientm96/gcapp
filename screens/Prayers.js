import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import PrayerList from '../components/PrayerList';

class PrayerScreen extends React.Component {
    constructor(props) {
        super(props);
    }  

    render(){

        return (
        <SafeAreaView style={{ flex:1, backgroundColor: 'skyblue' }}>  

            <View style={{height:getStatusBarHeight(), backgroundColor: 'steelblue'}}/> 

            <View style={{flex:1}}>
                
                <PrayerList/>

            </View>

        </SafeAreaView>
        );
    }

}


export default PrayerScreen
