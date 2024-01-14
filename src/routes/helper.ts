import {createRef} from 'react';

const navigationRef = createRef<any>();

const navigateTo = (route: any, params?: any) => {
  navigationRef.current?.navigate(route, params);
};

export {navigateTo, navigationRef};
