import {View, Text} from 'react-native';
import React from 'react';

import {TextInput as TI} from 'react-native-paper';

import styles from './TextInput.style';

import type {ITextInputProps} from './TextInput.type';
import {colors} from '../../style';

const TextInput = (props: ITextInputProps) => {
  const {style, title, ...rest} = props;

  return (
    <View style={styles.container}>
      {title && <Text>{title}</Text>}
      <TI
        {...{
          style: [styles.input, style],
          activeUnderlineColor: colors.foreground.brand,
          ...rest,
        }}
      />
    </View>
  );
};

export default TextInput;
