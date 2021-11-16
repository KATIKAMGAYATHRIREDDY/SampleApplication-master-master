import React, { Component } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
//import Carousel from 'react-native-snap-carousel';
import configre from '../config/configre';
//import LinearGradient from 'react-native-linear-gradient';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class GetNews extends Component {
  state = {
    news: [],
  };

  componentDidMount() {
    this.props.navigation.setOptions({
      title: this.props.route.params.category,
    });

    fetch(
      `https://newsapi.org/v2/top-headlines?category=${this.props.route.params.category}&country=in&apiKey=${configre.API_KEY}`,
      
    )
      .then(res => res.json())
      .then(response => {
        this.setState({

          news: response.articles,
        });
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={{ alignItems: 'center',backgroundColor:'#dcdcdc'}}>
        {/* <LinearGradient colors={['#50884A','#F7EDED']} style={styles1.linearGradient}/> */}
        {this.state.news.length === 0 ? (
          <ActivityIndicator
            style={{
              marginTop:'10%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            size="large"
            color="#192924"
          />
        ) : (
          <ScrollView
            style={{
              display: 'flex',marginTop:"7%"
            }}>
            {this.state.news.map((news, index) =>
              news.urlToImage ? (


                <View
                  style={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor:'#dce8e0',
                    borderRadius: 20,
                    shadowColor:'#191970',
                    elevation:3,
                    width: deviceWidth-1,
                    borderWidth: 2,
                    borderColor: '#adc9b7',
                    height: deviceHeight / 3,
                    marginVertical: 7,
                    

                  }}>

                  <Text
                    style={{
                      fontSize: 17,
                      height: '20%',
                      width: '98%',
                     
                      borderWidth: 0,
                      borderColor: 'black',
                      paddingLeft: 10,
                      paddingTop: 5,
                      fontWeight: 'bold',
                      color: '#192924'

                    }}>
                    {news.title}
                  </Text>
                  <Image
                    source={{ uri: `${news.urlToImage}` }}
                    style={{marginTop:'5%', height: '71%', width: deviceWidth/2, borderRadius: 20,right:'24%' }}
                  />
                  
                  <Text
                    style={{
                      bottom:'69%',
                      left:'25%',
                      fontSize: 15,
                      width: deviceWidth/2,
                      borderWidth: 0,
                      borderColor: 'black',
                      height: '65%',
                      paddingLeft: 10,
                      color:'#4a5405',
                      

                    }}>
                    {news.description}
                    <TouchableOpacity 
                      key={index}
                      onPress={() =>
                        this.props.navigation.navigate('WebView', {
                          url: news.url,
                        })
                      }>
                        
                      <Text style={{
                        fontSize: 16,
                        top: 4,
                        fontWeight: 'bold',
                        paddingLeft: 5,
                        color: '#476921',
                      }} >Read More...</Text>
                    </TouchableOpacity>
                  </Text>

                </View>

              ) : null,
            )}
          </ScrollView>
        )}

      </View>
    );
  }
}

export default GetNews;