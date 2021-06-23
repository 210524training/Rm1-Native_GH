import * as React from 'react';
import { StyleSheet, Image, Text, View, Dimensions, ScrollView } from 'react-native';
import Iphone from '../assets/iphone.png';
import Scooter from '../assets/scooter.png';
import StoreFront from '../assets/storefront.png';
// import { create, PREDEF_RES } from 'react-native-pixel-perfect'
const { create, PREDEF_RES } = require('react-native-pixel-perfect');
const perfectSize = create(PREDEF_RES.iphoneX.px)

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default function TabOneScreen() {

  
  


  return (
    
    <View style={styles.container}>
    <View style={styles.banner}>
    {console.log(globalThis)}
      <View>
        <Text >GrubDash</Text>
      </View>
      <Text >Restaurants and more, </Text>
      <Text >delivered to your door</Text>
      {/* <input className="input1" placeholder="Your Address"/> <input value="Search" className="input2" type='submit'/> */}
      {/* { user && <p>Greetings {user.username}</p>} */}
    </View>
    <View > 
      <View style={styles.imagerow}>
        <View >
          <View >
            <Image  source={Scooter} style={styles.img}/>
             
            <Text style={styles.textview}>Become a Dasher</Text>
          </View>
        </View>
        <View >
          <View >
            <Image source={ Iphone } style={styles.img} />
            <Text style={styles.textview}>Try the app</Text>
          </View>
        </View>       
        <View >
          <View >
            <Image source={ StoreFront } style={styles.img} />
            <Text style={styles.textview}>View Restaurants</Text>
          </View>
        </View>
      </View>
    </View>
    <View>
      {/* <Features /> */}
    </View>
    <View >
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagerow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  banner: {
    width: width,
    backgroundColor: 'red',
    padding: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  img: {
    height: perfectSize(350),
    width: perfectSize(350),
    margin: 45,
  },
  textview: {
    textAlign: 'center',
  }
});

