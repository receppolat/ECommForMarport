import type {TouchableOpacityProps} from 'react-native';

interface IBadgeProps extends TouchableOpacityProps {
  text: string | number;
  style?: any;
  textStyle?: any;
}

export type {IBadgeProps};
