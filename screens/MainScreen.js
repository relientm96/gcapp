import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { Container, Content, Header, Left, Body, Icon} from 'native-base';

class MainScreen extends React.Component {

    render(){
        return (

        <Container style={{marginTop: getStatusBarHeight()}}>

            <Header style={{color: 'steelblue'}}>
                <Left>
                    <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()}></Icon>
                </Left>
                <Body>
                    <Text> Main </Text>
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
