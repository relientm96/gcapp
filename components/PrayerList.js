import React from 'react';
import { StyleSheet, View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity} from 'react-native';
import { ListItem, SearchBar, Icon, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class PrayerList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data: [],
            loading: false,
            query: ''
        };
    };

    componentDidMount() {
        console.log('component did mount');
        this.makeRequest();
    };

    async makeRequest() {
        const url = "https://react-native-gcapp.firebaseio.com/gc1/Prayers.json";
        this.state.loading = true;
        try {
          const response = await fetch(url);
          const responseJSON = await response.json();
            
          this.setState({ loading:true }, () => {
            //Process the data   
            var dataArray = [];

            for (const key in responseJSON){
                dataArray.push({
                    author: responseJSON[key].author,
                    title: responseJSON[key].title,
                    imageLink: responseJSON[key].imageLink,
                    answered: responseJSON[key].answered,
                    id: key
                })
                    console.log("Data " + key + " has value: " + responseJSON[key].author + " inserted!");
            }
            //Successful data fetching, update state of component
            this.setState({
                data: dataArray,
                loading: false
           });

          });

        } catch (error) {
          console.log("Prayer List - makeRequest() error", error);
        }
    };

    /*
    makeRequest = () => {
        const url = "https://react-native-gcapp.firebaseio.com/-LXstc3dEuV9Da-h3Ak2.json";
        this.setState({ loading: true });
        fetch(url)
        .then(response => response.json())
        .then(response => {
            this.setState({
                data: response.prayerList,
                fulldata: response.prayerList
            })
            console.log(response);
            console.log(this.state.loading);
        })
        .catch(error => {
            this.setState({ error, loading: false});
        })
    };*/

    toPrayerDetail = () => {
        console.log('Detail Screen');
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

    searchHandler = (text) => {
        this.setState({ query: text });
    };

    renderHeader = () => {
        console.log(this.state.query);
        return <SearchBar 
            placeholder="Search Prayers..."
            onChangeText={this.searchHandler}
            value={this.state.query}
            />
    };

    renderFooter = () =>{

        if(this.state.loading){
            return (
                <View style={{paddingVertical: 20, borderTopWidth: 1, borderTopColor: '#CED0CE'}}>
                    <ActivityIndicator animating size="large"/>
                </View>
            );
        }
        else{
            return(
                <View style={{paddingVertical: 20, borderTopWidth: 1, borderTopColor: '#CED0CE'}}>
                </View>
            )
        }
 
    };

    render(){       
        return (
            <View>
            {   
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => (

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailScreen')}>
                            <ListItem
                            title={item.title}
                            subtitle={item.author}
                            leftAvatar={<Image source={{ uri: item.imageLink }} style={{borderRadius:30, height:50, width:50 }} />}
                            rightIcon={<Icon name='chevron-right' type='material-community'/>}
                            />
                      </TouchableOpacity>

                    )}
                    keyExtractor={item => item.author}
                    ItemSeparatorComponent={this.renderSeperator}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                    keyExtractor={item => item.title}
                    navigation={this.props.navigation}
                />
            }
            </View>
        );
    }
}

export default withNavigation(PrayerList)


