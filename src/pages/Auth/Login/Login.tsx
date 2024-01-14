// React and React Native
import {Alert, Text, View} from 'react-native';
import React from 'react';

//
import {useNavigation} from '@react-navigation/native';

// Components
import {Button, TextInput} from '../../../components';

// Styles
import {globalStyles} from '../../../style';
import styles from './Login.style';
import {getObjectFromLocal, USER_STORAGE} from '../../../storage';
import {navigateTo} from '../../../routes/helper';

const Login = () => {
  const navigation = useNavigation<any>();
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const navigateToRegister = () => navigateTo('Register');

  const navigateToHome = () => {
    const user: any = getObjectFromLocal(USER_STORAGE);
    if (user?.username && user?.password) {
      if (username === user?.username && user?.password === password) {
        navigation.replace('Home');
      } else Alert.alert('Hata', 'Kullanıcı adı veya parola yanlış');
    }
  };

  return (
    <View style={[globalStyles.container, styles.container]}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        title="Kullanıcı adı"
        placeholder="Kullanıcı adı giriniz"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        title="Parola"
        placeholder="Parola giriniz"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button {...{title: 'Giriş Yap', onPress: navigateToHome}} />
      <Text onPress={navigateToRegister}>Register</Text>
    </View>
  );
};

export default Login;
