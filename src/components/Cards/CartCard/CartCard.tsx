import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import type {ICartCardProps} from './CartCard.type';
import styles from './CartCard.style';
import {formatCurrency} from '../../../utils';
import {Icon} from '../..';
import {navigateTo} from '../../../routes/helper';
import {PAGE_LIST} from '../../../pages/PageList';
import {cartStore} from '../../../mobx';

const CartCard = (props: ICartCardProps) => {
  const {cart} = props;

  const price = cart.product.price * cart.count;

  const navigateToDetail = () =>
    navigateTo(PAGE_LIST.ProductDetail.name, {id: cart.product.id});

  const deleteItemFromCartById = () =>
    cartStore.deleteProductFromCartById(cart.product.id);

  return (
    <TouchableOpacity onPress={navigateToDetail} style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          {...{source: {uri: cart.product.thumbnail}, style: styles.image}}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{cart.product.title}</Text>
          <Text style={styles.brand}>{cart.product.brand}</Text>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{`Toplam ${cart.count} adet ${formatCurrency(
          price,
        )} tutarlı ürün`}</Text>
      </View>
      <TouchableOpacity
        onPress={deleteItemFromCartById}
        style={styles.deleteContainer}>
        <Icon {...{name: 'delete', type: 'matcomm', color: 'red'}} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default CartCard;
