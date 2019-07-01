import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

class StudyView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTitle: 'Bible Study Title',
            currentText: 'Some text about the study'
        };
    } 

    componentDidMount() {
        this.makeRequest();
    };

    async makeRequest() {
        const url = "https://react-native-gcapp.firebaseio.com/gc1/Study.json";
        this.state.loading = true;
        try {
            let response = await fetch(url);
            let responseJson = await response.json();
            //Set state for text and title after successful fetch
            this.setState({
                currentTitle: responseJson.title,
                currentText: responseJson.study
            });
          } catch (error) {
            console.error(error);
          }
    };

    render(){
        return (
            <SafeAreaView>
                <View style={{height:60, paddingTop:20, paddingBottom:20}}>
                    <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                        {this.state.currentTitle} 
                    </Text>
                </View>
                
                <View>
                    <ScrollView contentContainerStyle={{flexGrow: 1}}>
                        <View style={{flex:1}}>
                            <Text style={{fontSize:18, paddingHorizontal: 20}}>
                                {this.state.currentText}
                            </Text>
                        </View>
                    </ScrollView>                    
                </View>


            </SafeAreaView>

        );
    }

}

export default StudyView
