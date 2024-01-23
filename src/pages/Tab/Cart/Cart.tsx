import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../style';
import {observer} from 'mobx-react-lite';
import {cartStore} from '../../../mobx';
import {ICart} from '../../../types';
import {CartCard} from '../../../components';
import styles from './Cart.style';

const Cart = () => {
  const renderItem: ListRenderItem<ICart> = ({item}) => (
    <CartCard {...{cart: item}} />
  );

  const clearAll = () => cartStore.clearAll();

  const confirmClearAll = () =>
    Alert.alert(
      'Attantion',
      'Will delete all items from your cart. Are you sure ?',
      [{text: 'No'}, {text: "I'am sure", onPress: clearAll}],
    );

  return (
    <View style={[globalStyles.container, styles.container]}>
      <FlatList
        {...{
          data: cartStore.cart,
          renderItem,
          showsVerticalScrollIndicator: false,
        }}
      />
      {!!cartStore.cart.length && (
        <TouchableOpacity
          style={styles.clearAllContainer}
          onPress={confirmClearAll}>
          <Text style={styles.clearAll}>Clear All</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default observer(Cart);
