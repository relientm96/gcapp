import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

import { ListItem } from 'react-native-elements'

const list = [
    {
      name: 'Prayer #1',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Matthew Yong'
    },
    {
      name: 'Prayer #2',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Yong Chor Hon'
    },
]

class PrayerList extends React.Component {

    render(){       
        return (

            <View>
            {
                list.map((l, i) => (
                <ListItem
                    key={i}
                    leftAvatar={{ source: { uri: l.avatar_url } }}
                    title={l.name}
                    subtitle={l.subtitle}
                />
                ))
            }
            </View>

        );
    }
}

export default PrayerList
