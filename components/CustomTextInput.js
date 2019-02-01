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
      color: 'rgba(255,255,255,0.35)',
      opacity: 0.5,
      borderRadius: 25,
      backgroundColor: 'rgba(0,0,0,0.7)',
      paddingLeft: 10,
      
    },

});

