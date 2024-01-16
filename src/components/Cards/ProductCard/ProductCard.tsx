// React and React Native
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

// Helpers
import {navigateTo} from '../../../routes/helper';

// Styles and Types
import styles from './ProductCard.style';
import {globalStyles} from '../../../style';
import type {IProductCardProps} from './ProductCard.type';

const ProductCard = (props: IProductCardProps) => {
  const {product, horizontal = false} = props;

  const navigateToDetail = () => navigateTo('ProductDetail', {id: product.id});

  return (
    <TouchableOpacity
      disabled={!product.stock}
      onPress={navigateToDetail}
      style={[
        globalStyles.cardContainer,
        styles.container,
        horizontal && styles.horizontal,
      ]}>
      <Image
        {...{
          source: {uri: product.thumbnail},
          style: styles.thumbnail,
          resizeMode: 'cover',
        }}
      />
      <View style={styles.stockContainer}>
        <Text numberOfLines={1} style={styles.stock}>
          {product.discountPercentage.toFixed(0)}%
        </Text>
      </View>
      <Text style={styles.brand}>{product.brand}</Text>
      <Text numberOfLines={2} style={styles.title}>
        {product.title}
      </Text>

      <View style={styles.priceContainer}>
        <Text style={styles.rating}>{product.rating}</Text>
        <Text style={styles.price}>{product.price}₺</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
