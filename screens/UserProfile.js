import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, StatusBar} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { Container, Content, Header, Left, Body, Right, Icon, Title, Button, Footer, FooterTab} from 'native-base';

import MyFooter from '../components/myFooter'

class UserProfile extends React.Component {
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
      };

    render(){       
        return (

            <Container> 

                <View style={{height: getStatusBarHeight(), backgroundColor: 'rgba(46, 85, 118, 1)'}}></View>

                <Header style={{backgroundColor: 'steelblue'}}>
                    <Body>
                        <Title>Profile</Title>
                    </Body>
                </Header>
                
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text>User Profile</Text>
                    <Button style={{
                        justifyContent: 'center', 
                        alignSelf:'center', 
                        width: 100
                    }} 
                        onPress={this._signOutAsync}> 
                        <Text style={{color: 'white'}}>Sign Out</Text> 
                    </Button>

                </Content>

            <Footer>
                <MyFooter navigation={this.props.navigation}/>
            </Footer>

            </Container>

        );
    }
}

export default UserProfile
