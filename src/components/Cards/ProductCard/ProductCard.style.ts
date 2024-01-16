import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../style';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    width: width * 0.4,
    justifyContent: 'space-between',
  },
  horizontal: {
    marginRight: 14,
  },
  stockContainer: {
    position: 'absolute',
    backgroundColor: colors.background.brand,
    top: 16,
    right: 18,
    width: '25%',
    paddingTop: 4,
    alignItems: 'center',
    height: 30,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  stock: {
    fontSize: 12,
    color: colors.global.white,
  },
  thumbnail: {
    width: '100%',
    height: 60,
    borderRadius: 4,
    marginBottom: 8,
  },
  brand: {
    color: colors.text.secondary,
    fontSize: 12,
  },
  title: {
    color: colors.text.primary,
    fontWeight: '500',
  },
  price: {
    color: colors.text.brand,
    fontWeight: '600',
  },
  rating: {
    color: colors.global.green,
  },
});

export default styles;
