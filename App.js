import * as React from 'react';
import { View, Text , Image, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import GetNews from './components/GetNews';
import WebViewComponent from './components/WebView';
import ListScreen from './components/Lists';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DescNews from './components/DescNews';
import Scanner from './components/QRCode';
import Weather from './components/WeatherScreen';
import Splashscreen from './components/SplashScreen';
import Login from './components/OtpLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GetOtp from './components/GetOtp';
import Expense from './components/ExpenseTracker';
import SignUp from './components/SignUp';
import SignUpOtp from './components/SignUpOtp';
import Compass from './components/Compass';
import AddItems from './components/Trail';
import Notes from './components/Notes';
import  Task  from './components/Task';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {

  return (
      
      <Tab.Navigator 
      
          screenOptions={  (  {  route }) => ({ 
              

            tabBarShowLabel: false,

            tabBarStyle: {

            position:'absolute',

            height: '7%',

            width:'90%',

            bottom:'1%',

            left:'5%',

           // right:20,

            elevation:30,
            shadowColor:'#262626',

            backgroundColor: "#808080",

            borderRadius:40
            },
            
            tabBarIcon: ({ focused }) => {
                  const tintColor = focused ? '#f8f8ff' : '#b2beb5';

                  switch (route.name) {
                      case "Dashboard":
                          return (
                              <Image
                                  source={require('./assets/home.png')}
                                  resizeMode="contain"
                                  style={{
                                      tintColor: tintColor,
                                      width: '80%',
                                      height: '80%'
                                  }}
                              />
                          );
                          
                      case "News":
                          return (
                              <Image
                                  source={require('./assets/newsTab.png')}
                                  resizeMode="contain"
                                  style={{
                                      tintColor: tintColor,
                                      width: '70%',
                                      height: '70%'
                                  }}
                              />
                          );

                          case "QR":
                          return (
                              <Image
                                  source={require('./assets/qr.png')}
                                  resizeMode="contain"
                                  style={{
                                      tintColor: tintColor,
                                      width:'70%',
                                      height: '70%'
                                  }}

                              />
                          );
                          
                          case "Weather":
                            return (
                                <Image
                                    source={require('./assets/weather.png')}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: '75%',
                                        height: '75%'
                                        
                                        
                                    }}
                                    
  
                                />
                            );
                            case "Expense":
                            return (
                                <Image
                                    source={require('./assets/Expense5.png')}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: '70%',
                                        height: '70%'
                                        
                                        
                                    }}
                                    
  
                                />
                            );


                      
                  }
              }
          })}

          
      >
        <Tab.Screen
              name="Dashboard"
              component={ListScreen}
              options={{headerShown:false}}
          />
          <Tab.Screen
              name="News"
              component={HomeScreen}
              //options={{headerShown:false}}
          />
          
          
          
          <Tab.Screen
              name="QR"
              component={Scanner}
              options={{headerShown:false}}
          />
          <Tab.Screen
              name="Weather"
              component={Weather}
              options={{headerShown:false}}
          />
           <Tab.Screen
              name="Expense"
              component={Expense}
              options={{headerShown:false}}
          />



      </Tab.Navigator>
  );
};


function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName='GetOtp' screenOptions={{headerShown: false }}>
         <Stack.Screen name='OtpLogin' component={Login} /> 
        <Stack.Screen name='GetOtp' component={GetOtp}   /> 
        <Stack.Screen name="Icons" component={Tabs} />
        <Stack.Screen name="News" component={HomeScreen} />
        <Stack.Screen name='QR' component={Scanner} /> 
        <Stack.Screen name='Weather' component={Weather} /> 
        <Stack.Screen name='GetNews' component={GetNews}></Stack.Screen>
        <Stack.Screen name='DescNews' component={DescNews}></Stack.Screen>
        <Stack.Screen name='WebView' component={WebViewComponent} />
        <Stack.Screen name='Expense' component={Expense} />
         <Stack.Screen name='SignUp' component={SignUp} /> 
         <Stack.Screen name='SignUpOtp' component={SignUpOtp} /> 
           <Stack.Screen name='Compass' component={Compass} />   
          <Stack.Screen name='AddItems' component={AddItems} /> 
           <Stack.Screen name='Notes' component={Notes} /> 
           <Stack.Screen name='Task' component={Task} />  

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;