import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Image, SafeAreaView} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { ThemeProvider, Icon, Button } from 'react-native-elements'

class UserProfile extends React.Component {

    signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
      };

    render(){       
        return (

            <SafeAreaView style={{ flex:1 }}>

                <View style={{height:getStatusBarHeight(), backgroundColor: 'steelblue'}}/> 

                <View style={{ flex:1 }}> 

                    <View style={{flex: 1, backgroundColor:'#ccd1d6', justifyContent:'center', alignItems:'center'}}>
                        <Image style={{height: 100, width: 100, borderRadius: 50}} source={{uri: 'https://scontent.fkul8-1.fna.fbcdn.net/v/t1.0-9/16196015_10154888128487744_6901111466535510271_n.png?_nc_cat=103&_nc_ht=scontent.fkul8-1.fna&oh=0b30d1f322e3ca702c6b211b910ed6ce&oe=5CF4CDE9'}}/>
                        <Text styles={{color:'ecf0f1'}}> Matthew Yong </Text>
                    </View>

                    <View style={{flex: 2, alignItems:'center', justifyContent:'center', backgroundColor:'white'}}>

                        <Button 
                            containerStyle={ {width: 120} }
                            icon={
                                <Icon
                                    name="exit-to-app"
                                    size={18}
                                    color="white"
                                />
                            }
                            onPress={this.signOutAsync}
                            title="Sign Out"
                        >
                        </Button>
                        
                    </View>

                </View>

            </SafeAreaView>


        );
    }
}

export default UserProfile
