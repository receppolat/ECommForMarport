import NosyaAxios from './NosyaAxios';

class MapService {
  getStores = async (params?: any) => {
    const response = await NosyaAxios.get('/getTurkey', {
      params,
      headers: {
        Authorization:
          'Bearer Ni5DmfIeTv0or4iJINMXBPbP8nWQfcUK6uQJGmEBDWXryOkdb19vxAHlwYTI',
      },
    });
    return response;
  };
}

export default new MapService();
