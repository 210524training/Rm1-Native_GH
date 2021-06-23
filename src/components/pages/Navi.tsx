import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import RegisterPage from './RegisterPage';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Register" component={RegisterPage} />
    </Stack.Navigator>
  );
}

type RootStackParamList = {
    Home: undefined;
    Register: undefined;
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
    Login: undefined;
  };

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Profile'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
  };

export const HomeScreen: React.FC<Props> = (props) =>{
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Home"
          onPress={() => props.navigation.navigate('Home')}
        />
      </View>
    );
  }

  export const LoginScreen: React.FC<Props> = (props) =>{
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Login"
          onPress={() => props.navigation.navigate('Login')}
        />
        <Button title="Go back" onPress={() => props.navigation.goBack()} />
      </View>
    );
  }

  export const RegisterScreen: React.FC<Props> = (props) =>{
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Login"
          onPress={() => props.navigation.navigate('Register')}
        />
        <Button title="Go back" onPress={() => props.navigation.goBack()} />
      </View>
    );
  }

