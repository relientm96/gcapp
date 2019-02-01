import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

import Logo from './Logo';
import CustomTextInput from './CustomTextInput';

class Form extends React.Component {
    render(){
        return (
        <View style={styles.container}>
            <Logo></Logo>
            <View style={styles.textinputcontainer}>
                <CustomTextInput 
                    customPlaceHolder="Email" 
                    /> 
                <CustomTextInput 
                    customPlaceHolder="Password" 
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

    textinputcontainer: {
        marginTop: 5,
    }

});

export default Form;
