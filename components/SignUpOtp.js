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

 



  
class SignUpOtp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {


            
           password: ' ',
            txnID: '',
            username:'',
            mobileNo:''
        }
    }



    getOTP=()=>{
      

        console.log("\n\ngetOTP function called")

       /*  if(this.state.username.length == 0 ||this.state.mobileNo.length == 0 ){
            Alert.alert('Invalid Input!', 'Name and Mobile Number fields cannot be empty.', [
                {text: 'Okay'}
            ]);
        }
       else if (  this.state.username.length == 0 ) {
            Alert.alert('Invalid Input!', 'Name field cannot be empty.', [
                {text: 'Okay'}
            ]);
            
        } 
        else if(this.state.mobileNo.length == 0  ){
            Alert.alert('Invalid Input!', 'Mobile Number field cannot be empty.', [
                {text: 'Okay'}
            ]);
        } */

        if(this.state.username.length == 0 || this.state.mobileNo.length == 0 ){
            Alert.alert('Invalid Input!', 'Name and Mobile Number fields cannot be empty.', [
                {text: 'Okay'}
            ]);
        }
      else  if(typeof this.state.mobileNo !== 'undefined'){
            var pattern = new RegExp(/^[0-9\b]+$/);
           
            if(!pattern.test(this.state.mobileNo)){
               
                Alert.alert('Invalid Input!', 'Please enter only number', [
                    {text: 'Okay'}
                ]);
            }
            else if(this.state.mobileNo.length !=10){
                
                Alert.alert('Invalid Input!', 'Please enter valid mobile number', [
                    {text: 'Okay'}
                ]);
            }
           
            else if(this.state.mobileNo.length == 0  ){
                Alert.alert('Invalid Input!', 'Mobile Number field cannot be empty.', [
                    {text: 'Okay'}
                ]);
            } }


        else if(typeof this.state.username !== 'undefined'){

            var pattern = new RegExp(/^[0-9\b]+$/);
            if(!pattern.test(this.state.mobileNo)){
               
                Alert.alert('Invalid Input!', 'Please enter only number', [
                    {text: 'Okay'}
                ]);
            }
            
            else if (  this.state.username.length == 0 ) {
                Alert.alert('Invalid Input!', 'Name field cannot be empty.', [
                    {text: 'Okay'}
                ]);
                
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

        







        
           /*    else{

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

     */
   /*  getOTP = () => {
        console.log("\n\ngetOTP function called")

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
       // this.props.navigation.navigate('OtpLogin')
        //this.props.navigation.navigate('Login') 
        // this.props.navigation.navigate('HomeStack',{screen:'Home'}) 
        this.props.navigation.navigate('OtpLogin', {  
            userName: this.state.username  
             
        })   

       
            if ( this.state.username.length == 0 || this.state.mobileNo.length == 0 ) {
                Alert.alert('Invalid Input!', 'Name and Mobile Number fields cannot be empty.', [
                    {text: 'Okay'}
                ]);
                return;
            }
        
    }
 */
    loginCheck = async () => {
        console.log("\n\nLogin Check function called")
        if (this.state.mobileNo > 0) {


            try {
                
                await AsyncStorage.setItem('phnno', this.state.mobileNo)
                console.log(this.state.mobileNo)

            } catch (error) {
                console(error)
            }

          

        }


    }

 
    render() {
        return (
            
                  

            <KeyboardAwareScrollView>
                
                   <LinearGradient start={{x: 1, y: 1}} end={{x: 1, y: 0.25}} colors={[/* '#8a9a5b','#e6ffc9','#9ab973', */'#9ab973','white','#9ab973' ]} style={styles.linearGradient}>
           
               {/*  <SafeAreaView style={{ flex: 1 }}> */}
                    <View style={{ flex: 1 }} >
                    
                
                        
                        
                        {/*  <View> 
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp')} >
                                <Text style={{marginTop:'5%', margin: '5%', color: '#354230', textAlign: 'right' ,fontWeight:'bold',right:'3%'}}>
                                    SignUp
                                </Text>
                            </TouchableOpacity>
                        </View>  */}
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '10%' }}>
                            <Image style={{ height: 100, width: 100 }} source={require('..//assets/logo_s1.png')} />
                            <Text style={{ fontSize: 24, marginTop: '5%', color: '#444c38', fontWeight: 'bold' }}>DXC Technology</Text>
                        </View>

                        <View style={{ margin: '20%', justifyContent: 'center', alignItems: 'center', fontSize: 100 ,marginTop:'20%'}}>
                        <TextInput keyboardType='email-address' maxLength={15} style={{borderBottomWidth:1,width:'100%',borderColor:'grey',margin:'5%',fontWeight:'bold'}}  placeholder={'Enter Name'} placeholderTextColor='black'
                //onChangeText={(text)=>{this.setState({username: text})}}
                onChangeText={text => this.setState({ username:text })}  />
                            <TextInput keyboardType='default' style={{ borderBottomWidth: 1, width: '100%', borderColor: 'grey', margin: '5%' ,fontWeight:'bold'}} 
                                onChangeText={(text) => { this.setState({ password: text }) 
                                /* console.log('\n\n' + this.state.mobileNo) */}}
                                
                                maxLength={8}
                                
                                placeholder={'Enter Password'} placeholderTextColor='black'
                                secureTextEntry={true}
                                />
                                <Text style={{fontWeight:'bold'}}>OR</Text>
                                  <TextInput keyboardType='numeric' style={{ borderBottomWidth: 1, width: '100%', borderColor: 'grey', margin: '5%' ,fontWeight:'bold'}} 
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


                            {/* <View  style={{width:'100%'}} >

                    <TouchableOpacity style={{justifyContent:'center', alignItems:'center',backgroundColor:'#353FD4',borderRadius:40, marginTop:'10%'}} onPress={this.props.navigation.dispatch(StackActions.replace('Home'))}>
                    <Text style={styles.button}>
                        Login
                    </Text>
                    </TouchableOpacity> 
                     
                    </View> */}

                            <TouchableOpacity >
                                <Text style={{ margin: '5%', color: '#354230', textAlign: 'center' }}>
                                    Forget Password?
                                </Text>
                            </TouchableOpacity>

                        </View>

                        <View>
                           {/*  <TouchableOpacity onPress={() => { this.props.navigation.dispatch(StackActions.replace('LoginTouch')) }}>
 */}
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
        )
    }
}
export default SignUpOtp

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

