import React from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { Container, Content, Header, Left, Body, Icon, Title, Button} from 'native-base';

class MainScreen extends React.Component {
    constructor() {
        super();
        this.state = {
        isReady: false
        };
    }  

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });
        this.setState({ isReady: true });
    }

    render(){

        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }

        return (

        <Container>

            <View style={{height: getStatusBarHeight(), backgroundColor: 'rgba(46, 85, 118, 1)'}}></View>

            <Header style={{backgroundColor: 'steelblue'}}>

                <Left style={{flexDirection: 'row'}}>

                <Button transparent>
                    <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()}></Icon>
                </Button>

                </Left>

                <Body>
                    <Title>Gospel Community</Title>
                </Body>

            </Header>

            <Content contentContainerStyle={{
                flex: 1, 
                alignItems: 'center',
                justifyContent: 'center',
            }}>

                <Text>Main Screen!</Text>
            </Content>

        </Container>

        );
    }

}


export default MainScreen
