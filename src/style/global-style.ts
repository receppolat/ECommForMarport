import {StyleSheet} from 'react-native';
import {colors} from './colors';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
    justifyContent: 'center',
    padding: 24,
  },
  cardContainer: {
    backgroundColor: colors.background.secondary,
    borderWidth: 1,
    borderColor: colors.border.primary,
    marginBottom: 12,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 8,
  },
});

export default globalStyles;
