// React and React Native
import {View, Text, FlatList} from 'react-native';
import type {ListRenderItem} from 'react-native';
import React from 'react';

// Components
import {ProductCard} from '../../../components';

// Services
import {productService} from '../../../services';

// Styles and Types
import {globalStyles} from '../../../style';
import styles from './CategoryDetail.style';
import type {IProduct} from '../../../types';
import useFetch from '../../../hooks/useFetch';

const CategoryDetail = props => {
  const {category} = props.route?.params ?? {};
  const {data} = useFetch({
    service: productService.getProductsByCategory,
    filter: category,
    responseKey: 'data.products',
  });

  const renderItem: ListRenderItem<IProduct> = ({item}) => (
    <ProductCard {...{product: item}} />
  );

  return (
    <View style={[globalStyles.container, styles.container]}>
      <Text style={styles.title}>{category}'s products</Text>
      <FlatList
        {...{
          data,
          renderItem,
          numColumns: 2,
          columnWrapperStyle: styles.flatlistColumnWrapperStyle,
        }}
      />
    </View>
  );
};

export default CategoryDetail;
