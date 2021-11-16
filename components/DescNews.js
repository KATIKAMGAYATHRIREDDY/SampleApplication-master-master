  
import React, {Component} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import configre from '../config/configre';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class DescNews extends Component {
  state = {
    news: [],
  };

  componentDidMount() {
    this.props.navigation.setOptions({
      description: this.props.route.params.category,
    });

    fetch(
      `https://newsapi.org/v2/top-headlines?category=${this.props.route.params.category}&country=in&apiKey=${configre.API_KEY}`,
    )
      .then(res => res.json())
      .then(response => {
        this.setState({
            
          news: response.articles,
          
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
            {this.state.news.map((news, index) =>
              news.urlToImage ? (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    this.props.navigation.navigate('WebView', {
                      url: news.url,
                    })
                  }>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      backgroundColor: 'blue',
                      borderRadius: 10,
                      elevation: 4,
                      width: deviceWidth - 30,
                      marginVertical: 7,
                    }}>
                    <Image
                      source={{uri: `${news.urlToImage}`}}
                      style={{height: 100, width: 100, borderRadius: 10}}
                    />
                    {/* <Text

                      style={{
                        width: deviceWidth - 130,
                        paddingLeft: 10,
                        paddingTop: 5,
                      }}>
                      {news.description}
                    </Text> */}
                  </View>
                </TouchableOpacity>
              ) : null,
            )}
          </ScrollView>
     
   )
}
}

export default DescNews;