import React from 'react';
import { View} from 'react-native';
import EventSwiper from '../components/EventSwiper';

class EventScreen extends React.Component {
    constructor(props) {
        super(props);
    } 
    
    render(){

        return (
        <View style={{ flex:1 }}>  
            <EventSwiper/>
        </View>
        );
    }

}


export default EventScreen
