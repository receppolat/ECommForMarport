import React from 'react';
import {View} from 'react-native';
import {LineChart as LC, Grid} from 'react-native-svg-charts';
import styles from './LineChart.style';
import {ILineChartProps} from './LineChart.type';

const LineChart = ({
  size = 200,
  data = [],
  showGrid = true,
  ...rest
}: ILineChartProps) => {
  const max = Math.max(...data);
  const min = Math.min(...data);

  return (
    <View style={styles.container}>
      <LC
        {...{
          style: {height: size},
          gridMin: min - min * 1.1,
          gridMax: max + max * 0.1,
          data,
          svg: {
            strokeWidth: 2,
            stroke: 'red',
          },
          contentInset: {top: 20, bottom: 40},
          ...rest,
        }}>
        {showGrid && <Grid />}
      </LC>
    </View>
  );
};

export default LineChart;
