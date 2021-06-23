import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Button, NativeSyntheticEvent, NativeTouchEvent, Text, TextInput, View } from 'react-native';
import { sendLogin } from '../../grubdash-backend/grubdash.api';
import User from '../../models/user';

const LoginPage: React.FC<unknown> = (props) => {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleUsernameChange = (username: string): void => {
    setUsername(username);
  };

  const handlePasswordChange = (password: string): void => {
    setPassword(password);
  };

  const handleFormSubmit = async (ev: NativeSyntheticEvent<NativeTouchEvent>): Promise<User> => {
    return await sendLogin(username, password);
    //TODO: redirect to homepage
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