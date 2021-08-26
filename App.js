import { StatusBar } from 'expo-status-bar';
import { native } from 'mkdirp';
import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import Reader from "./Screens/Readquotes"
import Writer from "./Screens/Writequotes"
import {createBottomTabNavigator} from "react-navigation-tabs"
import {createAppContainer} from "react-navigation";
var h=Dimensions.get("window").height
var w=Dimensions.get("window").width
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    <Container/>
    </View>
  
  );
}
var tabcreator=createBottomTabNavigator({screen1:Writer,screen2:Reader})
var Container=createAppContainer(tabcreator)
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:h,
    width:w
  },
});
