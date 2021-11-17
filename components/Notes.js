import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Image,Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Alert } from 'react-native';
import Task from '../components/Task';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';


export default function Note() {
  const [text, setText] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [count,setCount]=useState();
  const saveData = async()=>{
    try{
      await AsyncStorage.setItem('text',text)
      Alert.alert('Data Saved')
    }
    catch(err){
        Alert.alert('Failed to Save')
    }
  }

  const getData=async()=>{
    try{
      const userText = await AsyncStorage.getItem('text')
      if(userText!==null){
        console.log('Store useText:',userText)
        //setuserText(userText)
        // setText(userText);
      }
    }
    catch(err){
      Alert.alert('Failed to Get Data');
    }
    }
    
    useEffect(() => { getData() }, [])
   /*  useEffect(() => {
      getData();
     
    });  */
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, text])
    setText(null);
  }
  const onChangeText=  userText  =>setText(userText)
    const onSubmitEditing =()=>{
      if(!text)
        return 
        saveData(text)
        setText('')
      
    }
  

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} colors={[/* '#8a9a5b','#e6ffc9','#9ab973', */'#ffcc99','#ffcccc' ]} style={styles.linearGradient}>
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  
                  <Task text={item} /> 
                  
                </TouchableOpacity>

                 
              )

            })
          }
        </View>
        
      </View>
        
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} 
        placeholderTextColor="#ff9966" value={text} 
        onChangeText={/* text => setText(text) */onChangeText} 
        onSubmitEditing={onSubmitEditing}
        />

        <TouchableOpacity
        onPress={() =>{ if(text.length>0){
          handleAddTask();
          saveData();
        }
        else Alert.alert('Enter Something');
        
      }      
        }>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#e63ca',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },

  linearGradient: {height:'100%',width: '100%'},
  addText: {
     fontSize:50,
     color:'#ff9966',
     bottom:7
      
  },
  image1:{
    width: 20,
    height: 20,
    // borderColor: '#55BCF6',
    // borderWidth: 2,
    // borderRadius: 5,
  }
});