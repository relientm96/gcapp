import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity } from 'react-native';

class Form extends React.Component {

    static navigationOptions = {
        title: 'Welcome',
        header: { 
            visible:false 
        } 
    };

    render(){
        return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/transparentcoah.png')}></Image>
            <TextInput 
                style={styles.textInput}
                placeholder={'Email'} 
                underlineColorAndroid='transparent'
                /> 
            <TextInput 
                style={styles.textInput}
                placeholder={'Password'} 
                underlineColorAndroid='transparent'
                /> 
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    
    container: {
      alignItems: 'center',
      padding: 10,
      marginTop: 5,
    },

    logo: {
        width: 120,
        height: 120,
    },

    textInput: {
      marginTop: 8,
      width: 250,
      height: 40,
      fontSize: 15,
      color: 'rgba(255,255,255,0.35)',
      opacity: 0.5,
      borderRadius: 25,
      backgroundColor: 'rgba(0,0,0,0.7)',
      paddingLeft: 10,
    },

    button: {
        marginTop: 10,
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

export default Form;
