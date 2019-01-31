import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class LoginScreen extends React.Component {
    render(){
        return (
        <View style={styles.container}>
            <Text>I am the login page</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default LoginScreen
