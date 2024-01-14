import {TextInput as TI, View, Text} from 'react-native';
import React from 'react';
import styles from './TextInput.style';

import type {ITextInputProps} from './TextInput.type';

const TextInput = (props: ITextInputProps) => {
  const {style, title, ...rest} = props;

  return (
    <View style={styles.container}>
      {title && <Text>{title}</Text>}
      <TI {...{style: [styles.input, style], ...rest}} />
    </View>
  );
};

export default TextInput;
