import {StyleSheet} from 'react-native';
import {colors} from '../../style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.text.error,
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 12,
  },
  subTitle: {
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default styles;
