//React and React Native
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';

//Types and Styles
import styles from './Button.style';
import {colors} from '../../style/colors';
import type {IButtonProps} from './Button.type';

const Button = (props: IButtonProps) => {
  const {style, title, loading, ...rest} = props;

  return (
    <TouchableOpacity
      {...{style: [styles.container, style], disabled: loading, ...rest}}>
      {loading ? (
        <ActivityIndicator color={colors.global.white} />
      ) : (
        title && <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
