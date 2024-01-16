import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../style';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: colors.background.secondary,
  },
  dotContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 8,
  },
  image: {
    width,
    height: height * 0.2,
  },
});

export default styles;
