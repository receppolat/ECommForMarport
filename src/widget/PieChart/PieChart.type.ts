import {PieChartData, PieChartProps} from 'react-native-svg-charts';

type IPieData = PieChartData & {label?: string};

interface IPieChartProps extends Omit<PieChartProps<IPieData>, 'data'> {
  size?: number;
  showGrid?: boolean;
  data: IPieData[];
}

export type {IPieChartProps};
