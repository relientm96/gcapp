import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

import Logo from './Logo'

class Form extends React.Component {
    render(){
        return (
        <View style={styles.container}>
            <Logo></Logo>
            <View style={styles.textinputcontainer}>
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
        </View>
        );
    }
}

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      marginTop: 5,
    },

    textInput: {
      marginTop: 1,
      marginBottom: 3,
      width: 250,
      height: 40,
      fontSize: 15,
      marginVertical: 10,
      color: 'rgba(255,255,255,0.35)',
      opacity: 0.5,
      borderRadius: 25,
      backgroundColor: 'rgba(0,0,0,0.7)',
      paddingLeft: 10,
    },

    textinputcontainer: {
        marginTop: 5,
    }

});

export default Form;
