import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import MyFooter from '../components/myFooter'

class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }  

    render(){

        return (
        <SafeAreaView style={{ flex:1, backgroundColor: 'skyblue' }}>  

            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text> Hi </Text>
            </View>

        </SafeAreaView>
        );
    }

}


export default MainScreen
