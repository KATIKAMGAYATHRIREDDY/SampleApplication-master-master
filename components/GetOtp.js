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

 



  
class GetOtp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {


            
            mobileNo: ' ',
            txnID: '',
            username:''
        }
    }



    getOTP=()=>
    {
      

        console.log("\n\ngetOTP function called")

     

        if(this.state.username.length == 0 || this.state.mobileNo.length == 0 ){
            Alert.alert('Invalid Input!', 'Name or Mobile Number fields cannot be empty.', [
                {text: 'Okay'}
            ]);
        }
        else if (typeof this.state.username!== "undefined") 
{ var pattern = new RegExp(/^[a-zA-Z][a-zA-Z]*$/);
    if (!pattern.test(this.state.username)) { 
        Alert.alert('Invalid Input!', 'Please enter only alphabets', [
            {text: 'Okay'}
        ]);
        
         
    } 
    else{
        fetch('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                mobile: this.state.mobileNo
            })
        })
        .then(async (response) => {

            const data = await response.json()

            this.setState({ txnID: data.txnId })

            console.log("\n\nData from response :" + this.state.txnID)


        })
        .catch(error => console.log("Error from fetch : " + error))
        this.props.navigation.navigate('OtpLogin', {  
            userName: this.state.username })  
      }  
    }
    
       
       
             
                else  if(typeof this.state.mobileNo !== 'undefined'){
                    var pattern = new RegExp(/^[0-9\b]+$/);
                     if(this.state.mobileNo == 0  ){
                        Alert.alert('Invalid Input!', 'Mobile Number field cannot be empty.', [
                            {text: 'Okay'}
                        ]);
                    } 
                   
                  else  if(!pattern.test(this.state.mobileNo)){
                       
                        Alert.alert('Invalid Input!', 'Please enter only numbers', [
                            {text: 'Okay'}
                        ]);
                    }
                    else if(this.state.mobileNo.length !=10){
                        
                        Alert.alert('Invalid Input!', 'Please enter valid mobile number', [
                            {text: 'Okay'}
                        ]);
                    }
                   
                    
                    else{
        
                        fetch('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            mobile: this.state.mobileNo
                        })
                    })
        
                    .then(async (response) => {
        
                        const data = await response.json()
        
                        this.setState({ txnID: data.txnId })
        
                        console.log("\n\nData from response :" + this.state.txnID)
        
        
                    })
        
                    .catch(error => console.log("Error from fetch : " + error))
                        this.props.navigation.navigate('OtpLogin', {  
                            userName: this.state.username })  
                      }  
                    }    
                    else{
        
                        fetch('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            mobile: this.state.mobileNo
                        })
                    })
        
                    .then(async (response) => {
        
                        const data = await response.json()
        
                        this.setState({ txnID: data.txnId })
        
                        console.log("\n\nData from response :" + this.state.txnID)
        
        
                    })
        
                    .catch(error => console.log("Error from fetch : " + error))
                        this.props.navigation.navigate('OtpLogin', {  
                            userName: this.state.username })  
                      }  
                     
               
  
  
}
    render() {
        return (
            
                  <SafeAreaView style={{flex:1,justifyContent:'center',alignContent:'center'}}>

            <KeyboardAwareScrollView>
                
                   <LinearGradient start={{x: 1, y: 1}} end={{x: 1, y: 0.25}} colors={[/* '#8a9a5b','#e6ffc9','#9ab973', */'#d6dec1','white','#d6dec1' ]} style={styles.linearGradient}>
           
               {/*  <SafeAreaView style={{ flex: 1 }}> */}
                    <View  >
                    
                
                        
                        
                         <View> 
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp')} >
                                <Text style={{marginTop:'10%', color: '#354230', textAlign: 'right' ,fontWeight:'bold',right:'7%'}}>
                                    SignUp
                                </Text>
                            </TouchableOpacity>
                        </View> 
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '20%' }}>
                            <Image style={{ height: 100, width: 100 }} source={require('..//assets/logo_s1.png')} />
                            <Text style={{ fontSize: 24, marginTop: '5%', color: '#444c38', fontWeight: 'bold' }}>DXC Technology</Text>
                        </View>

                        <View style={{ margin: '20%', justifyContent: 'center', alignItems: 'center', fontSize: 100 }}>
                        <TextInput keyboardType='email-address' maxLength={15} style={{borderBottomWidth:1,width:'100%',borderColor:'grey',margin:'5%',fontWeight:'bold',color:'#444c38'}}  placeholder={'Enter Name'} placeholderTextColor='black'
                //onChangeText={(text)=>{this.setState({username: text})}}
                onChangeText={text => this.setState({ username:text })}  />
                            <TextInput keyboardType='numeric' style={{ borderBottomWidth: 1,color:'#444c38', width: '100%', borderColor: 'grey', margin: '5%' ,fontWeight:'bold'}} 
                                onChangeText={(text) => { this.setState({ mobileNo: text }) 
                                /* console.log('\n\n' + this.state.mobileNo) */}}
                                
                                maxLength={10}
                                
                                placeholder={'Enter Mobile Number'} placeholderTextColor='black'

                                
                                />
                            <View style={{ width: '100%' }}>
                                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#898a74', borderRadius: 40 }} onPress={() => { this.getOTP() }}>
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
                         
                            <TouchableOpacity 
        onPress = {touchIdAuth.bind(this)}
        >

                                <Text style={{ color: '#354230', textAlign: 'center',fontWeight:'bold' }}>
                                    Login with Touch ID
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



export default GetOtp

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

