import React from 'react';
import { StyleSheet, View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity, TextInput, Platform, StatusBar, Keyboard} from 'react-native';
import { ListItem, SearchBar, Icon, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class PrayerList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data: [],
            loading: false,
            query: '',
        };
    };

    componentWillMount(){
        this.startHeaderHeight = 80;
        if(Platform.OS == 'android'){
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    componentDidMount() {
        console.log("Prayer List Mounted","[ComponentDidMount Method from PrayerList]");
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
                    console.log("Prayer " + key + " has value: " + responseJSON[key].author + " inserted!");
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

    clearSearch = () => {
        console.log("Clear Search");
        this.setState({
            query:''
        })
    }

    renderHeader(){
        return (

            <View style={{ 
                height:80, 
                backgroundColor: 'white',
                paddingHorizontal: 5, 
                borderBottomWidth:1, 
                borderBottomColor: '#dddddd', 
                justifyContent: 'center',
                }}>
                <View style={{
                    flexDirection: 'row', 
                    height: 50,
                    padding: 5, 
                    backgroundColor: 'white', 
                    marginHorizontal: 20, 
                    shadowOffset:{width:0,height:0},
                    elevation:1,
                    alignItems: 'center',
                    shadowOpacity: 0.2,
                    }}>  
                    <Icon name="ios-search" type="ionicon" size={20}/>
                    <TextInput
                        placeholder="Search Prayers"
                        placeholderTextColor="grey"
                        underlineColorAndroid="transparent"
                        style={{flex:1, fontWeight: '700', backgroundColor:'white', marginLeft: 15}}
                        onChangeText={(query) => this.setState({query})}
                        value={this.state.query}
                    />
                    <Button
                        icon={
                            <Icon
                                name="x"
                                type="feather"
                                size={20}
                            />
                        }
                        type="clear"
                        onPress={this.clearSearch}
                    />
                </View>
            </View>
    
        );
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
        
        if(!this.state.loading){
            return (

                <View style={{flex:1}}>
                    <View>
                        {this.renderHeader()}
                    </View>
                     
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => (
    
                            <TouchableOpacity style={{padding:5}}
                                onPress={() => this.props.navigation.navigate('DetailScreen',{ 
                                    prayertitle: item.title, 
                                    author: item.author,
                                    prayerImage: item.imageLink
                                    })}>
                                <ListItem
                                style={{backgroundColor:this.state.isSearchBarFocused? 'rgba(0,0,0,0.3)': 'white' }}
                                title={item.title}
                                subtitle={item.author}
                                leftAvatar={<Image source={{ uri: item.imageLink }} style={{borderRadius:30, height:50, width:50 }} />}
                                rightIcon={<Icon name='chevron-right' type='material-community'/>}
                                />
                            </TouchableOpacity>
    
                        )}
                        keyExtractor={item => item.author}
                        ItemSeparatorComponent={this.renderSeperator}
                        ListFooterComponent={this.renderFooter}
                        keyExtractor={item => item.title}
                        navigation={this.props.navigation}
                    />
                
                </View>
            );
        }

        else {
            return (
            <View>
                <View style={{flex:1, marginTop:100, justifyContent:'center', alignItems:'center'}}>
                    <ActivityIndicator size="large"/>
                </View>
            </View>
            );
        }

    }
}

export default withNavigation(PrayerList)


