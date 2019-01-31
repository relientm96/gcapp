import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import Form from '../components/Form';
import Logo from '../components/Logo';

class LoginScreen extends React.Component {
    render(){
        return (
        <View style={styles.container}>
            <View style={styles.logoarea}>
                <Logo/>
            </View>
            <Form/>
            <Button
                title="Go to User Profile"
                onPress={() => this.props.navigation.navigate('User')}
            />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'skyblue',
    },
    
    logoarea: {
       flex: 2,
    }

});

export default LoginScreen
