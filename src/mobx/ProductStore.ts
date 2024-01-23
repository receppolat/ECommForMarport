import {action, makeObservable, observable} from 'mobx';

class ProductStore {
  constructor() {
    makeObservable(this);
  }

  @observable counter = 0;

  @action incCount = () => {
    this.counter += 1;
  };

  @action decCount = () => {
    this.counter -= 1;
  };

  @action reset = () => {
    this.counter = 0;
  };
}

export default new ProductStore();
