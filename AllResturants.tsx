import * as React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { FlatList } from 'react-native';
import { ScrollView } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import GridItem from '../src/components/grid-item/GridItem';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function TabOneScreen() {
    return (
      <View style={styles.container}>
          <Image source={{uri:"https://cdn.nanalyze.com/uploads/2017/05/Burger-Future-Teaser.jpg"}} style={{width:100, height:100, margin:10}}></Image>
          <Image source={{uri:"https://cdn.nanalyze.com/uploads/2017/05/Burger-Future-Teaser.jpg"}} style={{width:100, height:100, margin:10}}></Image>
          <Image source={{uri:"https://cdn.nanalyze.com/uploads/2017/05/Burger-Future-Teaser.jpg"}} style={{width:100, height:100, margin:10}}></Image>
          <Image source={{uri:"https://cdn.nanalyze.com/uploads/2017/05/Burger-Future-Teaser.jpg"}} style={{width:100, height:100, margin:10}}></Image>
          <Image source={{uri:"https://cdn.nanalyze.com/uploads/2017/05/Burger-Future-Teaser.jpg"}} style={{width:100, height:100, margin:10}}></Image>
          <Image source={{uri:"https://cdn.nanalyze.com/uploads/2017/05/Burger-Future-Teaser.jpg"}} style={{width:100, height:100,margin:10}}></Image>
          <Image source={{uri:"https://cdn.nanalyze.com/uploads/2017/05/Burger-Future-Teaser.jpg"}} style={{width:100, height:100,margin:10}}></Image>
          <Image source={{uri:"https://cdn.nanalyze.com/uploads/2017/05/Burger-Future-Teaser.jpg"}} style={{width:100, height:100,margin:10}}></Image>
          <Image source={{uri:"https://cdn.nanalyze.com/uploads/2017/05/Burger-Future-Teaser.jpg"}} style={{width:100, height:100,margin:10}}></Image>
          <Image source={{uri:"https://cdn.nanalyze.com/uploads/2017/05/Burger-Future-Teaser.jpg"}} style={{width:100, height:100,margin:10}}></Image>
          <Image source={{uri:"https://cdn.nanalyze.com/uploads/2017/05/Burger-Future-Teaser.jpg"}} style={{width:100, height:100,margin:10}}></Image>
          <Image source={{uri:"https://cdn.nanalyze.com/uploads/2017/05/Burger-Future-Teaser.jpg"}} style={{width:100, height:100,margin:10}}></Image>

          {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}

      </View>
        
    )
  }
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    flexWrap: "wrap",
    alignItems: "center",
    height: "100%",
    textAlign: "center",
  },
  img: {
    height: 100,
    width: 100,
  },
});

