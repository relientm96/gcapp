import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

class Form extends React.Component {
    render(){
        return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} placeholder="Email"> </TextInput>
            <TextInput style={styles.textInput} placeholder="Password"> </TextInput>
        </View>
        );
    }
}

const styles = StyleSheet.create({

  container: {
      flex: 1,
  },

  textInput: {
      width: 300,
      height:30,
  }

});

export default Form;
