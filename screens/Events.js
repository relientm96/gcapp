import React from 'react';
import { View} from 'react-native';
import EventSwiper from '../components/EventSwiper';

//Todo: Use DECK Swiper from nativebase : http://docs.nativebase.io/Components.html#deckswiper-def-headref

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
