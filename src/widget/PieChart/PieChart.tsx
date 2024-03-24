import React from 'react';
import {View} from 'react-native';
import {PieChart as PC, Grid} from 'react-native-svg-charts';
import styles from './PieChart.style';
import {IPieChartProps} from './PieChart.type';

const PieChart = ({
  size = 200,
  data = [],
  showGrid = true,
  innerRadius = 30,
  outerRadius = '75%',
  ...rest
}: IPieChartProps) => {
  return (
    <View style={styles.container}>
      <PC
        {...{
          style: {height: size, width: size},
          outerRadius,
          innerRadius,
          data,
          ...rest,
        }}>
        {showGrid && <Grid />}
      </PC>
    </View>
  );
};

export default PieChart;
