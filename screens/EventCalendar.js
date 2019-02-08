import React from 'react';
import { View, Image, SafeAreaView, Text} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

class EventCalendar extends React.Component {
    constructor(props) {
        super(props);
    } 
    
    render(){

        return (
        <View style={{ flex:1, backgroundColor: 'white' }}>  
            
            <View style={{flex:1}}>

              <View> 
                  <Text> 
                      Calendar View  
                  </Text>
              </View>
                
            
            </View>

        </View>
        );
    }

}


export default EventCalendar
