import React from 'react'
import {
  Text,
  View,
  StyleSheet
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

  render(){
    return (
      <Swiper style={styles.wrapper} showsButtons>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    );
  }

}

const styles = {
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
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
  }
}

export default EventSwiper;