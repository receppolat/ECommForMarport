import type {TextInputProps} from 'react-native';

type IState = React.Dispatch<React.SetStateAction<string>>;

interface ICounterProps {
  value: string;
  onChangeText: IState; // TODO: () => void allow
  style?: any;
  textInputProps?: TextInputProps;
}

export type {ICounterProps};
