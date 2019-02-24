import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

class StudyScreen extends React.Component {
    constructor(props) {
        super(props);
    } 

    render(){
        return (
            <SafeAreaView>
                <View style={{height:60, paddingTop:20, paddingBottom:20}}>
                    <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                        Study #1 Bible Study Title 
                    </Text>
                </View>

                <ScrollView>
                    
                </ScrollView>
            </SafeAreaView>

        );
    }

}


export default StudyScreen
