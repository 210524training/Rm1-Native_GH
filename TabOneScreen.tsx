import * as React from 'react';
import { FlatList } from 'react-native';
import { ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import GridItem from '../src/components/grid-item/GridItem';

  const TabOneScreen = () => {
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={{
              borderTopRightRadius: 20,
              height: 100,
              width: 200
            }}
            source={require("@expo/snack-static/react-native-logo.png")}
          />
          <Text>borderTopRightRadius</Text>
        </View>
        </View>
let styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "vertical",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    textAlign: "center"
  }
});

export default DisplayAnImageWithStyle;
