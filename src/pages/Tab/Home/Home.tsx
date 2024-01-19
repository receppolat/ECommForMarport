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

const Home = () => {
  const [data, setData] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    setLoading(true);
    productService
      .getCategories()
      .then(res => setData(res.data ?? []))
      .catch(console.log)
      .finally(() => {
        setLoading(false);
      });
  };

  const renderItem: ListRenderItem<string> = ({item, index}) => (
    <CategoryCard {...{category: item, index}} />
  );

  return (
    <View style={globalStyles.container}>
      {loading ? (
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
