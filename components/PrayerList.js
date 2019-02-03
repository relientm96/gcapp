import React from 'react';
import { StyleSheet, View, Text, FlatList} from 'react-native';

import { List, ListItem } from 'react-native-elements'

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
            dataSource: [],
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
                dataSource: response
            })
            console.log(dataSource);
        })
        .catch(error => {
            this.setState({ error, loading: false});
        })
    }

    renderRow ({ item }) {
        return (
          <ListItem
            roundAvatar
            title={item.name}
            subtitle={item.email}
            avatar={{uri:item.photolink}}
          />
        )
      }

    render(){       
        return (

            <View>
            {   
                <FlatList
                data={this.state.dataSource}
                renderItem={this.renderRow}
                keyExtractor={item => item.name}
                />
            }
            </View>

        );
    }
}

export default PrayerList


