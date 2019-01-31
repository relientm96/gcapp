import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image} from 'react-native';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
      };
    }

    render(){
        return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/transparentcoah.png')}></Image>

            <View style={styles.textinputcontainer}>
                <TextInput 
                    style={styles.textInput}
                    placeholder={'Email'} 
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    /> 
                <TextInput 
                    style={styles.textInput}
                    placeholder={'Password'} 
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
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

    logo: {
        width: 150,
        height: 120,
        padding: 10,
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
        marginTop: 50,
    }

});

export default Form;
