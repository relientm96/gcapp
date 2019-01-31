import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

class Form extends React.Component {
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
    }

});

export default Form;
