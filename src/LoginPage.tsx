import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { sendLogin } from './grubdash-backend/grubdash.api';
import User from './models/user';
import router from 'react-router-native'
// import { useHistory } from 'react-router-dom';
// import { useAppDispatch } from '../../../hooks';
// import { loginAsync } from '../../../slices/user.slice';

const LoginPage: React.FC<unknown> = (props) => {

  console.log(router)

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleUsernameChange = (username: string): void => {
    setUsername(username);
  };

  const handlePasswordChange = (password: string): void => {
    setPassword(password);
  };

  const handleFormSubmit = async (username: string, password: string): Promise<User> => {
    return await sendLogin(username, password);

  }

  return (
    <View>
        <View>
          <Text>Username</Text>
          <TextInput 
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1
            }}
            value={username}
          onChangeText={() => handleUsernameChange(username)} 
        />
        </View>
        <View>
          <Text>Password</Text>
          <Text>{password}</Text>
          <TextInput 
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1
            }}
            value={password}
            onChangeText={() => handlePasswordChange(password)} 
          />
        </View>
        <View
        style={{
          marginTop: 10,
        }}
        >
        <Button
          onPress={handleFormSubmit}
          title="Sign In"
        />
        </View>
        
        
    </View>
  );
};


export default LoginPage;