import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, FlatList} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

class PrayerDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prayertitle: this.props.navigation.state.params.prayertitle,
            author: this.props.navigation.state.params.author,
            prayerImage: this.props.navigation.state.params.prayerImage
        }
    }  

    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('prayertitle', 'A Prayer Title')
        };
    };
    
    render(){

        return (
        <SafeAreaView style={{ flex:1, backgroundColor: 'white' }}>  

            <View style={{flex:1}}>

                <View>
                    <Image source={{ uri: this.state.prayerImage }} style={{height:200}} />
                </View>

                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontWeight: '700'}}>
                        {this.state.author}
                    </Text>
                </View>
                
                <ScrollView style={{padding:20, flex:1}}>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate libero elementum nisl vehicula, ut molestie nisi posuere. Curabitur ante mi, bibendum aliquam dolor egestas, viverra imperdiet libero. Phasellus tincidunt metus porta elementum dictum. Vestibulum eget lorem maximus, laoreet lacus nec, congue ex. Suspendisse suscipit ante sit amet fermentum fermentum. Morbi viverra nulla sit amet malesuada tempor. Sed congue tincidunt metus, vitae aliquet dui posuere id. Curabitur vulputate est in lorem blandit, et porttitor erat luctus. Nulla finibus massa lacus, id pulvinar tortor viverra id. Vivamus aliquet non nibh sit amet ornare. Aenean aliquam, diam tristique cursus ultrices, nisl est vulputate odio, vel finibus neque enim pretium nunc. Vestibulum eleifend libero nec arcu gravida tempor. Nullam felis ligula, pellentesque sed nibh et, laoreet euismod leo.</Text>
                </ScrollView>

            </View>

        </SafeAreaView>
        );
    }

}


export default PrayerDetail
