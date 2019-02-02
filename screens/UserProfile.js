import React from 'react';
import { StyleSheet, Text, View, AsyncStorage} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { Container, Content, Header, Left, Body, Right, Icon, Title, Button} from 'native-base';

class UserProfile extends React.Component {
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
      };

    render(){       
        return (

            <Container style={{marginTop: getStatusBarHeight()}}> 

                <Header style={{backgroundColor: 'steelblue'}}>
                    <Left>
                        <Button transparent>
                            <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()}></Icon>
                        </Button>                    
                    </Left>
                    <Body>
                        <Title>User</Title>
                    </Body>
                </Header>
                
                <Content contentContainerStyle={{
                    flex: 1, 
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text>User Profile</Text>
                    <Button primary onPress={this._signOutAsync}> 
                        <Text style={{color: 'white'}}>Actually, sign me out</Text> 
                    </Button>
                </Content>

            </Container>

        );
    }
}

export default UserProfile
