import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { withNavigation } from 'react-navigation';

import { Icon, Button, Footer, FooterTab} from 'native-base';

class MyFooter extends React.Component {

    render(){       
        return (

            <FooterTab style={{backgroundColor:'steelblue'}}>
                <Button vertical onPress={this.goMainPageHandler}>
                    <Icon name="home" />
                    <Text>Home</Text>
                </Button>
                <Button vertical>
                    <Icon name="calendar" />
                    <Text>Events</Text>
                </Button>
                <Button vertical>
                    <Icon active name="hand" />
                    <Text>Prayer</Text>
                </Button>
                <Button vertical>
                    <Icon name="people" />
                    <Text>Members</Text>
                </Button>
                <Button vertical onPress={this.goProfileHandler}>
                    <Icon name="person" />
                    <Text>Profile</Text>
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
