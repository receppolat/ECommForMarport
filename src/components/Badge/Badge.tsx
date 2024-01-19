import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import type {IBadgeProps} from './Badge.type';
import styles from './Badge.style';

const Badge = (props: IBadgeProps) => {
  const {text, style, textStyle, ...rest} = props;

  return (
    <TouchableOpacity style={[styles.container, style]} {...{...rest}}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Badge;
