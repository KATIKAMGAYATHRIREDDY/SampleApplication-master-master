import React from "react";
import { Component } from 'react';
import { Text, View, Dimensions , ActivityIndicator, ScrollView, TouchableOpacity, Image, ScrollViewBase} from "react-native";
import configre from "../config/configre";
import Categories from "./Categories";


const deviceWidth = Dimensions.get('window').width;

class HomeScreen extends Component {
  state = {
    news: [],
  };

  componentDidMount() {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${configre.API_KEY}`,
      
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
      <View style={{flex:5, backgroundColor:'#F5F5F5'}}>
        <Categories navigation={this.props.navigation} style={{flex:3}}/>
         {/* <TrendingNews navigation={this.props.navigation} style={{flex:2}} />  */}
        {/* <View style={{alignItems: 'center', flex:2}}>
          {this.state.news.length === 0 ? (
            <View
            style={{
              width: deviceWidth,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator color="black" size="large" />
          </View>
          ) : (
            <ScrollView showsVerticalScrollIndicator={true}>
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
                        backgroundColor: 'white',
                        borderRadius: 10,
                        elevation: 4,
                        
                        marginVertical: 2,
                      }}>
                      <Image
                        source={{uri: `${news.urlToImage}`}}
                        style={{height: 100, width: 100, borderRadius: 10}}
                      />
                      <Text
                        style={{
                          width: deviceWidth - 130,
                          paddingLeft: 10,
                          paddingTop: 5,
                        }}>
                        {news.title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ) : null,
              )}
            </ScrollView>
          )}
        </View>  */}
      </View>
    );
  }
}

export default HomeScreen;