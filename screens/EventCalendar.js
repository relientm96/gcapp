import React from 'react';
import { View, Image, SafeAreaView} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';


class EventCalendar extends React.Component {
    constructor(props) {
        super(props);
    } 
    
    render(){

        return (
        <SafeAreaView style={{ flex:1, backgroundColor: 'white' }}>  

            <View style={{height:getStatusBarHeight(), backgroundColor: 'steelblue'}}/> 
            
            <View style={{flex:1}}>

              <View> Calendar View </View>
                
            
            </View>

        </SafeAreaView>
        );
    }

}


export default EventCalendar
