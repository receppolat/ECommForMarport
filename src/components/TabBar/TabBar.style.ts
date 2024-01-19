import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../style';

const {width, height} = Dimensions.get('screen');

const base = StyleSheet.create({
  container: {
    backgroundColor: colors.background.secondary,
    height: height * 0.08,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: colors.border.secondary,
  },
  tabStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  midContainer: {
    top: (height * -0.04) / 2.5,
    borderRadius: width * 0.075,
    width: width * 0.15,
    height: width * 0.15,
  },
});

const passive = StyleSheet.create({
  ...base,
  midContainer: {
    ...base.midContainer,
    backgroundColor: colors.background.brand,
  },
});

const active = StyleSheet.create({
  ...base,
  midContainer: {
    ...base.midContainer,
    borderWidth: 1,
    borderColor: colors.border.primary,
    backgroundColor: colors.background.primary,
  },
});

const styles = {base, active, passive};

export default styles;
