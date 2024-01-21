import React from 'react';

import LottieView from 'lottie-react-native';

import styles from './Lottie.style';
import type {ILottieProps} from './Lottie.type';

const Lottie = (props: ILottieProps) => {
  const {source, size = 200, ...rest} = props;

  return (
    <LottieView
      {...{
        source,
        style: [styles.container, {width: size, height: size}],
        autoPlay: true,
        loop: true,
        ...rest,
      }}
    />
  );
};

export default Lottie;
