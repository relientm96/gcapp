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
        <SafeAreaView style={{ flex:1, backgroundColor: '#e6e6e6'}}>  

            <View style={{height:getStatusBarHeight(), backgroundColor: 'steelblue'}}/> 

            <View style={{flex:1}}>
                
                <PrayerList navigation={this.props.navigation}/>

            </View>

        </SafeAreaView>
        );
    }

}

export default PrayerScreen
