import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator
} from 'react-native'

import Swiper from 'react-native-swiper'

class EventSwiper extends React.Component {
    constructor(props){
      super(props);

      this.state = {
          data: [],
          loading: false,
      };
  };

  componentDidMount() {
      console.log('swiper did mount');
      this.makeRequest();
  };

  async makeRequest() {

      const url = "https://react-native-gcapp.firebaseio.com/gc1/Events/.json";
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
                  date: responseJSON[key].date,
                  imageLink: responseJSON[key].imageLink,
                  startTime: responseJSON[key].startTime,
                  endTime: responseJSON[key].endTime,
                  title: responseJSON[key].title,
                  id: key
              })
              console.log("Event " + key + " has value: " + responseJSON[key].title + " inserted!");
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

  eventRender(){
    //For each object in this.state.data
    return this.state.data.map((item) => 
      <View style={styles.slide1}>
          <Image style={styles.image} source ={{uri: item.imageLink}}/>
      </View>
    );
  };

  eventDetails(){
    return this.state.data.map((item) => 
    <View style={{justifyContent:'center', alignItems:'center'}}>
        <Text> {item.title} </Text>
        <Text> {item.author} </Text>
        <Text> {item.date} </Text>
        <Text> {item.startTime} </Text>
        <Text> {item.endTime} </Text>
    </View>
    );
};
  render(){

    if(!this.state.loading){

      return (

        <View style={{ flex:1 }}>  
              
            <View style={{flex:3}}>
              <Swiper style={styles.wrapper} 
                showsButtons={true}
                loop={false}
                showPagination={false}
              >
                {this.eventRender()}
              </Swiper>
            </View>    
  
            <View style={{flex:2}}>
              {this.eventDetails()}    
            </View>
          
        </View>
  
      );

    }
    else {
      return (
        <View style={{alignItems:'center', justifyContent:'center'}}>
          <Text>Loading Content Please Wait...</Text> 
          <ActivityIndicator/>
        </View>

      );
    }

  }

}

const styles = {
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
,
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  image: {
    flex: 1
  }
}

export default EventSwiper;