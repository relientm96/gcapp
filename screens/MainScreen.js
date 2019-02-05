import React from 'react';
import { StyleSheet, View, Image, SafeAreaView} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Container, Header, Content, Card, CardItem, Body, Text, Title } from 'native-base';

class MainScreen extends React.Component {
    constructor(props) {
        super(props);
    }  

    render(){

        return (
        <SafeAreaView style={{ flex:1, backgroundColor: 'white' }}>  

            <View style={{height:getStatusBarHeight(), backgroundColor: 'steelblue'}}/> 

            <View style={{flex:1}}>

                <View style={{flex:2}} >
                    <Container>
                        <Header>
                            <Body>
                                <Text>This week's study</Text>
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
                                lead you through the entire book in these 21 summaries 
                                from Thru the Bible’s tried and trusted five year study.
                                </Text>
                            </Body>
                            </CardItem>
                            <CardItem footer bordered>
                            <Text>Matthew Yong - 6/2/2019</Text>
                            </CardItem>
                        </Card>
                        </Content>
                    </Container>
                </View>

                <View style={{flex:1}}>
                <Container>
                        <Header>
                            <Body>
                                <Title>Verse of the day</Title>
                            </Body>
                        </Header>
                        <Content padder>
                        <Card>
                            <CardItem header bordered>
                                <Text>Matthew 18:15</Text>
                            </CardItem>
                            <CardItem bordered>
                            <Body>
                                <Text>
                                “If your brother or sister sins, go and point out their fault, just between the two of you. 
                                If they listen to you, you have won them over.
                                </Text>
                            </Body>
                            </CardItem>
                        </Card>
                        </Content>
                    </Container>
                </View>


            </View>

        </SafeAreaView>
        );
    }
}


export default MainScreen
