import {showMessage} from 'react-native-flash-message';

const showErrorMessage = message => {
  showMessage({
    message,
    description: 'Hata',
    type: 'success',
    animated: true,
    animationDuration: 2000,
    autoHide: true,
    icon: 'danger',
  });
};

export {showErrorMessage};
