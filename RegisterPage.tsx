import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import './RegisterPage.css';
import pokeClient from '../../../remote/poke-api/poke.client';
import grubdashClient from '../../../remote/grubdash-backend/grubdash.client';
import { View, StyleSheet, TextInput, Button, Text} from 'react-native';

const styles = StyleSheet.create( {
  container: {
    marginTop: '60px',
  },

  mb3: {

  },

  inputs: {
    margin: 15,
      height: 40,
      borderColor: '#000000',
      borderWidth: 1
  }
})

const RegisterPage: React.FC<unknown> = (props)=> {

  const [username, onChangeUsername] = useState<string>();
  const [password, onChangePassword] = useState<string>();

  //const handleUsernameChange = (e: ChangeEvent<TextInput>) => {
  //  onChangeUsername(e.target.value);
  //};

  //const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
  //  setPassword(e.target.value);
  //};

  //const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //  e.preventDefault();
    // Send an Axios Request
  const handleFormSubmit = async () => {
    const response = await grubdashClient.post<boolean>('/api/v1/users', {
      username,
      password,
      role: 'Customer',
    });
  
    console.log(response.data);
  }

  useEffect(() => {
    (async () => {
      const response = await pokeClient.get<unknown>('/pokemon/arcanine');
      console.log(response);
    })();
  }, []);

  console.log('username: ', username);
  console.log('password: ', password);

  return (
    <View style={styles.container}>
        <View>
          <Text>
            Register Now
          </Text>
        </View>
        <View style={styles.mb3}>
          <TextInput
            style = {styles.inputs} 
            placeholder = "Username"
            onChangeText={text => onChangeUsername(text)} />
        </View>
        <View style={styles.mb3}>
          <TextInput
            style = {styles.inputs} 
            placeholder = "Password"
            onChangeText={text => onChangePassword(text)} />
        </View>
        <Button 
        title = "Submit"
        onPress = {handleFormSubmit} />
    </View>
  );
};

export default RegisterPage;