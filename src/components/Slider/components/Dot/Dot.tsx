import {View, Text} from 'react-native';
import React from 'react';
import styles from './Dot.style';
import type {IDotProps} from './Dot.type';

const Dot = (props: IDotProps) => {
  const {active} = props;

  return <View style={[styles.container, active && styles.activeContainer]} />;
};

export default Dot;
