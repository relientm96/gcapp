import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Image} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { Container, Content, Header, Left, Body, Right, Icon, Title, Button, Footer} from 'native-base';

import MyFooter from '../components/myFooter'

class UserProfile extends React.Component {
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
      };

    render(){       
        return (

            <View> 

                <View style={{height: getStatusBarHeight(), backgroundColor: 'rgba(46, 85, 118, 1)'}}></View>

                <View style={{flex: 1, backgroundColor:'rgba(123, 167, 204, 1)', justifyContent:'center', alignItems:'center'}}>
                    <Image style={{height: 100, width: 100, borderRadius: 50}} source={{uri: 'https://scontent.fkul8-1.fna.fbcdn.net/v/t1.0-9/16196015_10154888128487744_6901111466535510271_n.png?_nc_cat=103&_nc_ht=scontent.fkul8-1.fna&oh=0b30d1f322e3ca702c6b211b910ed6ce&oe=5CF4CDE9'}}/>
                    <Text styles={{color:'white'}}> Matthew Yong </Text>
                </View>

                <View style={{flex: 2, backgroundColor:'skyblue'}}>

                    
                </View>

            </View>

        );
    }
}

export default UserProfile
