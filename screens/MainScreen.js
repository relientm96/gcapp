import React from 'react';
import { StyleSheet, View, Image, SafeAreaView} from 'react-native';
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

                <View style={{flex:1}}>

                    <Container>
                        
                        <Header style={{
                            backgroundColor:'steelblue',
                            borderBottomWidth: 1, 
                            borderBottomColor: '#dddddd'
                            }}>
                            <Body>
                                <Title style={{fontSize: 20, fontWeight:'700'}}>Home</Title>
                            </Body>
                        </Header>
                        
                        <Content padder>

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

                            <Card>
                                <CardItem header bordered>
                                    <Text>Matthew 18:15</Text>
                                </CardItem>
                                <CardItem bordered>
                                <Body>
                                    <Text>
                                    “If your brother or sister sins, go and point out their fault, just between the two of you. 
                                    If they listen to you, you have won.dd
                                    </Text>
                                </Body>
                                </CardItem>
                            </Card>
                        
                        </Content>

                        </Container>

                </View>

            </SafeAreaView>
            );
        }
    }
}


export default MainScreen
