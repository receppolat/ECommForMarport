import {action, makeObservable, observable} from 'mobx';
import type {ICart} from '../types';

class CartStore {
  constructor() {
    makeObservable(this);
  }

  @observable cart: ICart[] = [];

  @action addToCart = (cartItem: ICart) => {
    let prod = this.cart.find(cart => cart.product.id === cartItem.product.id);
    if (!!prod) {
      prod = {
        ...prod,
        count: cartItem.count,
      };
      this.deleteProductFromCartById(cartItem.product.id);
      this.cart = [...this.cart, prod];
    } else this.cart = [...this.cart, cartItem];
  };

  @action deleteProductFromCartById = (id: number) => {
    this.cart = this.cart.filter(x => x.product.id !== id);
  };

  @action clearAll = () => {
    this.cart = [];
  };
}

export default new CartStore();
