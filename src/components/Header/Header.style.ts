import {StyleSheet} from 'react-native';
import {colors} from '../../style';

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: colors.background.secondary,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeContainer: {
    position: 'absolute',
    right: 0,
    top: -3,
    borderWidth: 1,
    borderColor: colors.border.secondary,
  },
  title: {
    color: colors.title.primary,
    fontSize: 16,
    fontWeight: '500',
  },
  icon: {
    position: 'absolute',
    right: 24,
  },
});

export default styles;
