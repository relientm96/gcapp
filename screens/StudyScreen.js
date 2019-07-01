import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import StudyView from '../components/StudyView';

class StudyScreen extends React.Component {
    constructor(props) {
        super(props);
    } 

    render(){
        return (
          <View>
             <StudyView/>
          </View>

        );
    }

}


export default StudyScreen
