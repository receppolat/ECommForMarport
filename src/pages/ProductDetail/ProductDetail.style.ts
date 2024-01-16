import {StyleSheet} from 'react-native';
import {colors} from '../../style';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    padding: 0,
  },
  inContainer: {
    paddingHorizontal: 12,
    paddingBottom: 16,
  },
  addToCartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  button: {
    width: '60%',
    borderRadius: 4,
  },
  image: {
    width: '100%',
    height: 200,
  },
  brand: {
    color: colors.text.secondary,
    marginBottom: 8,
  },
  title: {
    color: colors.text.primary,
    fontSize: 16,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  description: {
    color: colors.text.primary,
    marginBottom: 12,
  },
  price: {
    color: colors.text.brand,
    fontWeight: '600',
  },
  similarTitle: {
    marginBottom: 20,
    color: colors.title.primary,
    fontWeight: '600',
    fontSize: 16,
  },
});

export default styles;
