import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

class LoginScreen extends React.Component {
    render(){
        return (
        <View style={styles.container}>
            <Text>Login Page</Text>
            <Button
                title="Go to User Profile"
                onPress={() => this.props.navigation.navigate('User')}
            />
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
