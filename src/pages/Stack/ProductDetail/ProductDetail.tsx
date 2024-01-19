import {
  View,
  Text,
  Image,
  ActivityIndicator,
  FlatList,
  ListRenderItem,
} from 'react-native';
import React from 'react';
import {productService} from '../../../services';
import type {IProduct} from '../../../types';
import {globalStyles} from '../../../style';
import styles from './ProductDetail.style';
import {Button, ProductCard, Slider} from '../../../components';

const ProductDetail = props => {
  const {id} = props.route?.params ?? {};

  const flatlistRef = React.useRef<FlatList>(null);

  const [data, setData] = React.useState<IProduct[]>([]);
  const [product, setProduct] = React.useState<IProduct>();
  const [counter, setCounter] = React.useState<number>(0);

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter(counter => {
  //       if (counter < product?.images.length) {
  //         flatlistRef.current.scrollToIndex({
  //           animated: true,
  //           index: counter + 1,
  //         });
  //         return counter++;
  //       }
  //       return 0;
  //     });
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  React.useEffect(() => {
    id && getProductById();
  }, [id]);

  React.useEffect(() => {
    product && getSimilarProducts();
  }, [product]);

  const getProductById = () => {
    productService
      .getProductById(id)
      .then(res => {
        setProduct(res.data);
      })
      .catch(console.log);
  };

  const getSimilarProducts = () => {
    productService
      .getProductsByCategory(product.category)
      .then(res => {
        setData(res.data?.products);
      })
      .catch(console.log);
  };

  if (!product) return <ActivityIndicator />;

  const renderItem: ListRenderItem<IProduct> = ({item}) => (
    <ProductCard {...{product: item, horizontal: true}} />
  );

  return (
    <View style={[globalStyles.container, styles.container]}>
      <Slider {...{images: product.images}} />
      <View style={styles.inContainer}>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>Bu ürün sadece {product.price}₺</Text>
        <View style={styles.addToCartContainer}>
          <Text style={styles.price}> - 1 +</Text>
          <Button
            {...{
              title: 'Sepete Ekle',
              style: styles.button,
            }}
          />
        </View>
        <Text style={styles.similarTitle}>Benzer Ürünler</Text>
        <FlatList
          {...{
            ref: flatlistRef,
            data: data.filter(x => x.id !== product.id),
            renderItem,
            horizontal: true,
            showsHorizontalScrollIndicator: false,
          }}
        />
      </View>
    </View>
  );
};

export default ProductDetail;
