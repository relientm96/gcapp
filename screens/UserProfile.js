import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class UserProfile extends React.Component {
    render(){
        return (
        <View style={styles.container}>
            <Text>I am the user profile</Text>
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

export default UserProfile
