import {StyleSheet} from 'react-native';
import {colors} from '../../../../style';

const DOT_SIZE = 12;

const styles = StyleSheet.create({
  container: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    backgroundColor: colors.background.primary,
    borderRadius: 9,
    marginRight: 3,
  },
  activeContainer: {
    backgroundColor: colors.background.brand + 'CC',
    width: DOT_SIZE * 4,
  },
});

export default styles;
