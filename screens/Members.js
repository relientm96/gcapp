import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

class MemberScreen extends React.Component {
    constructor(props) {
        super(props);
    }  

    render(){

        return (
        <SafeAreaView style={{ flex:1, backgroundColor: 'skyblue' }}>  

            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text> Members </Text>
            </View>

        </SafeAreaView>
        );
    }

}


export default MemberScreen
