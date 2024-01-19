import {StyleSheet} from 'react-native';
import {colors} from '../../style';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.primary,
    width: 14,
    height: 14,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
    color: colors.text.primary,
    fontWeight: 'bold',
  },
});

export default styles;
