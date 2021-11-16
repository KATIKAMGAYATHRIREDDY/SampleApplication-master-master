import React, { useRef } from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    Animated,
    Platform,
    Modal,
    Pressable,
    TextInput,
} from 'react-native';
import { VictoryPie } from 'victory-native';
import moment from 'moment';
import { useNavigation } from "@react-navigation/core";
import { useState } from "react";

import {Svg} from 'react-native-svg';

//import { COLORS, FONTS, SIZES,  images } from '../constants';

var currentDate = moment().format("ll");


/*  class Expense extends React.Component{
    constructor(props) {
        super(props)
    this.state = {
        category_add:'',
        category_added:'',

    } */

 
 const Expense = (props) => { 


const [category, setCategory] = useState();
const [amount, setAmount] = useState();
const [note, setNote] = useState();

    const [modalVisible, setModalVisible] = useState(false);
    // dummy data
    const confirmStatus = "C"
    const pendingStatus = "P"

    let categoriesData = [
        {
            id: 1,
            name: "Education",
            //icon: icons.education,
            color: "#9e564d",
            expenses: [
                {
                    id: 1,
                    title: "Tuition Fee",
                    description: "Tuition fee",
                    location: "SLN Tuition center",
                    total: 100.00,
                    status: confirmStatus
                },
                {
                    id: 2,
                    title: "Arduino",
                    description: "Hardward",
                    location: "SLN Tuition center",
                    total: 30.00,
                    status: confirmStatus
                },
                {
                    id: 3,
                    title: "Javascript Books",
                    description: "Javascript books",
                    location: "Poorna Book Store",
                    total: 20.00,
                    status: pendingStatus
                },
                {
                    id: 4,
                    title: "PHP Books",
                    description: "PHP books",
                    location: "Explore Book Store",
                    total: 20.00,
                    status: confirmStatus
                }
            ],
        },
        {
            id: 2,
            name: "Nutrition",
            //icon: icons.food,
            color: "#ba873f",
            expenses: [
                {
                    id: 5,
                    title: "Vitamins",
                    description: "Vitamin",
                    location: "Apollo Pharmacy",
                    total: 25.00,
                    status:confirmStatus,
                },

                {
                    id: 6,
                    title: "Protein powder",
                    description: "Protein",
                    location: "Medicare Pharmacy",
                    total: 50.00,
                    status: pendingStatus,
                },

            ],
         },
    
        {
            id: 3,
            name: "Child",
            //icon: icons.baby_car,
            color: "#05b9f5",
            expenses: [
                {
                    id: 7,
                    title: "Toys",
                    description: "toys",
                    location: "Toy Store",
                    total: 25.00,
                    status: confirmStatus,
                },
                {
                    id: 8,
                    title: "Baby Car Seat",
                    description: "Baby Car Seat",
                    location: "Baby Care Store",
                    total: 100.00,
                    status: pendingStatus,
                },
                {
                    id: 9,
                    title: "Pampers",
                    description: "Pampers",
                    location: " Supermarket",
                    total: 100.00,
                    status: pendingStatus,
                },
                {
                    id: 10,
                    title: "Baby T-Shirt",
                    description: "T-Shirt",
                    location: "Fashion Store",
                     total: 20.00,
                     status: pendingStatus,
                 },
             ],
         },
        {
            id: 4,
            name: "Beauty & Care",
            //icon: icons.healthcare,
            color: "#a61e7b",
            expenses: [
                {
                    id: 11,
                    title: "Skin Care product",
                    description: "skin care",
                    location: "Pharmacy",
                    total: 10.00,
                    status: pendingStatus,
                },
                {
                    id: 12,
                    title: "Lotion",
                    description: "Lotion",
                    location: " Pharmacy",
                    total: 50.00,
                    status: confirmStatus,
                },
                {
                    id: 13,
                    title: "Face Mask",
                    description: "Face Mask",
                    location: "Pharmacy",
                    total: 50.00,
                    status: pendingStatus,
                },
                {
                    id: 14,
                    title: "Sunscreen cream",
                    description: "Sunscreen cream",
                    location: "Pharmacy",
                    total: 50.00,
                    status: pendingStatus,
                },
            ],
        },
        {
            id: 5,
            name: "Sports",
            //icon: icons.sports_icon,
            color: "#1e66a6",
            expenses: [
                {
                    id: 15,
                    title: "Gym Membership",
                    description: "Monthly Fee",
                    location: " Gym",
                    total: 45.00,
                    status: confirmStatus,
                },
                {
                    id: 16,
                    title: "Gloves",
                    description: "Gym Equipment",
                    location: "Gym",
                    total: 15.00,
                    status: pendingStatus,
                },
            ],
        },
        {
            id: 6,
            name: "Cloth",
            //icon: icons.cloth_icon,
            color: "#eb5766",
            expenses: [
                {
                    id: 17,
                    title: "T-Shirt",
                    description: "Plain Color T-Shirt",
                    location: "Mall",
                    total: 20.00,
                    status: pendingStatus,
                },
                {
                    id: 18,
                    title: "Jeans",
                    description: "Blue Jeans",
                    location: " Mall",
                    total: 50.00,
                    status: confirmStatus,
                },
            ],
        }
    ]

    const categoryListHeightAnimationValue = useRef(new Animated.Value(115)).current;

    const [categories, setCategories] = React.useState(categoriesData)
    const [viewMode, setViewMode] = React.useState("chart")
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [showMoreToggle, setShowMoreToggle] = React.useState(false)

   /*  function renderNavBar() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 80,
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    paddingHorizontal: 24,
                    backgroundColor: "white",
                    
                }}
            >
                <TouchableOpacity
                    style={{ justifyContent: 'center', width: 50, }}
                    onPress={() => this.props.navigator.navigate('ListScreen')}
                >
                    <Image
                        source={require('../assets/icons/back_arrow_icon.png')}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: "red"
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ justifyContent: 'center', alignItems: 'flex-end', width: 50 }}
                    onPress={() => console.log('More')}
                >
                    <Image
                        source={require('..//assets/icons/more_icon.png')}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: "red"
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    } */

   const renderHeader = ()=> {
        
    const navigation = useNavigation();
       
     
        return (
            <View style={{ marginTop:'5%',paddingHorizontal: 24, paddingVertical: 24, backgroundColor: "#f0f5da" }}>
                <View>
                    <Text style={{ color: "#3e4713", fontSize:22, fontWeight:'bold' }}>My Expenses</Text>
                    <Text style={{ fontSize:16, color: "#7f875b" }}>Summary (private)</Text>
                    
        
      <Modal

animationType="slide"

transparent={true}

visible={modalVisible}

onRequestClose={() => {

Alert.alert("Modal has been closed.");

setModalVisible(!modalVisible);

}}

>

{/* <View style={styles.centeredView}> */}

{/* <View style={styles.modalView}>

<Text style={styles.modalText}>Hello World!</Text> */}

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
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            
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
        onChangeText= {(data) => setAmount(data)}
       
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
             onChangeText= {(data) => setCategory(data)}
            style={{
              fontSize:20,
              fontWeight:'bold',
              bottom:'20%',
              right:'13%'
            }}/>
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
        onChangeText= {(data) => setNote(data)}
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
        //   onPress={() =>
        //    {this.props. navigation.navigate('Expense', {
        //       /* category_add: this.state.category, */
        //     })
        //   }}
        onPress={() => setModalVisible(!modalVisible)
            // console.log(category, 'category added'), 
            // console.log(amount, 'amount added'), 
            // console.log(note, 'note added')
        }
        
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

{/* <Pressable

style={[styles.button, styles.buttonClose]}

onPress={() => setModalVisible(!modalVisible)}

>

<Text style={styles.textStyle}>Hide Modal</Text>

</Pressable>

</View>

</View> */}

</Modal>

    
 

                    <TouchableOpacity
                    style={{ justifyContent: 'center', alignItems: 'flex-end', left:'85%', width: 50 , bottom:'60%'}}
                    onPress={() => setModalVisible(!modalVisible)
                        //</View>onPress={() => navigation.navigate('AddItems')
                      }
                >
                    <Image
                        source={require('..//assets/add.png')}
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: "#3e4713"
                        }}
                    />
                </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 24, alignItems: 'center' }}>
                    <View style={{
                        backgroundColor: "lightGray",
                        height: 50,
                        width: 50,
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={require('..//assets/icons/calendar_icon.png')}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor:"#3a3d2d"
                            }}
                        />
                        
                    </View>

                    <View style={{ marginLeft: 24 }}>
                    
                        <Text style={{ color: "#3a3d2d", fontSize:17 }}>{currentDate}  </Text>
                        <Text style={{ fontSize:16, color:"#7f875b" }}>18% more than last month</Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderCategoryHeaderSection() {
        return (
            <View style={{ flexDirection: 'row', padding: 24, justifyContent: 'space-between', alignItems: 'center',backgroundColor:"#d7e3a3" }}>
                {/* Title */}
                <View>
                    <Text style={{ color: "#434f10", fontSize:17 ,fontWeight:'bold'}}>CATEGORIES</Text>
                    <Text style={{ color: "#7f875b",fontSize:15 }}>{categories.length} Total</Text>
                </View>

                {/* Button */}
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: viewMode == "chart" ? "#4c5703" : null,
                            height: 50,
                            width: 50,
                            borderRadius: 25
                        }}
                        onPress={() => setViewMode("chart")}
                    >
                        <Image
                            source={require('..//assets/icons/chart_icon.png')}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: viewMode == "chart" ? "#edf5e1" :"#4c5703",
                            }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: viewMode == "list" ? "#4c5703" : null,
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            marginLeft: 8
                        }}
                        onPress={() => setViewMode("list")}
                    >
                        <Image
                            source={require('..//assets/icons/menu_icon.png')}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: viewMode == "list" ? "#edf5e1" : "#4c5703",
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderCategoryList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                onPress={() => setSelectedCategory(item)}
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    margin: 5,
                    paddingVertical: 12,
                    paddingHorizontal: 24,
                    borderRadius: 5,
                    backgroundColor: "#edf5e1",
                    ...styles.shadow
                }}
            >
                <Image
                    source={require('..//assets/icons/more_icon.png')}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: item.color
                    }}
                />
                <Text style={{ marginLeft: 8, color: "#3e4713", fontSize:14}}>{item.name}</Text>
            </TouchableOpacity>
        )

        return (
            <View style={{ paddingHorizontal: 24 - 5 }}>
                <Animated.View style={{ height: categoryListHeightAnimationValue }}>
                    <FlatList
                        data={categories}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        numColumns={2}
                    />
                </Animated.View>

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        marginVertical: 8,
                        justifyContent: 'center'
                    }}
                    onPress={() => {
                        if (showMoreToggle) {
                            Animated.timing(categoryListHeightAnimationValue, {
                                toValue: 115,
                                duration: 500,
                                useNativeDriver: false
                            }).start()
                        } else {
                            Animated.timing(categoryListHeightAnimationValue, {
                                toValue: 172.5,
                                duration: 500,
                                useNativeDriver: false
                            }).start()
                        }

                        setShowMoreToggle(!showMoreToggle)
                    }}
                >
                    <Text style={{ fontSize:14,color:'#3a3d2d'}}>{showMoreToggle ? "LESS" : "MORE"}</Text>
                    <Image
                        source={showMoreToggle ? require('..//assets/icons/up_arrow.png') : require('..//assets/icons/down_arrow.png')}
                        style={{ marginLeft: 5, width: 15, height: 15, alignSelf: 'center' }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderIncomingExpensesTitle() {
        return (
            <View style={{ height: 80, backgroundColor: "lightGray", padding: 14}}>
                {/* Title */}
                <Text style={{ fontSize:16, color: "#48592d",fontWeight:'bold' }}>INCOMING EXPENSES</Text>
                <Text style={{ fontSize:14, color: "#7f875b" }}>12 Total</Text>
            </View>
        )
    }

    function renderIncomingExpenses() {
        let allExpenses = selectedCategory ? selectedCategory.expenses : []
        let incomingExpenses = allExpenses.filter(a => a.status == "P")

        const renderItem = ({ item, index }) => (
            <View style={{
                width: 300,
                marginRight: 24,
                marginLeft: index == 0 ? 24 : 0,
                marginVertical: 12,
                borderRadius: 12,
                backgroundColor: "#edf5e1",
                ...styles.shadow
            }}>
                {/* Title */}
                <View style={{ flexDirection: 'row', padding: 24, alignItems: 'center' }}>
                    <View
                        style={{
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            backgroundColor: "lightGray",
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: 8
                        }}
                    >
                        <Image
                            source={require('..//assets/cost_icon.png')}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: selectedCategory.color
                            }}
                        />
                    </View>

                    <Text style={{ fontSize:16, color: selectedCategory.color,fontWeight:'bold' }}>{selectedCategory.name}</Text>
                </View>

                {/* Expense Description */}
                <View style={{ paddingHorizontal: 24 }}>
                    {/* Title and description */}
                    <Text style={{fontSize:22,color:'#455925' }}>{item.title}</Text>
                    <Text style={{ fontSize:16, flexWrap: 'wrap', color: "#7f875b" }}>
                        {item.description}
                    </Text>

                    {/* Location */}
                    <Text style={{ marginTop: 24, fontSize:14, color:'#455925'}}>Location</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={require('..//assets/icons/pin.png')}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: "#7f875b",
                                marginRight: 5
                            }}
                        />
                        <Text style={{ marginBottom: 8, color:"#7f875b", fontSize:14 }}>{item.location}</Text>
                    </View>
                </View>

                {/* Price */}
                <View
                    style={{
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottomStartRadius: 12,
                        borderBottomEndRadius:12,
                        backgroundColor: selectedCategory.color,
                    }}
                >
                    <Text style={{ color: "white", fontSize:16 }}>CONFIRM {item.total.toFixed(2)} Rs</Text>
                </View>
            </View>
        )

        return (
            <View>
                {renderIncomingExpensesTitle()}

                {
                    incomingExpenses.length > 0 &&
                    <FlatList
                        data={incomingExpenses}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                }

                {
                    incomingExpenses.length == 0 &&
                    <View style={{ alignItems: 'center', justifyContent: 'center', height: 300 }}>
                        <Text style={{ color: "#333d23", fontSize:22 }}>No Record</Text>
                    </View>
                }

            </View>

        )
    }

    function processCategoryDataToDisplay() {
        // Filter expenses with "Confirmed" status
        let chartData = categories.map((item) => {
            let confirmExpenses = item.expenses.filter(a => a.status == "C")
            var total = confirmExpenses.reduce((a, b) => a + (b.total || 0), 0)

            return {
                name: item.name,
                y: total,
                expenseCount: confirmExpenses.length,
                color: item.color,
                id: item.id
            }
        })

        // filter out categories with no data/expenses
        let filterChartData = chartData.filter(a => a.y > 0)

        // Calculate the total expenses
        let totalExpense = filterChartData.reduce((a, b) => a + (b.y || 0), 0)

        // Calculate percentage and repopulate chart data
        let finalChartData = filterChartData.map((item) => {
            let percentage = (item.y / totalExpense * 100).toFixed(0)
            return {
                label: `${percentage}%`,
                y: Number(item.y),
                expenseCount: item.expenseCount,
                color: item.color,
                name: item.name,
                id: item.id
            }
        })

        return finalChartData
    }

    function setSelectCategoryByName(name) {
        let category = categories.filter(a => a.name == name)
        setSelectedCategory(category[0])
    }

    function renderChart() {

        let chartData = processCategoryDataToDisplay()
        let colorScales = chartData.map((item) => item.color)
        let totalExpenseCount = chartData.reduce((a, b) => a + (b.expenseCount || 0), 0)

        console.log("Check Chart")
        console.log(chartData)

        if(Platform.OS == 'ios')
        {
            return (
                <View  style={{ alignItems: 'center', justifyContent: 'center', backgroundColor:"red" }}>
                    <VictoryPie
                        
                        data={chartData}
                        labels={(datum) => `${datum.y}`}
                        radius={({ datum }) => (selectedCategory && selectedCategory.name == datum.name) ? 100 * 0.4 : 100 * 0.4 - 10}
                        innerRadius={150}
                        labelRadius={({ innerRadius }) => (500 * 0.4 + innerRadius)/ 2.5}
                        style={{
                            
                            labels: { fill: "white", fontSize:16 },
                            parent: {
                                ...styles.shadow
                            },
                        }}
                        width={50 * 0.8}
                        height={50 * 0.8}
                        colorScale={colorScales}
                        events={[{
                            target: "data",
                            eventHandlers: {
                                onPress: () => {
                                    return [{
                                        target: "labels",
                                        mutation: (props) => {
                                            let categoryName = chartData[props.index].name
                                            setSelectCategoryByName(categoryName)
                                        }
                                    }]
                                }
                            }
                        }]}
    
                    />
    
                    <View style={{ position: 'absolute', top: '42%', left: "42%" }}>
                        <Text style={{fontSize:30, textAlign: 'center' }}>{totalExpenseCount}</Text>
                       {/*  <Text style={{ fontSize:16, textAlign: 'center' }}>Expenses</Text> */}
                    </View>
                </View>
    
            )
        }
        else
        {
            // Android workaround by wrapping VictoryPie with SVG
            return (
                <View  style={{ height:'45%',alignItems: 'center', justifyContent: 'center',backgroundColor:'#d7e3a3'}}>
                    <Svg width={300} height={300} style={{width: "10%", height: "auto"}}>

                        <VictoryPie
                            standalone={false} // Android workaround
                            data={chartData}
                            labels={(datum) => `${datum.y}`}
                            radius={({ datum }) => (selectedCategory && selectedCategory.name == datum.name) ? 60* 0.4 : 120* 0.4 - 10}
                            innerRadius={120}
                            labelRadius={({ innerRadius }) => (50 * 0.4 + innerRadius) / 2.5}
                            style={{ 
                                labels: { fill: "#ecf2e1", fontSize:16,fontWeight:'bold' },
                                parent: {
                                    ...styles.shadow
                                },

                                
                            }}
                            width={300}
                            height={300}
                            colorScale={colorScales}
                            events={[{
                                target: "data",
                                eventHandlers: {
                                    onPress: () => {
                                        return [{
                                            target: "labels",
                                            mutation: (props) => {
                                                let categoryName = chartData[props.index].name
                                                setSelectCategoryByName(categoryName)
                                            }
                                        }]
                                    }
                                }
                            }]}
        
                        />
                    </Svg>
                    <View style={{ position: 'absolute', top: '42%', left: "42%" }}>
                        <Text style={{ fontSize:40, textAlign: 'center',color:'#394721',fontWeight:'bold' ,paddingLeft:'7%',bottom:'13%',right:'13%'}}>{totalExpenseCount}</Text>
                        {/* <Text style={{fontSize:16, textAlign: 'center' ,color:'#421380',fontWeight:'bold'}}>Expenses</Text> */}
                    </View>
                </View>
            )
        }
        
    }


    
