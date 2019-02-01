import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Button} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { Container, Content, Header, Left, Body, Right, Icon } from 'native-base';

class UserProfile extends React.Component {

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
      };

    render(){
        return (
         <Container style={{marginTop: getStatusBarHeight()}} >

            <Header style={{color: 'steelblue'}}>
                <Left>
                    <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()}></Icon>
                </Left>
                <Body>
                    <Text>User</Text>
                </Body>
            </Header>
            
            <Content contentContainerStyle={{
                flex: 1, 
                alignItems: 'center',
                justifyContent: 'center',
             }}>
                <Text>User Profile</Text>
                <Button title="Actually, sign me out" onPress={this._signOutAsync} />
            </Content>

        </Container>
        );
    }
}

export default UserProfile
