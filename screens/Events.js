import React from 'react';
import { View, SafeAreaView} from 'react-native';
import EventSwiper from '../components/EventSwiper';

class EventScreen extends React.Component {
    constructor(props) {
        super(props);
    } 
    render(){
        return (
        <SafeAreaView style={{ flex:1 }}>  
            <EventSwiper/>
        </SafeAreaView>
        );
    }
}


export default EventScreen
