import {StyleSheet} from 'react-native';
import {colors} from '../../style';

const COUNTER_SIZE = 24;
const styles = StyleSheet.create({
  container: {
    width: '45%',
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countButtonContainer: {
    backgroundColor: colors.background.secondary,
    borderWidth: 1,
    borderColor: colors.border.secondary,
    width: COUNTER_SIZE,
    height: COUNTER_SIZE,
    borderRadius: COUNTER_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    maxWidth: '25%',
    height: 42,
    marginHorizontal: 12,
  },
});

export default styles;
