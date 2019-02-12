import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Container, Header, Content, Card, CardItem, Body, Text, Title } from 'native-base';

import { Font, AppLoading } from 'expo';

class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading: true 
        };
    }  

    static navigationOptions = {
        header: null,
    };

    async componentWillMount() {
       await Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({ loading: false });
    };

    render(){

        if ( this.state.loading ){
            return (
                <View>
                    <AppLoading />                
                </View>
            )
        }
        else {
            return (
            <SafeAreaView style={{ flex:1, backgroundColor: 'white' }}>  

                <View style={{height:getStatusBarHeight(), backgroundColor: 'steelblue'}}/> 

                <ScrollView scrollEventThrottle={16} style={{flex:1}}>

                    <View style={{flex:1, paddingTop:20, paddingBottom:20}}>
                        <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                            This Week 
                        </Text>
                    </View>

                    <ScrollView
                        style={{flex:1}}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        >

                        <View style={{
                            height: Dimensions.get('window').height - 100, 
                            width: Dimensions.get('window').width, 
                            padding: 5, 
                            borderWidth: 0.5,
                            borderColor: '#dddddd'}}>
                            <View style = {{flex:2}}>
                                <Image source = {{uri: "https://media.swncdn.com/cms/CW/faith/60657-bible-teaching-1200.jpg"}} style={{flex:1, width:null, height:null, resizeMode:'cover'}}
                                />
                            </View>
                            <View style={{flex:1, padding:5}}>
                                <Text> Weekly Study </Text>
                            </View>
                        </View>

                            {/*
                            <Container>
                                <Content padder style={{padding: 5}}>
                                    <Card>
                                        <CardItem header bordered>
                                        <Text>Gospel of John</Text>
                                        </CardItem>
                                        <CardItem bordered>
                                        <Body>
                                            <Text>
                                            Though it is one of easiest books to read, 
                                            John is also one of the most profound books to understand. 
                                            Let veteran Bible teacher and pastor, Dr. J. Vernon McGee 
                                            lead you through the entire book in these 21 summaries.
                                            </Text>
                                        </Body>
                                        </CardItem>
                                        <CardItem footer bordered>
                                        <Text>Matthew Yong</Text>
                                        </CardItem>
                                    </Card>
                                </Content>
                            </Container>
                            */}
                        
                        <View style={{
                            height: Dimensions.get('window').height - 100, 
                            width: Dimensions.get('window').width, 
                            padding: 5, 
                            borderWidth: 0.5, 
                            borderColor: '#dddddd'}}>
                            <View style = {{flex:2}}>
                                <Image source = {{uri: "http://metropolismanagement.com/wp-content/uploads/2018/09/event-management-blog-1-performance.jpg"}} style={{flex:1, width:null, height:null, resizeMode:'cover'}}
                                />
                            </View>
                            <View style={{flex:1, padding:5}}>
                                <Text> Events </Text>
                            </View>
                        </View>   

                        <View style={{
                            height: Dimensions.get('window').height - 100, 
                            width: Dimensions.get('window').width, 
                            padding: 5, 
                            borderWidth: 0.5, 
                            borderColor: '#dddddd'}}>
                            <View style = {{flex:2}}>
                                <Image source = {{uri: "https://media.swncdn.com/cms/CW/faith/32584-praying-hands-3-1200.1200w.tn.jpg"}} style={{flex:1, width:null, height:null, resizeMode:'cover'}}
                                />
                            </View>
                            <View style={{flex:1, padding:5}}>
                                <Text> Prayers </Text>
                            </View>
                        </View>   
      
                            {/*
                            <Container>
                                <Content padder style={{padding: 5}}>
                                    <Card>
                                        <CardItem header bordered>
                                            <Text>Verse of the Week</Text>
                                        </CardItem>
                                        <CardItem bordered>
                                        <Body>
                                            <Text>
                                            John 18:15: “If your brother or sister sins, go and point out their fault, just between the two of you. 
                                            If they listen to you, you have won.
                                            </Text>
                                        </Body>
                                        </CardItem>
                                    </Card>
                                </Content>
                            </Container>
                            */}
                        

                    </ScrollView>        
                    
                </ScrollView>

            </SafeAreaView>
            );
        }
    }
}


export default MainScreen
