import React from 'react';
import { StyleSheet, View, Text, FlatList, Image, ActivityIndicator} from 'react-native';

import { List, ListItem, SearchBar } from 'react-native-elements'

const list = [
    {
      name: 'Prayer #1',
      avatar_url: "https://firebasestorage.googleapis.com/v0/b/gcapp-35747.appspot.com/o/profileImages%2Fmatthewyfy?alt=media&token=eb98b6e8-29d4-475e-98bd-a35bd2666be3",
      subtitle: 'Matthew Yong'
    },
    {
      name: 'Prayer #2',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Yong Chor Hon'
    },
]

class PrayerList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data: [],
            loading: false
        };

    }

    componentDidMount() {
        this.makeRequest();
    }

    makeRequest = () => {
        const url = "https://gcapp-35747.firebaseio.com/gc_members.json";
        this.setState({ loading: true });
        fetch(url)
        .then(response => response.json())
        .then(response => {
            this.setState({
                data: response
            })
            console.log(response);
        })
        .catch(error => {
            this.setState({ error, loading: false});
        })
    }

    renderRow ({ item }) {
        return (
          <ListItem
            title={item.name}
            subtitle={item.subtitle}
            leftAvatar={<Image source={{ uri: item.avatar_url }} style={{borderRadius:30, height:50, width:50 }} />}
            />
        )
    }
    
    renderSeperator = () => {
        return(
            <View
                style={{
                    height: 1,
                    width: '86%',
                    backgroundColor: '#CED0CE',
                    marginLeft: '14%'
                }}
            />
        );
    };

    renderHeader = () => {
        return <SearchBar placeholder="Search Prayers..."></SearchBar>
    };

    renderFooter = () =>{
        return (
            <View style={{paddingVertical: 20, borderTopWidth: 1, borderTopColor: '#CED0CE'}}>
                <ActivityIndicator animating size="large"/>
            </View>
        );
    };

    render(){       
        return (

            <View>
            {   
                <FlatList
                    data={list}
                    renderItem={this.renderRow}
                    keyExtractor={item => item.name}
                    ItemSeparatorComponent={this.renderSeperator}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                />
            }
            </View>

        );
    }
}

export default PrayerList


