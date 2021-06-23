/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
 import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import * as React from 'react';
 import { ColorSchemeName } from 'react-native';
 
 import HomePage from '../pages/HomePage';
 import { RootStackParamList } from './Types';
 import RegisterPage from '../pages/RegisterPage';
 import LinkingConfiguration from './LinkingConfiguration';
 import BottomTabNavigator from  './BottomTabNavigation';
 
 export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
   return (
     <NavigationContainer
       linking={LinkingConfiguration}
       theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
       <RootNavigator />
     </NavigationContainer>
   );
 }
 
 // A root stack navigator is often used for displaying modals on top of all other content
 // Read more here: https://reactnavigation.org/docs/modal
 const Stack = createStackNavigator<RootStackParamList>();
 
 function RootNavigator() {
   return (
     <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen name="Root" component={BottomTabNavigator} />
       <Stack.Screen name="NotFound" component={HomePage} options={{ title: 'Oops!' }} />
     </Stack.Navigator>
   );
 }
 