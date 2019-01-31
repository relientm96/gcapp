import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

class Logo extends React.Component {
    render(){
        return (
        <View style={styles.container}>
            <Image style={{width:110, height:80}} source={require('../assets/transparentcoah.png')}></Image> 
            <Text style={styles.logoText}>Welcome to App</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoText: {
        marginVertical: 15,
        color: 'white'
    }
})

export default Logo;
