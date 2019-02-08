import React from 'react';
import { View, Image, SafeAreaView} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

//Todo: Use DECK Swiper from nativebase : http://docs.nativebase.io/Components.html#deckswiper-def-headref

const cards = [
    {
        text: 'Card One',
        name: 'One',
        image: "https://firebasestorage.googleapis.com/v0/b/react-native-gcapp.appspot.com/o/prayerPictures%2Fscenery.jpg?alt=media&token=847b9847-b3c7-44c6-b2c3-541e9e9330a2"
    },
    {
        text: 'Card Two',
        name: 'One',
        image: "https://firebasestorage.googleapis.com/v0/b/react-native-gcapp.appspot.com/o/prayerPictures%2Fscenery.jpg?alt=media&token=847b9847-b3c7-44c6-b2c3-541e9e9330a2"
    }
  ];

class EventScreen extends React.Component {
    constructor(props) {
        super(props);
    } 
    
    render(){

        return (
        <View style={{ flex:1, backgroundColor: 'white' }}>  
            
            <View style={{flex:1}}>

                <View style={{flex:1, backgroundColor: 'powderblue'}}>

                </View>    

                <View style={{flex:2, backgroundColor: 'skyblue'}}>

                </View>
                
            
            </View>

        </View>
        );
    }

}


export default EventScreen
