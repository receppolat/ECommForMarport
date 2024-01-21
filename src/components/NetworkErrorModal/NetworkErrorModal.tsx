import React from 'react';
import {Modal, Text, View} from 'react-native';

import {useNetInfo} from '@react-native-community/netinfo';

import styles from './NetworkErrorModal.style';
import type {INetworkErrorModalProps} from './NetworkErrorModal.type';
import Lottie from '../Lottie';
import {NetworkError} from '../../assets';

const NetworkErrorModal = (props: INetworkErrorModalProps) => {
  const {working = true} = props;

  if (!working) return <></>;

  const [visible, setVisible] = React.useState<boolean>(false);

  const netinfo = useNetInfo();

  React.useEffect(() => {
    if (!netinfo.isConnected) setVisible(true);
    else setVisible(false);
  }, [netinfo]);

  return (
    <Modal {...{visible}}>
      <View style={styles.container}>
        <Lottie {...{source: NetworkError, size: 250}} />
        <Text style={styles.title}>Network Error!</Text>
        <Text style={styles.subTitle}>
          Please check your network connection
        </Text>
      </View>
    </Modal>
  );
};

export default NetworkErrorModal;
