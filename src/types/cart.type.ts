import type {IProduct} from './product.type';

interface ICart {
  product: IProduct;
  count: number;
}

export type {ICart};
