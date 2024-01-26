import {PermissionsAndroid} from 'react-native';

const formatCurrency = (price = 0, code = 'TRY') =>
  new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: code,
  }).format(price);

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Marport Konum Kullanımı',
        message: 'Konumunuza erişebilir miyiz?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );

    if (granted === 'granted') {
      console.log('You can use Geolocation');
      return true;
    } else {
      console.log('You cannot use Geolocation');
      return false;
    }
  } catch (err) {
    return false;
  }
};

export {formatCurrency, requestLocationPermission};