//     function renderExpenseSummary(){
        
//     //     constructor(props) {
//     //         super(props)
//     //     this.state = {
//     //         category:''
    
//     //     }

//     //     const { navigation } = this.props;  
//     //     const category_added = this.props.route.params.category; 
    
//     //   const ca =  JSON.stringify(category_added)
//     /* const { navigation } = this.props;  
//     const category_added = this.props.route.params.category_add; 

//   const ca =  JSON.stringify(category_added) */

//         let data = processCategoryDataToDisplay()

//         const renderItem = ({ item }) => (
//             <TouchableOpacity
//                 style={{
//                     flexDirection: 'row',
//                     height: 40,
//                     paddingHorizontal: 12,
//                     borderRadius: 10,
                   
//                             marginTop:5,
//                     backgroundColor: (selectedCategory && selectedCategory.name == item.name) ? item.color : "#e4ebda"
//                 }}
//                 onPress={() => {
//                     let categoryName = item.name
//                     setSelectCategoryByName(categoryName)
//                 }}
//             >
//                 {/* Name/Category */}
//                 <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
//                     <View
//                         style={{
//                             width: 20,
//                             height: 20,
//                             backgroundColor: (selectedCategory && selectedCategory.name == item.name) ? "#edf5e1": item.color,
                            
