import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Counter.style';
import type {ICounterProps} from './Counter.type';

const Counter = (props: ICounterProps) => {
  const {value, onChangeText, style, textInputProps} = props;

  const _onChangeText = (value: string) => {
    if (Number(value) > 0) onChangeText(value);
  };

  const decreaseCount = () => {
    const val = (Number(value) - 1).toString();
    _onChangeText(val);
  };

  const increaseCount = () => {
    const val = (Number(value) + 1).toString();
    _onChangeText(val);
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        disabled={Number(value) === 1}
        onPress={decreaseCount}
        style={styles.countButtonContainer}>
        <Text>-</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        {...{...textInputProps, value, onChangeText: _onChangeText}}
        keyboardType="number-pad"
      />
      <TouchableOpacity
        onPress={increaseCount}
        style={styles.countButtonContainer}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
