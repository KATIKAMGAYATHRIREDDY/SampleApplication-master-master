import { StackActions } from '@react-navigation/routers';
import React from 'react';
import { SafeAreaView, Text, View, Image, Button, TextInput, Dimensions,TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListScreen from './Lists';
//import { useState } from 'react/cjs/react.development';
import LinearGradient from 'react-native-linear-gradient';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


class Login extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            otp: '',
            userName:'',
            user_name:'',
            user_name1:'',
            un:''


        }

    }
   


        handleOtpNum=()=>{
            if(typeof this.state.otp !=='undefined'){
                var pattern = new RegExp(/^[0-9\b]+$/);
                 if(!pattern.test(this.state.otp)){
               
                    Alert.alert('Invalid Input!', 'Please enter only numbers', [
                        {text: 'Okay'}
                    ]);
                }
          else  if ( this.state.otp.length == 6  ) {
                this.props.navigation.navigate('Icons')
                
                    }
                  else{
                    Alert.alert('Invalid Input!', 'OTP should be six digit number', [
                        {text: 'Okay'}
                    ]); 
                  } 
                  
                }
            }
    
    

    render() {

        const { navigation } = this.props;  
        const user_name = this.props.route.params.userName; 

      const un =  JSON.stringify(user_name)

        return (
            <SafeAreaView style={{flex:1,justifyContent:'center',alignContent:'center'}}>
            <KeyboardAwareScrollView style={{backgroundColor:'white'}}>

<LinearGradient start={{x: 1, y: 1}} end={{x: 1, y: 0.25}} colors={[/* '#8a9a5b','#e6ffc9','#9ab973', */'#b2beb5','#f4f0ec','#b2beb5' ]} 
style={styles.linearGradient}>
           
                    <View >
                      
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '20%' }}>
                            <Image style={{ height: 100, width: 100 }} source={require('..//assets/logo_s1.png')} />
                            <Text style={{ fontSize: 24, marginTop: '5%', color: '#354230', fontWeight: 'bold' }}>DXC Technology</Text>
                            <Text style={{fontWeight:'bold',fontSize:20,justifyContent: 'center', alignItems: 'center',color:'black'}}>
                                Hi...{/* JSON.stringify(user_name) */ un}</Text>


                        </View>

                        <View style={{ margin: '20%', justifyContent: 'center', alignItems: 'center', fontSize: 100 }}>
                            <TextInput keyboardType='numeric' maxLength={6} style={{ borderBottomWidth: 1,fontWeight:'bold'
                            , width: '100%', borderColor: 'grey', margin: '5%' ,color:'#444c38'}} placeholder={'Enter OTP'}
                             placeholderTextColor='black'
                                onChangeText={(text) => { this.setState({ otp: text }) 
                        }}
                            />



                            <View style={{ width: '100%' }}>
                                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#738276'
                                , borderRadius: 40 }} onPress={() =>
                                    /* this.props.navigation.navigate('Icons') */this.handleOtpNum()
                                }>
                                    <Text style={styles.button}>
                                        Login
                                    </Text>
                                </TouchableOpacity>
                            </View>


                          

                        </View>

                       

                        
                    </View>
                </LinearGradient>

            </KeyboardAwareScrollView>
            </SafeAreaView>

        )
    }
}
export default Login

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 10,
        fontSize: 20,
        color: 'white',
        fontWeight:'bold'
    },
    linearGradient: {height: deviceHeight,width: '100%',},
    Icon_Style: {
      shadowRadius: 5,
      borderRadius: 20,
      backgroundColor: 'white',
      width: 80,
      height: 80,
    
  }


})