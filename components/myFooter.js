import React from 'react';
import { StyleSheet, Text} from 'react-native';
import { withNavigation } from 'react-navigation';

import { Icon, Button, FooterTab} from 'native-base';

class MyFooter extends React.Component {

    render(){       
        return (

            <FooterTab style={{backgroundColor:'steelblue'}}>
                <Button vertical onPress={this.goMainPageHandler}>
                    <Icon name="home" />
                    <Text style={{color:'#ffffff'}}>Home</Text>
                </Button>
                <Button vertical>
                    <Icon name="calendar" />
                    <Text style={{color:'#ffffff'}}>Events</Text>
                </Button>
                <Button vertical>
                    <Icon active name="hand" />
                    <Text style={{color:'#ffffff'}}>Prayer</Text>
                </Button>
                <Button vertical>
                    <Icon name="people" />
                    <Text style={{color:'#ffffff'}}>Members</Text>
                </Button>
                <Button vertical onPress={this.goProfileHandler}>
                    <Icon name="person" />
                    <Text style={{color:'#ffffff'}}>Profile</Text>
                </Button>
            </FooterTab>

        );
    }

    goProfileHandler = () => {
        this.props.navigation.navigate('User');
      };

    goMainPageHandler = () => {
        this.props.navigation.navigate('Main');
    };
}

export default withNavigation(MyFooter)
