import React from 'react';
import { View, Text } from 'react-native';

class StudyScreen extends React.Component {
    constructor(props) {
        super(props);
    } 
    
    render(){

        return (
        <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>  
            <Text> Study This Week </Text>
        </View>
        );
    }

}


export default StudyScreen
