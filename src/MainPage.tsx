import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import SvgUri from 'react-native-svg-uri'; // SVG Package
import Iphone from '../assets/images/iphone.png';
import Scooter from '../assets/images/scooter.png';
import StoreFront from '../assets/images/storefront.png';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  

  return (
    <View style={styles.container}>
    <View style={styles.banner}>
      <View>
        <Text >GrubDash</Text>
      </View>
      <Text >Restaurants and more, </Text>
      <Text >delivered to your door</Text>
      {/* <input className="input1" placeholder="Your Address"/> <input value="Search" className="input2" type='submit'/> */}
      {/* { user && <p>Greetings {user.username}</p>} */}
    </View>
    <View > 
      <View >
        <View >
          <View >
            <Image source={Scooter} style={styles.img}/>
             
            <Text>Become a Dasher</Text>
          </View>
        </View>
        <View >
          <View >
            <Image source={ Iphone }/>
            <Text>Try the app</Text>
          </View>
        </View>       
        <View >
          <View >
            <Image source={ StoreFront } />
            <Text>View Restaurants</Text>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    width: 100,
    backgroundColor: 'red',
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
    maxHeight: 50,
    maxWidth: 50
  },
});
