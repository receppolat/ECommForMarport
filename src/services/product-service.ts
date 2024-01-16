import AxiosInstance from './axios';

class ProductService {
  getCategories = async () => {
    const response = await AxiosInstance.get('/products/categories');
    return response;
  };

  getProductsByCategory = async category => {
    const response = await AxiosInstance.get(`/products/category/${category}`);
    return response;
  };

  getProductById = async id => {
    const response = await AxiosInstance.get(`/products/${id}`);
    return response;
  };
}

export default new ProductService();
