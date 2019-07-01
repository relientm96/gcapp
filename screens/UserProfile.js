import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Image, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { ListItem, Icon, Button } from 'react-native-elements'

const list = [
    {
        title: "Member List",
        icon: "list",
        type: "feather"
    },
    {
        title: "My Bible Studies",
        icon: "book",
        type: "feather"
    },
    {
        title: "My Prayers",
        icon: "hand",
        type: "entypo"
    },
    {
        title: "Change Profile Picture",
        icon: "camera",
        type: "feather"
    },
]

class UserProfile extends React.Component {

    signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
      };

    renderSeperator = () => {
        return(
            <View
                style={{
                    height: 1,
                    width: '100%',
                    backgroundColor: '#CED0CE',
                }}
            />
        );
    };

    render(){       
        return (

            <SafeAreaView style={{ flex:1 }}>

                <View style={{height:getStatusBarHeight(), backgroundColor: 'steelblue'}}/> 

                <View style={{ padding:30, height: 150, flexDirection: 'row', alignItems: 'center'}}> 

                    <Image style={{height: 100, width: 100, borderRadius: 50}} source={{uri: 'https://image.flaticon.com/icons/png/512/17/17004.png'}}/>
                    <View style={{padding: 5, marginHorizontal: 20, }}>
                        <Text styles={{fontWeight: '600'}}> Matthew Yong </Text>
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

                <View style={{flex:2}}>
                    <FlatList
                        data={list}
                        renderItem={({ item }) => (
    
                            <TouchableOpacity style={{padding:5}}>
                                <ListItem
                                title={item.title}
                                leftIcon={<Icon name={item.icon} type={item.type}/>}
                                />
                            </TouchableOpacity>
    
                        )}
                        keyExtractor={item => item.author}
                        ItemSeparatorComponent={this.renderSeperator}
                        keyExtractor={item => item.title}
                        navigation={this.props.navigation}
                    />
                </View>
                    
            </SafeAreaView>


        );
    }
}

export default UserProfile
