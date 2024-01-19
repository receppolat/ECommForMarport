import {StyleSheet} from 'react-native';
import {colors} from '../../../style';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  title: {
    color: colors.title.primary,
    fontSize: 20,
    marginBottom: 20,
  },
  flatlistColumnWrapperStyle: {
    justifyContent: 'space-between',
  },
});

export default styles;
