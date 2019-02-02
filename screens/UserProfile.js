import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, StatusBar} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { Container, Content, Header, Left, Body, Right, Icon, Title, Button} from 'native-base';

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
                    <Left style={{flexDirection: 'row'}}>
                        <Button large transparent>
                            <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()}></Icon>
                        </Button>                    
                    </Left>
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

            </Container>

        );
    }
}

export default UserProfile
