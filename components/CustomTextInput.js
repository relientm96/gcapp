import React from 'react';
import { StyleSheet, View, TextInput} from 'react-native';

export default class Greeting extends React.Component{

    constructor(props) {
        super(props);
        this.state = { 
            text: "",
        };
    }
    
    render(){
        return (
            <TextInput
                style={styles.textInput}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                underlineColorAndroid='transparent'
                placeholder={this.props.customPlaceHolder}
                keyboardType='email-address'
                placeholderTextColor='grey'
                selectionColor='white'
            />
            );
    }
}

const styles = StyleSheet.create({

    textInput: {
      marginTop: 1,
      marginBottom: 3,
      width: 250,
      height: 40,
      fontSize: 15,
      marginVertical: 10,
      color: 'white',
      opacity: 0.6,
      borderRadius: 25,
      backgroundColor: 'rgba(0,0,0,0.6)',
      paddingLeft: 10,
      
    },

});

