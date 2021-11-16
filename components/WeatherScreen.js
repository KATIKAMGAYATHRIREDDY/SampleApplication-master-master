import React from "react"
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from "react-native"

const Dev_Height = Dimensions.get("window").height
const Dev_Width = Dimensions.get("window").width

//import Icon from "react-native-vector-icons/AntDesign"

export default class App extends React.Component{
  constructor(props){
    super(props);
      this.state ={
        data: [],
        isLoading: true,
        temp:"",
        city:"Shimoga",
        icon:"",
        city_display:"",
        desc: "",
        main:"",
        humidity:"",
        pressure:"",
        visiblity:"",
    }
    this.fetch_weather()
  }

  fetch_weather=()=> {
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+'&appid=77b4d13f9bf836993b4e6e893f64a5aa')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
        this.setState({ temp : (json.main.temp-273.15).toFixed(2)+" °C" })
        this.setState({ city_display : json.name })
        this.setState({ icon: json.weather[0].icon})
        this.setState({ desc : json.weather[0].description})
        this.setState({ main : json.weather[0].main})
        this.setState({ humidity : json.main.humidity+" %"})
        this.setState({ pressure : json.main.pressure+" hPa"})
        this.setState({ visibility : (json.visibility/1000).toFixed(2)+" Km"})
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }


  render(){
    return(
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor="#000"/>
      <ImageBackground source={require('..//assets/background.webp')} 
      style={styles.Image_Background_Style}>

        <View style={styles.Search_Box_View}>
          <TextInput placeholder="Search" placeholderTextColor="#FFF" style={styles.Search_Box} onChangeText={(text)=>this.setState({city : text})} />
            <TouchableOpacity style={styles.button_touch} onPress={this.fetch_weather}>
            <Image style={{height:'60%', width:'100%'}}   source={require('..//assets/search.png')}/>
            </TouchableOpacity>
          </View>

        <View style={styles.Weather_Box_Main}>
          <View style={styles.Weather_Holder_View}>
              <Image tintColor='#FFF' source={{uri:"http://openweathermap.org/img/wn/"+this.state.icon+"@2x.png",}} style={styles.Weather_Image}/>
              <View>
                <Text style={styles.temprature_text}>{this.state.temp}</Text>
                <Text style={styles.city_text}>{this.state.city_display}</Text>
              </View>
            </View>
        </View>

        <View style={styles.Info_Box_View}>
          <View style={styles.Info_Holder_Veiw}>
            <Text style={styles.Main_Weather_Text}>{this.state.main}</Text>
            <Text style={styles.description_text}>{this.state.desc}</Text>
            <Text style={styles.humidity_text}>Humidity : {this.state.humidity}</Text>
            <Text style={styles.other_text}>Pressure : {this.state.pressure}</Text>
            <Text style={styles.other_text}>Visibility : {this.state.visibility}</Text>
          </View>
        </View>
      </ImageBackground>
      
    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    height:Dev_Height,
    width: Dev_Width
  },
  Image_Background_Style:{
    height:"100%",
    width:"100%"
  },
  Search_Box_View:{
    height:"20%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row"
  },
  Search_Box:{
    height:"35%",
    width:"80%",
    borderColor:"#FFF",
    borderWidth:1,
    borderRadius:15,
    color:"#FFF",
    paddingHorizontal:15
  },
  button_touch:{
    marginLeft:"5%",
    height:"35%",
    width:"8%",
    justifyContent:"center",
    alignItems:"center"
  },
  Weather_Box_Main:{
    height:"30%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row"
  },
  Weather_Holder_View:{
    height:"80%",
    width:"90%",
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius:15,
    alignItems:"center",
    flexDirection:"row"
  },
  Weather_Image:{
    height:"80%",
    width:"50%"
  },
  temprature_text:{
    fontSize:30,
    color:"#FFF",
    marginLeft:"5%"
  },
  city_text:{
    fontSize:20,
    color:"#FFF",
    marginLeft:"5%",
    marginTop:"3%"
  },
  Info_Box_View:{
    height:"45%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center"
    
  },
  Info_Holder_Veiw:{
    height:"80%",
    width:"90%",
    backgroundColor: 'rgba(6, 46, 57, 0.7)',
    borderRadius:15
  },
  Main_Weather_Text:{
    fontSize:28,
    color:"white",
    marginLeft:"8%",
    marginTop:"8%",
    fontWeight:"bold"
  },
  description_text:{
    fontSize:20,
    color:"white",
    marginLeft:"8%",
    marginTop:"3%"
  },
  humidity_text:{
    fontSize:18,
    color:"white",
    marginLeft:"8%",
    marginTop:"5%"
  },
  other_text:{
    fontSize:18,
    color:"white",
    marginLeft:"8%",
    marginTop:"2%"
  }
})