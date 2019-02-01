import React from 'react';
import { StyleSheet, View, Image} from 'react-native';

const Logo = () => {
    return (
         <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/transparentcoah.png')}></Image>
        </View>
    );
}

export default Logo;

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      marginTop: 5,
    },

    logo: {
        width: 160,
        height: 130,
        padding: 10,
    },

});

