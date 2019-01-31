import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

import Form from '../components/Form';

class LoginScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };

    render(){
        return (
        <View style={styles.container}>

        <View style={styles.formContainer}>
            <Form/>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => this.props.navigation.navigate('User')}    
                >            
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View> 
            <View style={styles.signupTextContainer}>
                <Text style={{color: 'white'}}>Dont have an account yet? <Text style={{color:'steelblue'}}>SignUp!</Text> </Text>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'skyblue',
    },

    signupTextContainer: {
        flex: 1,
        flexDirection: 'column',
    },

    formContainer: {
        flex: 1,
        marginTop: 100,
        flexDirection: 'column',
        alignItems: 'center',
    },

    button: {
        marginTop:100,
        paddingTop: 10,
        width: 250,
        height: 40,
        borderRadius: 25,
        backgroundColor: 'rgba(0,0,0,0.7)',
        alignItems: 'center',
    },

    buttonText:{
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
    }

});

export default LoginScreen
