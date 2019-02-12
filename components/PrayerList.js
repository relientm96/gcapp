import React from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity, TextInput, Platform, StatusBar, Keyboard, RefreshControl} from 'react-native';
import { ListItem, Icon, Button, Badge, Avatar } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class PrayerList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data: [],
            loading: false,
            refreshing: false,
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

    //Sort Prayers In Chronological Order
    sortByDate(dataArray){

        console.log("Before Sort: " + dataArray);

        dataArray.sort(function(a, b){
            //Extract dates from dates string
            var month_a = parseInt(a.date.substring(3,5),10);
            var month_b = parseInt(b.date.substring(3,5),10);

            if( month_a != month_b){
               return month_b - month_a;
            }
            //Check for dates if same month
            else {
                //Extract dates from dates string
                var date_a = parseInt(a.date.substring(0,2),10);
                var date_b = parseInt(b.date.substring(0,2),10);
                return  date_b - date_a;
            }
        });
        console.log("After Sort: " + dataArray);
        return dataArray;
    }

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
                    date: responseJSON[key].date,
                    answered: responseJSON[key].answered,
                    description: responseJSON[key].description,
                    id: key
                })
            }

            this.sortByDate(dataArray);

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

    renderRightSide(item){

        return(
            <View>
               <Text style={{padding: 5, fontSize: 13, color:'rgba(0,0,0,0.5)'}}> {item.date.substring(0,5)} </Text>
               <Icon style={{padding: 5, color:'yellow'}} type="ionicon" name="ios-notifications" size={18}></Icon> 
            </View>

        );
    }

    onRefresh = () => {
        this.setState({refreshing: true});
        this.makeRequest().then(() => {
          this.setState({refreshing: false});
        });
    }

    render(){  
        
        if(!this.state.loading || this.state.refreshing){
            return (

                <View style={{flex:1}}>
                    <View>
                        {this.renderHeader()}
                    </View>
                     
                    <FlatList
                        data={this.state.data}
                        refreshControl={
                            <RefreshControl
                              refreshing={this.state.refreshing}
                              onRefresh={this.onRefresh}
                            />
                        }
                        renderItem={({ item }) => (
    
                            <TouchableOpacity style={{padding:5}}
                                onPress={() => this.props.navigation.navigate('DetailScreen',{ 
                                    prayertitle: item.title, 
                                    author: item.author,
                                    prayerImage: item.imageLink,
                                    description: item.description
                                    })}>
                                <ListItem
                                containerStyle={{ alignItems: 'center' }}
                                title={item.title}
                                subtitle={item.author}
                                leftAvatar={<Avatar rounded source={{uri: item.imageLink}} size="medium"/>}
                                rightSubtitle={this.renderRightSide(item)}
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


