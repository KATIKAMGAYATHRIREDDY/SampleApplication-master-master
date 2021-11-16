import React,{useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput} from 'react-native';

class AddItems extends React.Component{

    constructor(props) {
        super(props)
     this.state = {
        category:''

    }
  }

  static navigationOptions = {
    title: 'Expense',

    
};
render(){
    


  const {navigate} = this.props.navigation;
  //const [category] = useState('AboutReact');
  return(
    <ScrollView style={styles.container}>
    <View style={{
      height:1000,
      width:'100%',
      backgroundColor:'#f0f5da',
      marginTop:100,
      borderTopLeftRadius:40,
      borderTopRightRadius:40,
    }}>
      <View style={{flexDirection:'row', padding:20, alignItems:'center'}}>
        <TouchableOpacity onPress={() => navigate('Expense', {name: 'Expense'})}>
            
          <Image 
          resizeMode='contain'
          style={{height:20, width:20, tintColor:"#3a3d2d"}}
          source={require('../assets/exit.png')} />
        </TouchableOpacity>
        <Text style={{
          fontSize:25,
          fontWeight:'700',
          marginLeft:70,color:'#3e4713'
        }}>Add Transaction</Text>
      </View>

      <View style={{flexDirection:'row', padding:30}}>
        <View style={{
          height:40, 
          width:70,
          backgroundColor: '#d7e3a3',
          borderRadius:20,
          alignItems:'center',
          justifyContent:'center',
        }}>
          <Text style={{
            color:'#3e4713',
            fontSize:20,
            fontWeight:'bold',
          }}>Rs</Text>
        </View>
        <TextInput
        placeholder='amount spent'
        placeholderTextColor='#7f875b'
        keyboardType='numeric'
        style={{
          fontSize:20,
          marginLeft:10,
          padding:10,
          borderBottomWidth:1.5,
          borderBottomColor:'#000',
          bottom:"5%"
        }}
        >
        </TextInput>
      </View>

      <View style={{flexDirection:'row', 
          justifyContent:'space-around',
          alignItems:'center',
          marginHorizontal:30,
          paddingTop:10,
          }}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={{
              height:70,
              width:70,
              borderRadius:100,
              alignItems:'center',
              justifyContent:'center',
            }}>
               {/* <Image 
              resizeMode='contain'
              style={{height:50, width:50}} 
              source={require('../assets/food.png')} /> */}
            </View>
            <View>
            <TextInput 
             placeholder='Enter Category '
             placeholderTextColor='#7f875b'
            style={{
              fontSize:20,
              fontWeight:'bold',
              bottom:'20%',
              right:'13%'
            }}
            onChangeText={(text) => { this.setState({ category: text }) }}/>
            <View style={{
              borderBottomWidth:1.5, 
              width:'120%', 
             bottom:'20%',
             right:'13%',
              opacity:0.4,
              }}></View>
            </View>
            
            </View>
            <TouchableOpacity>
            <Image 
            resizeMode='contain'
            style={{height:20, width:20,tintColor:'#7f875b',bottom:'10%'}}
            source={require('../assets/arrow.png')} />
            </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row', 
          justifyContent:'space-between',
          alignItems:'center',
          marginHorizontal:30,
          paddingTop:30,
          }}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={{
              height:70,
              width:70,
              borderRadius:100,
              alignItems:'center',
              justifyContent:'center',
            }}>
              {/* <Image 
              resizeMode='contain'
              style={{height:40, width:40}}
              source={require('../assets/note.png')} /> */}
            </View>
            <View>
            <TextInput
        placeholder='Note'
        placeholderTextColor='#7f875b'
        keyboardType='numeric'
        style={{
            bottom:'40%',
          fontSize:20,
          marginLeft:10,
          padding:10,
          borderBottomWidth:1.5,
          borderBottomColor:'#000'
        }}
        >
        </TextInput>
            </View>
            <TouchableOpacity style={{ height:40, 
          width:70,
          backgroundColor: '#d7e3a3',
          borderRadius:20,
          alignItems:'center',
          justifyContent:'center',
        top:'30%'
    }}
            // onPress={() => navigate('Expense', {name: 'Expense'})}
         /*  onPress={() =>{  this.props.navigation.navigate('Expense', {  
                category_add: this.state.category })  
          }  } */
          onPress={() =>
           {this.props. navigation.navigate('Expense', {
              /* category_add: this.state.category, */
            })
          }}
            // onChangeText={(text) => { this.setState({ category: text }) }}
            >
                <Text style={{color:'#3e4713',
            fontSize:20,
            fontWeight:'bold',}}>Add</Text>
            </TouchableOpacity>
            </View>
          </View>
    </View> 
  </ScrollView>
  ); 
}
}
export default AddItems;
const styles = StyleSheet.create({
 container:{
  flex: 1,
  backgroundColor:'#d7e3a3'
 }
})














