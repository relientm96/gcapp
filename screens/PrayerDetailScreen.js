import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

class PrayerDetail extends React.Component {
    constructor(props) {
        super(props);
    }  
    
    render(){

        return (
        <SafeAreaView style={{ flex:1, backgroundColor: 'white' }}>  

            <View style={{flex:1 , justifyContent:'center', alignItems:'center'}}>
                <Text> Prayer Detail Screen </Text>
            </View>

        </SafeAreaView>
        );
    }

}


export default PrayerDetail
