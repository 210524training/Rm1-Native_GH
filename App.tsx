import React from 'react';
import 'react-native-gesture-handler';
import Navigation from './src/components/navigation';
import useColorScheme from './src/components/navigation/hooks/useColorScheme';
import useCachedResources from './src/components/navigation/hooks/useCachedResources';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native';
import LoginPage from './src/components/pages/LoginPage';
import MainPage from './src/MainPage';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  return (
    <Navigation colorScheme={colorScheme} />
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight
  },
  nav: {
    flexDirection: "row",
    height: 100,
    padding: 20
  }
});
