import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MainScreen extends React.Component {
    render(){
        return (
        <View style={styles.container}>
            <Text>Main Screen Lives Here</Text>
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

export default MainScreen
