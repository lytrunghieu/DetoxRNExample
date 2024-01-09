import React from 'react';
import {View, TextInput, Button} from 'react-native';
import {loginScreenTestIds} from './e2e/testIds';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View testID={loginScreenTestIds.container}>
      <TextInput
        testID={loginScreenTestIds.userInput}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        testID={loginScreenTestIds.passInput}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        testID={loginScreenTestIds.submit}
        title="Login"
        onPress={handleLogin}
      />
    </View>
  );
};

export default LoginScreen;
