import {ChartProps} from 'react-native-svg-charts';

interface ILineChartProps extends ChartProps<number> {
  size?: number;
  showGrid?: boolean;
}

export type {ILineChartProps};
