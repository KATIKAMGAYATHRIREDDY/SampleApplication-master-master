import React, { Component } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Image, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NeomorphBlur } from 'react-native-neomorph-shadows';
const categories = ['Entertainment'];
const business = ['Business'];
const politics = ['Politics'];
const health = ['Health'];
const tech = ['Technology'];
const sport = ['Sports'];

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class Categories extends Component {
  state = {};
  render() {
    return (
      
      <View style={{  flexDirection: 'column',  elevation:2, backgroundColor:'white' }}>
<View>
        <LinearGradient start={{x: 0.5, y: 0.5}} end={{x: 0.5, y: 0}} colors={[/* '#8a9a5b','#e6ffc9','#9ab973', */'#d6dec1','#dcdcdc','#d6dec1' ]} style={styles2.linearGradient}/>
      </View>
        
          {categories.map((category, index) => (
            <TouchableOpacity style={{ margin:10, width:'15%',flexDirection:'column',height:'5%',backgroundColor:'white', shadowColor:'blue',  elevation:10, borderWidth:1, borderColor:'lightblue',
             bottom:'70%',left:'15%', borderRadius:20}}
              key={index}
              onPress={() =>
                this.props.navigation.navigate('GetNews', {
                  category,
                })
              }>
              <View >
              <NeomorphBlur
            darkShadowColor="#000066"
            style={styles2.Icon_Style}
                />
                <Image
                  style={{height:'80%',width:'80%', bottom:75, left:4, borderRadius:20}} resizeMode='contain' source={require('../assets/entertainment_png.png')}>
                </Image>
                <Text
                  style={{
                    bottom:'75%',
                    left:'15%',
                    fontWeight:'bold',
                    fontSize:12,
                    color:'#354230',fontWeight:'bold'
                  }}>
                  {/* {category} */}Movies
                </Text>
              </View>
            </TouchableOpacity>
          ))}

          {business.map((category, index) => (
            <TouchableOpacity style={{margin:10,width:'15%',flexDirection:'column',height:'5%',backgroundColor:'white', shadowColor:'blue',  elevation:10, borderWidth:1, borderColor:'lightblue',
            bottom:'77%', left:'37%', borderRadius:20 }}
              key={index}
              onPress={() =>
                this.props.navigation.navigate('GetNews', {
                  category,
                })
              }>
              <View>
              <NeomorphBlur
            darkShadowColor="#000066" 
  style={styles2.Icon_Style}
/>
                <Image
                  style={{height:'80%',width:'80%', bottom:75, left:4, borderRadius:10}} resizeMode='contain' source={require('../assets/b1.png')}>
                </Image>
                <Text
                  style={{
                    bottom:'75%',
                    left:'5%',
                    fontWeight:'bold',
                    fontSize:12,
                    color:'#354230',
                    
                  }}>
                  {category}
                </Text>
              </View>
            </TouchableOpacity>
          ))}

          {health.map((category, index) => (
            <TouchableOpacity style={{margin:10, width:'15%',flexDirection:'column',height:'5%',backgroundColor:'white', shadowColor:'blue',  elevation:10, borderWidth:1, borderColor:'lightblue',
            bottom:'84%', left:'59%', borderRadius:20 }}
              key={index}
              onPress={() =>
                this.props.navigation.navigate('GetNews', {
                  category,
                })
              }>
              <View>
              <NeomorphBlur
            darkShadowColor="#000066" // <- set this
           
  style={styles2.Icon_Style}
/>
                <Image
                  style={{height:'50%',width:'80%', bottom:52, left:4, borderRadius:10}}  source={require('../assets/doc.png')}>
                </Image>
                <Text
                  style={{
                    bottom:'45%',
                    left:'17%',
                    fontWeight:'bold',
                    fontSize:12,
                    color:'#354230',
                    
                  }}>
                  {category}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
 
       
          {tech.map((category, index) => (
            <TouchableOpacity style={{margin:10, width:'15%',flexDirection:'column',height:'5%',backgroundColor:'white', shadowColor:'blue',  elevation:10, borderWidth:1, borderColor:'lightblue',
            bottom:'81%', left:'15%', borderRadius:20 }}
              key={index}
              onPress={() =>
                this.props.navigation.navigate('GetNews', {
                  category,
                })
              }>
              <View>
              <NeomorphBlur
            darkShadowColor="#000066" // <- set this
           
  style={styles2.Icon_Style}
/>
                <Image
                  style={{height:'85%',width:'85%', bottom:80, left:4, borderRadius:20, borderColor:'black', borderWidth:0}} resizeMode='contain' source={require('../assets/tech.png')}>
                </Image>
                <Text
                  style={{
                    bottom:'80%',
                    left:'25%',
                    fontWeight:'bold',
                    fontSize:12,
                    color:'#354230',
                    
                  }}>
                 {/*  {category} */}Tech
                </Text>
              </View>
            </TouchableOpacity>
          ))}

          {sport.map((category, index) => (
            <TouchableOpacity style={{margin:10,width:'15%',flexDirection:'column',height:'5%',backgroundColor:'white', shadowColor:'blue',  elevation:10, borderWidth:1, borderColor:'lightblue',
            bottom:'88%', left:'37%', borderRadius:20 }}
              key={index}
              onPress={() =>
                this.props.navigation.navigate('GetNews', {
                  category,
                })
              }>
              <View>
              <NeomorphBlur
            darkShadowColor="#000066" // <- set this
            
  style={styles2.Icon_Style}
/>
                <Image
                  style={{height:'80%',width:'80%', bottom:70, left:5,borderRadius:20,  }} resizeMode='contain' source={require('../assets/sports.png')}>
                </Image>
                <Text
                  style={{
                    bottom:'75%',
                    left:'15%',
                    fontWeight:'bold',
                    fontSize:12,
                    color:'#354230',
                    
                  }}>
                  {category}
                </Text>
              </View>
            </TouchableOpacity>
          ))}

          

        </View>
      
    );
  }
}
const styles2 = StyleSheet.create({
  linearGradient: {height: deviceHeight,width: 411,},
  Icon_Style: {
    shadowRadius: 5,
    borderRadius: 20,
    backgroundColor: 'white',
    width: 57,
    height: 55,
  
}

  
});
export default Categories;