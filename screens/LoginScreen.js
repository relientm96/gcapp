import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import Form from '../components/Form';

class LoginScreen extends React.Component {
    render(){
        return (
        <View style={styles.container}>
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
        backgroundColor: 'steelblue',
    },

});

export default LoginScreen
