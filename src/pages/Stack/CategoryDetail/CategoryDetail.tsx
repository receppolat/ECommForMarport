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

const CategoryDetail = props => {
  const {category} = props.route?.params ?? {};

  const [data, setData] = React.useState<IProduct[]>();

  React.useEffect(() => {
    category && getProductsByCategory();
  }, [category]);

  const getProductsByCategory = () => {
    productService
      .getProductsByCategory(category)
      .then(res => {
        setData(res.data?.products ?? []);
      })
      .catch(console.log);
  };

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
