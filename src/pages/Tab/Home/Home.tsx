import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  Text,
  View,
} from 'react-native';
import React from 'react';

import {CategoryCard} from '../../../components';

import {productService} from '../../../services';
import useFetch from '../../../hooks/useFetch';

import styles from './Home.style';
import {globalStyles} from '../../../style';
import {useAppDispatch} from '../../../redux';
import {incCount} from '../../../redux/slices/counter-slice';
import {productStore} from '../../../mobx';
import {useTranslation} from 'react-i18next';

const Home = () => {
  const {data, status} = useFetch({service: productService.getCategories});
  const {t} = useTranslation();
  const dispatch = useAppDispatch(); // Redux

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
            ListHeaderComponent: (
              <Text
                onPress={() => {
                  dispatch(incCount()); // Redux
                  productStore.incCount(); // Mobx
                }}
                style={styles.title}>
                {t('CATEGORIES')}
              </Text>
            ),
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
