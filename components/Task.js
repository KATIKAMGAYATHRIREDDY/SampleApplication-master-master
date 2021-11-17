import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { useEffect,useState } from 'react';
import moment from 'moment';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView,Image, Alert } from 'react-native';
var currentDate =moment().format("MMM D,YYYY");  
//const [text, setText] = useState();
 
  //const [count,setCount]=useState();

//const[text,setText]=useState();
const Task = (props) => {
//  const [userText, setuserText] = useState();
const [taskItems, setTaskItems] = useState([]);

const getData=async()=>{
try{
  const userText = await AsyncStorage.getItem('text')
  if(userText!==null){
    console.log('useText:',userText)
    //setuserText(userText)
  }
}
catch(err){
  Alert.alert('Failed to Get Data');
}
}

useEffect(() => {
  getData();
 
});
/* const onChangeText=  userText  =>setText(userText)
const onSubmitEditing =()=>{
  if(!text)
    return 
    saveData(text)
    setText('')
  
} */
 const completeTask = (index) => {
  let itemsCopy = [...taskItems];
  itemsCopy.splice(index, 1);
  setTaskItems(itemsCopy)
}
 
  return (
   
    <KeyboardAvoidingView>

    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        
        <Text style={styles.itemText}>  {props.text} </Text>
        
      </View>
     
      <View style={{flexDirection:'row'}} ><Text style={{maxWidth: '80%',marginRight:'6%'}}>{currentDate}</Text> 
        <TouchableOpacity  onPress={()=> completeTask(index)}>
          <Image style={styles.image1} source={require('../assets/delete.png')}>
          </Image>
          </TouchableOpacity> 
         
         
        
         

          </View>
    
    </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#f2b08f',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
 

  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },

  image1:{
    width: 20,
    height: 20,
    // borderColor: '#55BCF6',
    // borderWidth: 2,
    // borderRadius: 5,
  }
});

export default Task;