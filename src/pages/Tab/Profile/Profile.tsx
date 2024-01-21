import {View, Text} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../style';
import {useAppSelector} from '../../../store';

const Profile = () => {
  const counter = useAppSelector(state => state.counter);

  return (
    <View style={globalStyles.container}>
      <Text>{counter}</Text>
    </View>
  );
};

export default Profile;
