import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class UserProfile extends React.Component {

    static navigationOptions = {
        title: 'User',
    };

    _signOutAsync = async () => {
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
