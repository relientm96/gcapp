import React from 'react';
import { Text, View, Image, SafeAreaView, ScrollView} from 'react-native';

class PrayerDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prayertitle: this.props.navigation.state.params.prayertitle,
            author: this.props.navigation.state.params.author,
            prayerImage: this.props.navigation.state.params.prayerImage,
            description: this.props.navigation.state.params.description
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

                <View style={{padding: 5, flex:2}}>
                    <Image source={{ uri: this.state.prayerImage }} style={{height:200}} />
                    <View style={{paddingTop: 10, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontWeight: '700', fontSize: 20}}>
                            {this.state.author}
                        </Text>
                    </View>
                </View>
                
                <View style={{flex:2 , paddingBottom: 20}}>
                    <ScrollView style={{padding:20, flex:1}}>
                        <Text style={{fontSize: 18}}>{this.state.description}</Text>
                    </ScrollView>
                </View>
           

            </View>

        </SafeAreaView>
        );
    }

}


export default PrayerDetail
