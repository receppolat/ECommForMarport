import {TouchableOpacityProps} from 'react-native';

interface IBadgeProps extends TouchableOpacityProps {
  text: string;
  style?: any;
  textStyle?: any;
}

export type {IBadgeProps};
