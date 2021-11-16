import React, { Component } from "react";

import { View, Dimensions, Text,Alert,Modal,Button} from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import * as Animatable from "react-native-animatable";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

console.disableYellowBox = true;
  export default class Qrcodescan extends React.Component{

    constructor(props) {
      super(props);
  
      this.state = {
        isVisible: false,
        stringfye:{}
      };
    }

  onSuccess(e) {
   
  
    let result = JSON.stringify(e)
  //  alert(JSON.stringify(e));
    this.setState({ isVisible:!this.state.isVisible,stringfye:result}) 
  }

  makeSlideOutTranslation(translationType, fromValue) {
    return {
      from: {
        [translationType]: SCREEN_WIDTH * -0.18
      },
      to: {
        [translationType]: fromValue
      }
    };
  }

  render() {
    return (
      <View style = {styles.container}>  
      <QRCodeScanner
        showMarker
        onRead={this.onSuccess.bind(this)}
        cameraStyle={{ height: SCREEN_HEIGHT }}
        customMarker={
          <View style={styles.rectangleContainer}>
            <View style={styles.topOverlay}>
              <Text style={{ fontSize: 30, color: "#d3dde6" }}>
                QR CODE SCANNER
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={styles.leftAndRightOverlay} />

              <View style={styles.rectangle}>
                <Animatable.View
                  style={styles.scanBar}
                  direction="alternate-reverse"
                  iterationCount="infinite"
                  duration={1700}
                  easing="linear"
                  animation={this.makeSlideOutTranslation(
                    "translateY",
                    SCREEN_WIDTH * -0.55
                  )}
                />
              </View>

              <View style={styles.leftAndRightOverlay} />
            </View>

            <View style={styles.bottomOverlay} />
          </View>
        }
      />
 <Modal            
          animationType = {"fade"}  
          transparent = {false}  
          visible = {this.state.isVisible}  
          onRequestClose = {() =>{ console.log("Modal has been closed.") } }>  
          {/*All views of Modal*/}  
              <View style = {styles.modal}>  
              <Text style = {styles.text}>{this.state.stringfye}</Text>  
              <Button title="Click To Close Modal" style={{marginTop:25}} onPress = {() => {  
                  this.setState({ isVisible:!this.state.isVisible})}}/>  
          </View>  
        </Modal>  

</View>
     
    );
  }
}

const overlayColor = "rgba(0,0,0,0.5)"; 

const rectDimensions = SCREEN_WIDTH * 0.65; 
const rectBorderWidth = SCREEN_WIDTH * 0.008; 
const rectBorderColor = "#b2beb5";

const scanBarWidth = SCREEN_WIDTH * 0.5; 
const scanBarHeight = SCREEN_WIDTH * 0.005; 
const scanBarColor = "#96ffb9";

const styles = {
  rectangleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  rectangle: {
    height: rectDimensions,
    width: rectDimensions,
    borderWidth: rectBorderWidth,
    borderColor: rectBorderColor,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  topOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    justifyContent: "center",
    alignItems: "center"
  },

  bottomOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    paddingBottom: SCREEN_WIDTH * 0.25
  },

  leftAndRightOverlay: {
    height: SCREEN_WIDTH * 0.65,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor
  },

  scanBar: {
    width: scanBarWidth,
    height: scanBarHeight,
    backgroundColor: scanBarColor,
    top:'55%'
  },

  container: {  
    flex: 1,  
    alignItems: 'center',  
    justifyContent: 'center',  
    backgroundColor: '#ecf0f1',  
  },  
  modal: {  
  justifyContent: 'center',  
  alignItems: 'center',   
  backgroundColor : "#00BCD4",   
  height: 300 ,  
  width: '80%',  
  borderRadius:10,  
  borderWidth: 1,  
  borderColor: '#fff',    
  marginTop: 80,  
  marginLeft: 40,  
   
   },  
   text: {  
      color: '#3f2949',  
      marginTop: 10,
      marginLeft:10,
      marginRight:10  
   }  
};