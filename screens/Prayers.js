import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import PrayerList from '../components/PrayerList';
import PrayerDetail from '../screens/PrayerDetailScreen';

class PrayerScreen extends React.Component {
    constructor(props) {
        super(props);
    }  

    static navigationOptions = { header: null };

    render(){

        return (
        <SafeAreaView navigation={this.props.navigation} style={{ flex:1, backgroundColor: '#e6e6e6'}}>  

            <View style={{height:getStatusBarHeight(), backgroundColor: 'steelblue'}}/> 

            <View style={{flex:1}}>
                
                <PrayerList navigation={this.props.navigation}/>

            </View>

        </SafeAreaView>
        );
    }

}

export default PrayerScreen
