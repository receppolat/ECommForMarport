import {StyleSheet} from 'react-native';
import {colors} from '../../../style/colors';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.border.primary,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxContainer: {
    backgroundColor: colors.background.brand + 26,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginRight: 12,
  },
  boxText: {
    color: colors.text.brand,
  },
  categoryText: {
    color: colors.text.primary,
  },
});

export default styles;