//                             borderRadius: 5
//                         }}
//                     />

//                     <Text style={{ marginLeft: 8, color: (selectedCategory && selectedCategory.name == item.name) ? "#edf5e1" : "#3e4713", fontSize:16,fontWeight:'bold' }}>{item.name}</Text>
//                 </View>

//                 {/* Expenses */}
//                 <View style={{ justifyContent: 'center' }}>
//                     <Text style={{ color: (selectedCategory && selectedCategory.name == item.name) ? "#edf5e1": "#3e4713", fontSize:16,fontWeight:'bold' }}>{item.y} USD - {item.label}</Text>
//                {/*  <Text>Added element..{ca}</Text> */}
//                 </View>
//             </TouchableOpacity>
//         )

//         return (
//             <View style={{ padding: 24, backgroundColor:'#d7e3a3' }}>
//                 <FlatList
//                     data={data}
//                     renderItem={renderItem}
//                     keyExtractor={item => `${item.id}`}
//                 />
//             </View>

//         )
//     }

    

    return (
        <View style={{ flex: 1, backgroundColor: "#d7e3a3" }}>
            {/* Nav bar section */}
           {/*  {renderNavBar()} */}

            {/* Header section */}
            {renderHeader()}

            {/* Category Header Section */}
            {renderCategoryHeaderSection()}

            <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
                {
                    viewMode == "list" &&
                    <View>
                        {renderCategoryList()}
                        {renderIncomingExpenses()}
                    </View>
                }
                {
                    viewMode == "chart" &&
                    <View>
                        {renderChart()}
                        {/* {renderExpenseSummary()} */}
                    </View>
                }
            </ScrollView>
        </View>
    )
}
   
 
const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },

    centeredView: {
        flex: 1,
        marginTop: 22,
        height:'100%',
        width:'100%'
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        height:'90%',
        width:'90%',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      container:{
        flex: 1,
        backgroundColor:'#d7e3a3'
       }
    });




export default Expense;