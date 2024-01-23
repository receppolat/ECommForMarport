import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Header.style';
import Icon from '../Icon';
import {colors} from '../../style';
import Badge from '../Badge';
import {navigateTo} from '../../routes/helper';
import {PAGE_LIST} from '../../pages/PageList';
import {useAppDispatch} from '../../redux';
import {reset} from '../../redux/slices/counter-slice';
import {productStore} from '../../mobx';
import {observer} from 'mobx-react-lite';

const Header = props => {
  const {title} = props?.route?.params;

  // const count = useAppSelector(state => state.counter); // Redux
  const dispatch = useAppDispatch(); // Redux

  const count = productStore.counter; // Mobx

  const colorKey = count ? 'brand' : 'tertiarry';

  const navigateToNotification = () => {
    productStore.reset(); // Mobx
    dispatch(reset()); // Redux
    navigateTo(PAGE_LIST.Notification.name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={navigateToNotification} style={styles.icon}>
        <Icon
          {...{
            type: 'ion',
            name: 'notifications',
            size: 24,
            color: colors.foreground[colorKey],
          }}
        />
        {!!count && (
          <Badge
            onPress={navigateToNotification}
            text={count}
            style={styles.badgeContainer}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default observer(Header);
