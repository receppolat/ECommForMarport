import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  Text,
  View,
} from 'react-native';
import React from 'react';

import {CategoryCard} from '../../../components';
import {globalStyles} from '../../../style';

import styles from './Home.style';
import {productService} from '../../../services';
import useFetch from '../../../hooks/useFetch';

const Home = () => {
  const {data, status} = useFetch({service: productService.getCategories});

  const renderItem: ListRenderItem<string> = ({item, index}) => (
    <CategoryCard {...{category: item, index}} />
  );

  return (
    <View style={globalStyles.container}>
      {status === 'loading' ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          {...{
            data,
            renderItem,
            showsVerticalScrollIndicator: false,
            ListHeaderComponent: <Text style={styles.title}>Categories</Text>,
            ListFooterComponent: data.length !== 0 && (
              <Text style={styles.title}>Show More</Text>
            ),
            ListEmptyComponent: <Text style={styles.title}>Empty</Text>,
          }}
        />
      )}
    </View>
  );
};

export default Home;
