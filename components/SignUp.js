import { StackActions } from '@react-navigation/routers'
import React, { Component } from 'react'
import { SafeAreaView, Text, View, Image, Button, TextInput, TouchableOpacity,Dimensions, StyleSheet,Alert } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AsyncStorage from '@react-native-async-storage/async-storage'
import TouchID from 'react-native-touch-id';
import LinearGradient from 'react-native-linear-gradient';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

/* const GetOtpHandle = (username,mobileNo)=>{
    if ( data.name.length == 0 || data.phnum.length == 0 ) {
        Alert.alert('Wrong Input!', 'Name or Mobile Number field cannot be empty.', [
            {text: 'Okay'}
        ]);
        return;
    }
} */

const optionalConfigObject = { 
    
    title: "Login with TouchID ", // Android
    color: "ffffff", // Android,
    fallbackLabel: "Show Passcode" // iOS (if empty, then label is hidden)
  }
  function touchIdAuth    (){
    TouchID.isSupported()
      .then(biometryType => {
        // Success code
        if (biometryType === 'FaceID') {
          console.log('FaceID is supported.');
        } else {
          console.log('TouchID is supported.');
          TouchID.authenticate("Use Your TouchId to Authenticate", optionalConfigObject)
            .then(success => {
              Alert.alert('Authenticated Successfully');
              //props.navigation.navigate('Icons')
              this.props.navigation.navigate('Icons')
            })
            .catch(error => {
              Alert.alert('Authentication Failed', error.toString());
            });
        }
      })
      .catch(error => {
        // Failure code
        console.log(error);
      });


      
    }

 



  
class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
           
            password: ' ',
            txnID: '',
            username:''
        }
    }

    validate=()=>{
       
        console.log("\n\ngetOTP function called")
        if ( this.state.username.length == 0 || this.state.password.length == 0 ) {
            Alert.alert('Invalid Input!', 'Username and Password fields cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }
              else{

              
            
                this.props.navigation.navigate('SignUpOtp', {  
                    userName: this.state.username })  
              }  
            }

    
  
    loginCheck = async () => {
        console.log("\n\nLogin Check function called")
        if (this.state.password > 0) {


            try {
                
                await AsyncStorage.setItem('phnno', this.state.password)
                console.log(this.state.password)

            } catch (error) {
                console(error)
            }

          

        }


    }

 
    render() {
        return (
            
               <SafeAreaView style={{flex:1,justifyContent:'center',alignContent:'center'}}>

            <KeyboardAwareScrollView>
                
                   <LinearGradient start={{x: 1, y: 1}} end={{x: 1, y: 0.25}} colors={['#f1f2ac','white','#f1f2ac' ]} style={styles.linearGradient}>
           
               {/*  <SafeAreaView style={{ flex: 1 }}> */}
                    <View style={{ flex: 1 }} >
                    
                
                        
                        
                         
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '20%' }}>
                            <Image style={{ height: 100, width: 100 }} source={require('..//assets/logo_s1.png')} />
                            <Text style={{ fontSize: 24, marginTop: '5%', color: '#828503', fontWeight: 'bold' }}>DXC Technology</Text>
                            <Text style={{ fontSize: 24, marginTop: '5%', color: 'black', fontWeight: 'bold' }}>...Welcome Back...</Text>
                        </View>

                        <View style={{ margin: '20%', justifyContent: 'center', alignItems: 'center', fontSize: 100 }}>
                        <TextInput keyboardType='email-address' maxLength={15} style={{borderBottomWidth:1,width:'100%',borderColor:'grey',fontWeight:'bold'}}  placeholder={'Enter Username'} placeholderTextColor='black'
                //onChangeText={(text)=>{this.setState({username: text})}}
                onChangeText={text => this.setState({ username:text })}     />
                            <TextInput  style={{ borderBottomWidth: 1, width: '100%', borderColor: 'grey', margin: '5%' ,fontWeight:'bold'}} 
                                onChangeText={(text) => { this.setState({ password: text }) 
                                /* console.log('\n\n' + this.state.mobileNo) */}}
                               // secureTextEntry={true}
                                maxLength={8}
                                
                                placeholder={'Enter Password'} placeholderTextColor='black'
                                />
                            <View style={{ width: '100%' }}>
                                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#b1b33d', borderRadius: 40 }} onPress={() => { this.validate() }}>
                                    <Text style={styles.button}>
                                        Get OTP
                                    </Text>
                                </TouchableOpacity>
                            </View>


                           

                            <TouchableOpacity >
                                <Text style={{ margin: '5%', color: '#354230', textAlign: 'center' }}>
                                    Forget Password?
                                </Text>
                            </TouchableOpacity>

                        </View>

                       

                        <View>

                        </View>
                        
                    
                    </View>
                {/* </SafeAreaView> */}
                </LinearGradient>

            </KeyboardAwareScrollView>
            </SafeAreaView>   
        )
    }
}
export default SignUp

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 10,
        fontSize: 20,
        fontWeight:'bold',
        color: 'white'
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

