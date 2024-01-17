type Icon = 'ant' | 'entypo' | 'evil' | 'feather' | 'ion' | 'matcomm';

interface IIconProps {
  type: Icon;
  name: string;
  size?: number;
  color?: string;
}

export type {IIconProps};
