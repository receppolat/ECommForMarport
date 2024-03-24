import {StyleSheet} from 'react-native';
import {colors} from './colors';
import padding from './padding';
import radius from './radius';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
    justifyContent: 'center',
    padding: padding.xlarge,
  },
  cardContainer: {
    backgroundColor: colors.background.secondary,
    borderWidth: 1,
    borderColor: colors.border.primary,
    marginBottom: 12,
    paddingHorizontal: padding.medium,
    paddingVertical: padding.large,
    borderRadius: radius.small,
  },
});

export default globalStyles;
