import {StyleSheet} from 'react-native';
import {colors} from '../../../style';

const IMAGE_SIZE = 44;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.secondary,
    marginBottom: 20,
    paddingLeft: 12,
    paddingVertical: 16,
    borderRadius: 8,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    height: IMAGE_SIZE,
    justifyContent: 'space-between',
    marginLeft: 12,
  },
  deleteContainer: {
    position: 'absolute',
    right: 0,
    height: 40,
    width: 40,
    top: 35,
    backgroundColor: colors.background.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
  },
  priceContainer: {
    marginTop: 20,
  },
  title: {
    color: colors.title.primary,
  },
  brand: {
    color: colors.text.secondary,
    fontSize: 12,
  },
  price: {
    color: colors.text.brand,
    fontSize: 12,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: 4,
  },
});

export default styles;
