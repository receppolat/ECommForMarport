import axios from 'axios';
import {BASE_URL} from '../Config';

class ProductService {
  getCategories = async () => {
    const response = await axios.get(BASE_URL + '/products/categories');
    return response;
  };
}

export default new ProductService();
