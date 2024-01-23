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
import type {ICart, IProduct} from '../../../types';
import {globalStyles} from '../../../style';
import styles from './ProductDetail.style';
import {Button, Counter, ProductCard, Slider} from '../../../components';
import useFetch from '../../../hooks/useFetch';
import {cartStore} from '../../../mobx';

const ProductDetail = props => {
  const {id} = props.route?.params ?? {};

  const flatlistRef = React.useRef<FlatList>(null);

  const [product, setProduct] = React.useState<IProduct>();
  const [count, setCount] = React.useState<string>('1');
  const [inCart, setInCart] = React.useState<boolean>(false);

  const {data}: {data: IProduct[]} = useFetch({
    service: productService.getProductsByCategory,
    filter: product?.category,
    responseKey: 'data.products',
  });

  React.useEffect(() => {
    id && getProductById();
  }, [id]);

  React.useEffect(() => {
    checkCount();
  }, [id, product]);

  const checkCount = () => {
    if (id) {
      const cart = cartStore.cart.find(x => x.product.id === id);
      const cnt = cart ? cart.count.toString() : '1';
      setCount(cnt);
      setInCart(!!cart);
    }
  };

  const getProductById = () => {
    productService
      .getProductById(id)
      .then(res => {
        setProduct(res.data);
      })
      .catch(console.log);
  };

  const addToCart = () => {
    setInCart(true);
    const cart: ICart = {
      count: Number(count),
      product,
    };

    cartStore.addToCart(cart);
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
          <Counter {...{value: count, onChangeText: setCount}} />
          <Button
            {...{
              title: inCart ? 'Update To Cart' : 'Add To Cart',
              onPress: addToCart,
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
