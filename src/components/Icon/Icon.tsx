// React
import React from 'react';

// Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Types and Styles
import {colors} from '../../style';
import type {IIconProps} from './Icon.type';

const Icon = (props: IIconProps) => {
  const {type, name, size = 18, color = colors.foreground.tertiarry} = props;

  switch (type) {
    case 'ant':
      return <AntDesign {...{name, size, color}} />;
    case 'entypo':
      return <Entypo {...{name, size, color}} />;
    case 'evil':
      return <EvilIcons {...{name, size, color}} />;
    case 'feather':
      return <Feather {...{name, size, color}} />;
    case 'ion':
      return <Ionicons {...{name, size, color}} />;
    case 'matcomm':
      return <MaterialCommunityIcons {...{name, size, color}} />;
    default:
      return <></>;
  }
};

export default Icon;
