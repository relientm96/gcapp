import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import MyFooter from '../components/myFooter'

class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }  

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });
        this.setState({ loading: false });
    }

    render(){

        if (this.state.loading) {
            return <Expo.AppLoading />;
        }

        return (

        <View style={{backgroundColor:'skyblue'}}>

            <Text> Main </Text>

        </View>

        );
    }

}


export default MainScreen
