import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  map: {
    width,
    height: height * 0.75,
  },
});

export default styles;
