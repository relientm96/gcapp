import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';

class UserProfile extends React.Component {

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
      };

    render(){
        return (
        <View style={styles.container}>
            <Text>I am the user profile</Text>
            <Button title="Actually, sign me out" onPress={this._signOutAsync} />
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
