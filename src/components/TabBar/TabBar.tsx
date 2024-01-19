// React and React Native
import React from 'react';
import {View, TouchableOpacity} from 'react-native';

//Components
import Icon from '../Icon';

// Config
import {TAB_MID_PAGE_NAME} from '../../Config';

//Styles and Types
import {colors} from '../../style';
import styles from './TabBar.style';
import type {ITabBarProps} from './TabBar.type';
import {navigateTo} from '../../routes/helper';

const BIG_ICON = 35,
  SMALL_ICON = 27;

const TabBar = (props: ITabBarProps) => {
  const {state} = props;

  return (
    <View style={styles.base.container}>
      {state.routes.map((route: any, index: any) => {
        const {name, type} = route.params;

        const isFocused = state.index === index;

        const isMid = route.name == TAB_MID_PAGE_NAME;

        const midStyleKey: 'active' | 'passive' = isFocused
          ? 'active'
          : 'passive';

        const size = route.name == isMid ? BIG_ICON : SMALL_ICON;

        const color = isFocused
          ? colors.foreground.brand
          : isMid
          ? colors.global.white
          : colors.foreground.tertiarry;

        const onPress = () => !isFocused && navigateTo(route.name);

        return (
          <TouchableOpacity
            {...{
              onPress,
              style: [
                styles.base.tabStyle,
                isMid && styles[midStyleKey].midContainer,
              ],
            }}>
            <Icon {...{name, type, size, color}} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
