import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './src/components/nav';
import AppRoutes from './src/router/AppRoutes';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {MyStack} from './src/components/pages/Navi';
import Navigation from './src/components/navigation';
import useColorScheme from './src/components/navigation/hooks/useColorScheme';
import useCachedResources from './src/components/navigation/hooks/useCachedResources';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  return (
    <Navigation colorScheme={colorScheme} />
  );
}

const styles = StyleSheet.create({
  container: {

  },
  nav: {
    flexDirection: "row",
    height: 100,
    padding: 20
  }
});
