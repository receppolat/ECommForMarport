import {StyleSheet} from 'react-native';

import {colors, padding, radius} from '../../style';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.secondary,
    paddingHorizontal: padding.large,
    paddingVertical: padding.xlarge,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: radius.medium,
  },
});

export default styles;
