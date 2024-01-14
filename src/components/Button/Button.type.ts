import {TouchableOpacityProps} from 'react-native';

interface IButtonProps extends TouchableOpacityProps {
  title?: string;
  loading?: boolean;
}

export type {IButtonProps};
