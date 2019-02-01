import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, KeyboardAvoidingView, AsyncStorage } from 'react-native';

import Form from '../components/Form';

class LoginScreen extends React.Component {

    static navigationOptions = {
        header: null,
        title: 'Login',
    };

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
      };

    render(){
        return (
        <View style={styles.container}>
            <KeyboardAvoidingView style={styles.formContainer}>
                <Form/>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={this._signInAsync}    
                    >            
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <View style={styles.signupTextContainer}>
                    <Text style={{color: 'white', letterSpacing: 0.8}}>Dont have an account yet? <Text style={{color:'steelblue'}}>SignUp!</Text> </Text>
                </View>
            </KeyboardAvoidingView> 
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
        marginTop: 5,
    },

    formContainer: {
        flex: 2,
        marginTop: 100,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
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
