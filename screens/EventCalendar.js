import React from 'react';
import { View, SafeAreaView, Text} from 'react-native';

class EventCalendar extends React.Component {
    constructor(props) {
        super(props);
    } 
    
    render(){

        return (
        <SafeAreaView style={{ flex:1, backgroundColor: 'white' }}>  
            
            <View style={{flex:1}}>

              <View> 
                  <Text> 
                      Calendar View  
                  </Text>
              </View>
                
            
            </View>

        </SafeAreaView>
        );
    }

}


export default EventCalendar
