import React from 'react';
import { View, TouchableOpacity, Text, Image, StatusBar,StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from "react-native-animatable";
import { Neomorph, NeomorphBlur, Shadow } from 'react-native-neomorph-shadows';




const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
var currentDate = moment().format("DD/MM/YYYY");

var currentTime = moment().format('LTS');



const ListScreen = (props) => {

  return (

    <View style={{ flex: 10, flexDirection: 'column', backgroundColor: 'black' }}>




      <View style={{ flex: 1.8, shadowColor: 'blue', borderWidth: 1, borderColor: 'black' }}>
         <Image style={{ height: '150%', width: '100%', }} source={require('../assets/view.png')}>

        </Image> 
      {/*   <LinearGradient start={{ x: -0.5, y: 0.5 }} end={{ x: 1, y: 0 }} colors={['#6600ff', '#ccccff','#99ccff']} style={styles1.linearGradient} /> */}
       {/*  <Image style={{ height: 350, width: 420, }} source={require('../assets/BgImg.png')}>

        </Image> */}
        
      </View>

      <View style={{ flex: 4, borderRadius: 30}}>



        <View style={{ left: '10%', bottom: '15%', borderRadius: 25 }}>
      
        

          <Animatable.View animation="slideInUp" iterationCount={1} direction="alternate" style={{ elevation: 10, justifyContent: 'center', alignItems: 'center', marginTop: '5%', backgroundColor: '#123524', height: '48%', width: '60%', margin: 40, borderRadius: 20, borderColor: '#dda0dd', borderWidth: 0 }}>
         
          
        


            <Animatable.Text animation="slideInLeft" iterationCount={1} direction="alternate" style={{ fontWeight: 'bold', fontSize: 20, justifyContent: 'center', alignItems: 'center', marginTop: '5%', color: '#e7f0ce', bottom: 10 }}>  {currentDate}   </Animatable.Text>



            <Animatable.Text animation="slideInLeft" iterationCount={1} direction="alternate" style={{ fontWeight: 'bold', fontSize: 20, justifyContent: 'center', alignItems: 'center', marginTop: '5%', color: '#e7f0ce', bottom: 5 }}>  {currentTime}   </Animatable.Text>





          </Animatable.View>
         
          
        

        </View>
        <View style={{ flex: 10, flexDirection: 'row', borderWidth: 0, borderColor: 'red', borderRadius: 25, bottom: 100}} >
           <LinearGradient start={{ x: 0, y: 0.60 }} end={{ x: 1, y: 0.25 }}  colors={[ 'white','#738678'/* '#dcdcdc','#b2beb5' */ ]}  style={styles1.linearGradient} /> 

        </View>

        <TouchableOpacity style={{
          bottom: '35%', left: '20%', width:'15%', flexDirection: 'column', height:'12%',  elevation: 10, borderWidth: 0, borderColor: 'lightblue', 
          borderRadius: 20
        }}
          onPress={() =>
            props.navigation.navigate('News')
          } >
          <NeomorphBlur
            darkShadowColor="#003300" // <- set this
            lightShadowColor="#3344FF"
            style={styles1.Icon_Style}
          />
          <Image style={{ height:'80%', width: '80%', bottom: '85%', left:'8%', borderRadius: 20 }} source={require('../assets/newsTab.png')}></Image>
          <Text style={{ left: '18%', fontWeight: 'bold', color: '#013220', bottom: '70%',fontSize:13 }}>News</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => props.navigation.navigate('QR')}
          style={{
            bottom: '47%',left:'42%' , width: '15%', flexDirection: 'column', height:'12%', elevation: 10, borderWidth: 0, borderColor: 'lightblue',
            borderRadius: 20
          }}>
          <NeomorphBlur
            darkShadowColor="#003300" // <- set this
            lightShadowColor="#3344FF"
            style={styles1.Icon_Style}
          />
          <Image style={{ height:'80%', width: '80%', borderRadius: 20, bottom: '85%', left:'8%', }} source={require('../assets/qr.png')}></Image>
          <Text style={{ bottom:'70%', left: '3%', fontWeight: 'bold', color: '#013220',fontSize:13 }}>Scanner</Text>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('Weather')}
          style={{ width: '15%', height: '12%', shadowColor: 'white', elevation: 10, borderWidth: 0, borderColor: 'white', bottom:'59%', left: '64%', borderRadius: 20, }}>
          <NeomorphBlur
            darkShadowColor="#003300"
            lightShadowColor="#3344FF"
            style={styles1.Icon_Style}
          />
          <Image style={{ bottom: '95%', right: '5%',height:'100%', width: '100%', borderRadius: 20 }} source={require('../assets/weatherTab.png')}></Image>
          <Text style={{ bottom:'86%', left: '3%', fontWeight: 'bold', color: '#013220',fontSize:13 }}>Weather</Text>
        </TouchableOpacity>







        {/* <View style={{ fexDirection:'row', borderWidth:1, borderColor:'black', top:50, }}> */}
        <TouchableOpacity onPress={() => props.navigation.navigate('Compass')}
          style={{ width:'15%', flexDirection: 'column', height: '12%', shadowColor: 'white', elevation: 10, borderWidth: 0
          , borderColor: 'white', bottom: '48%', left: '20%', borderRadius: 20 }}>
          <NeomorphBlur
            darkShadowColor="#003300" // <- set this
            lightShadowColor="#3344FF"
            style={styles1.Icon_Style}
            
          />
          <Image style={{ height:'105%', width:'105%', borderRadius: 20, bottom:'100%', right:'5%'  }} source={require('../assets/compas.png')}></Image>
          
          <Text style={{ bottom:'96%', left: '3%', fontWeight: 'bold', color: '#013220',fontSize:13 }}>Compass</Text>
        </TouchableOpacity>

        
        <TouchableOpacity onPress={() => props.navigation.navigate('Expense')}
          style={{
            bottom: '60%', left: '42%',height:'10%',width:'14%',  flexDirection: 'column',  shadowColor: 'white', elevation: 10
            , borderWidth: 0, borderColor: 'white',
            borderRadius: 20
          }}>
          <NeomorphBlur
            darkShadowColor="#003300" // <- set this
            lightShadowColor="#3344FF"
            style={styles1.Icon_Style}
          />
          <Image style={{ height:'75%', width: '75%', borderRadius: 10, bottom: '95%', left: '8%' }} source={require('../assets/Expense5.png')}></Image>
          <Text style={{ bottom:35, left: 9, fontWeight: 'bold', color: '#013220',fontSize:13 }}>Expense Tracker</Text>

        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Notes')}
          style={{ width: '15%', height: '12%', shadowColor: 'white', elevation: 10, borderWidth: 0, borderColor: 'white', bottom:'70%', left: '64%', borderRadius: 20, }}>
          <NeomorphBlur
            darkShadowColor="#003300"
            lightShadowColor="#3344FF"
            style={styles1.Icon_Style}
          />
          <Image style={{ bottom: '85%', left: '15%',height:'70%', width: '70%', borderRadius: 1 }} source={require('../assets/Text.png')}></Image>
          <Text style={{ bottom:'68%', left: '15%', fontWeight: 'bold', color: '#013220',fontSize:13 }}>Notes</Text>
        </TouchableOpacity>


      </View>

    </View>


  );

}

const styles1 = StyleSheet.create({
  linearGradient: { borderRadius: 20, height: 495, width: deviceWidth, bottom: 170, },


  Image_Background_Style: {
    height: "90%",
    width: "50%",
    top: 40,
    left: 80,
    borderRadius: 20,
    
  },

  Icon_Style: {

    shadowRadius: 5,
    borderRadius: 20,
    backgroundColor: 'white',
    width: 57,
    height: 55,
    
    

  }


});
export default ListScreen;