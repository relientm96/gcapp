import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createStackNavigator, createAppNavigator} from 'react-navigation';

class UserProfile extends React.Component {
    render(){
        return (
        <View style={styles.container}>
            <Text>RENDERING</Text>
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
