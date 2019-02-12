import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, ScrollView, Dimensions, ImageBackground, TouchableWithoutFeedback} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Container, Header, Content, Card, CardItem, Body, Text, Title } from 'native-base';

import { Font, AppLoading, BlurView } from 'expo';

import Swiper from 'react-native-swiper'

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

                <View style={{flex:1}}>

                    <View style={{height:60, paddingTop:20, paddingBottom:20}}>
                        <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                            This Week 
                        </Text>
                    </View>

                    <View style={{flex:2}}>   
                        <Swiper
                            style={{flex:1}}
                            showsButtons={false}
                            loop={false}
                            showPagination={false}                          
                            >

                            <View style={{
                                height: Dimensions.get('window').height - 80, 
                                width: Dimensions.get('window').width, 
                                padding: 5, 
                                borderWidth: 0.5,
                                borderColor: '#dddddd'}}>
                                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('User')}>
                                <BlurView style = {{flex:1}}>
                                    <ImageBackground source = {{uri: "https://media.swncdn.com/cms/CW/faith/60657-bible-teaching-1200.jpg"}} 
                                        style={{flex:1, width:'100%', height:'60%', resizeMode:'cover'}}>
                                        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                                            <Text style={{fontSize: 24, fontWeight: '700', color: 'white'}}>Weekly Study</Text>
                                        </View>
                                    </ImageBackground>
                                </BlurView>
                                </TouchableWithoutFeedback>
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
                                height: Dimensions.get('window').height - 80, 
                                width: Dimensions.get('window').width, 
                                padding: 5, 
                                borderWidth: 0.5, 
                                borderColor: '#dddddd'}}>
                                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Events')}>
                                <BlurView style = {{flex:1}}>
                                    <ImageBackground source = {{uri: "http://metropolismanagement.com/wp-content/uploads/2018/09/event-management-blog-1-performance.jpg"}} 
                                        style={{flex:1, width:'100%', height:'60%', resizeMode:'cover'}}>
                                        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                                            <Text style={{fontSize: 24, fontWeight: '700', color: 'white'}}>Events</Text>
                                        </View>
                                    </ImageBackground>
                                </BlurView>
                                </TouchableWithoutFeedback>
                            </View>   

                            <View style={{
                                height: Dimensions.get('window').height - 80, 
                                width: Dimensions.get('window').width, 
                                padding: 5, 
                                borderWidth: 0.5, 
                                borderColor: '#dddddd'}}>
                                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Prayers')}>
                                <BlurView style = {{flex:1}}>
                                    <ImageBackground source = {{uri: "https://media.swncdn.com/cms/CW/faith/33418-praying-over-bible-1200.1200w.tn.jpg"}} 
                                        style={{flex:1, width:'100%', height:'60%', resizeMode:'cover'}}>
                                        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                                            <Text style={{fontSize: 24, fontWeight: '700', color: 'white'}}>Prayers</Text>
                                        </View>
                                    </ImageBackground>
                                </BlurView>
                                </TouchableWithoutFeedback>
                            </View>  
                        </Swiper> 
                    </View>   

                    <View style={{
                            flex: 0.6,
                            height: null,
                            width: Dimensions.get('window').width - 5, 
                            padding: 20, 
                            paddingLeft: 10,
                            borderWidth: 0.5, 
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderColor: '#dddddd'}}>
                            <View style = {{flex:1}}>
                                <Text style={{paddingTop:5, paddingBottom:5, fontSize: 18, fontWeight: '700'}}>
                                    Verse of the Week
                                </Text>
                                <Text style={{padding: 5, paddingBottom: 10}}>
                                    John 18:15: “If your brother or sister sins, go and point out their fault, just between the two of you. 
                                    If they listen to you, you have won. Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                                </Text>
                            </View>
                    </View>

                </View>                             
            </SafeAreaView>
            );
        }
    }
}


export default MainScreen
