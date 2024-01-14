import {StyleSheet} from 'react-native';
import {colors} from '../../style/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.background.brand,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.global.white,
    marginLeft: 12,
  },
});

export default styles;
