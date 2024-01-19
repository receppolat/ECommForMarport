import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Header.style';
import Icon from '../Icon';
import {colors} from '../../style';
import Badge from '../Badge';
import {navigateTo} from '../../routes/helper';
import {PAGE_LIST} from '../../pages/PageList';

const Header = props => {
  const {title, count} = props?.route?.params;

  const colorKey = count ? 'brand' : 'tertiarry';

  const navigateToNotification = () => navigateTo(PAGE_LIST.Notification.name);

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
        {count && (
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

export default Header;
