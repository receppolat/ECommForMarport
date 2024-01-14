// React and React Native
import {Alert, Text, View} from 'react-native';
import React from 'react';

// Components
import {Button, TextInput} from '../../../components';

// Styles
import {globalStyles} from '../../../style';
import styles from './Register.style';
import {useNavigation} from '@react-navigation/native';
import {setObjectToLocal, USER_STORAGE} from '../../../storage';

const Register = () => {
  const navigation = useNavigation();

  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const navigateToBack = () => navigation.canGoBack() && navigation.goBack();

  const createUser = () => {
    if (!username || !password)
      return Alert.alert('Hata', 'Lütfen tüm alanları doldurunuz');
    const payload = {
      username,
      password,
    };
    setObjectToLocal(USER_STORAGE, payload);
  };

  return (
    <View style={[globalStyles.container, styles.container]}>
      <Text style={styles.title}>Register</Text>
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

      <Button {...{title: 'Oluştur', onPress: createUser}} />
      <Text onPress={navigateToBack}>Geri Dön</Text>
    </View>
  );
};

export default Register;
