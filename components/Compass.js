import React, {Component,} from 'react';
import {Image, ImageBackground, StyleSheet,Button,Platform,PermissionsAndroid,SafeAreaView, Text,TouchableOpacity, View} from 'react-native';
import CompassHeading from 'react-native-compass-heading';
import Geolocation from 'react-native-geolocation-service';


class Compass extends Component {
 
  
    state = {
    compassHeading: 0,
    qiblad: 0,
    
    location: null

  };
  
  componentDidMount() {
    this.getLocation();
    const degree_update_rate = 3;

    CompassHeading.start(degree_update_rate, degree => {
      this.setState({compassHeading: degree});
    });

    return () => {
      CompassHeading.stop();
    };
  }

  calculate = (latitude, longitude) => {
    const PI = Math.PI;
    let latk = (21.4225 * PI) / 180.0;
    let longk = (39.8264 * PI) / 180.0;
    let phi = (latitude * PI) / 180.0;
    let lambda = (longitude * PI) / 180.0;
    let qiblad =
      (180.0 / PI) *
      Math.atan2(
        Math.sin(longk - lambda),
        Math.cos(phi) * Math.tan(latk) -
          Math.sin(phi) * Math.cos(longk - lambda),
      );
    this.setState({qiblad});
   
    
  };

  getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        console.log('Latitude: ',latitude,'Longitude: ', longitude);
       /*  this.setState({latitude:latitude,longitude:longitude});
        this.setState((latitude, longitude) => {
          return {
            latitude:latitude,longitude:longitude
          }
        }); */
       
      
        this.calculate(latitude, longitude);
      },
      error => {
        
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
    

  };
  
	findCoordinates = () => {
		Geolocation.getCurrentPosition(
			position => {
				const location = JSON.stringify(position);

				this.setState({  location });
			},
			error => Alert.alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
	};

   render() {
    return (
      <View style={{backgroundColor:'#f0f5da',flex:1}}>
        <Text style={{
              alignItems: 'center',
              justifyContent: 'center',color:'#011f4d',top:'5%',textAlign:'center',
              fontWeight:'bold',fontSize:40}}>Compass</Text>
               
        <ImageBackground
          source={require('..//assets/compas.png')}
          style={[
            styles.image,{justifyContent:'center',alignItems:'center',top:'8%'},
            {transform: [{rotate: `${360 - this.state.compassHeading}deg`}]}, ]}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              transform: [{rotate: `${this.state.qiblad}deg`}],
              
            }}>
            <Image
              source={require('..//assets/arrow5.png')}
              style={{marginBottom: '45%', resizeMode: 'contain', flex: 0.7,tintColor:'#011f4d'}}
            />
           
          </View>
         
        </ImageBackground>

       
        <View>      
       <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center'
       , backgroundColor: '#898a74', borderRadius: 40,width:'60%',left:'20%',top:'100%'}} onPress={this.findCoordinates}>
         <Text style={styles.button}>
           Get Location
         </Text>
         
       </TouchableOpacity>
      
        <Text style={{color:'#011f4d',fontWeight:'bold',textAlign:'center',top:'100%'}} > {this.state.location}</Text>
     </View>

      </View>
       
      
      
      
    );
  }
}

export default Compass;

const styles = StyleSheet.create({
  image: {width: '90%', flex: 0.5, resizeMode: 'contain', alignSelf: 'center'},
  container: {backgroundColor: 'rgba(255, 99, 71, 0.3)', flex: 1},

button: {
  padding: 10,
  borderRadius: 10,
  fontSize: 20,
  fontWeight:'bold',
  color: 'white',
  width:'70%',
  textAlign:'center'
  
},
welcome: {
  fontSize: 20,
  textAlign: 'center',
  margin: 10
},
boldText: {
  fontSize: 25,
  color: 'red',
  marginVertical: 16,
},

})