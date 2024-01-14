import {StyleSheet} from 'react-native';
import {colors} from './colors';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
    justifyContent: 'center',
    padding: 24,
  },
});

export default globalStyles;
