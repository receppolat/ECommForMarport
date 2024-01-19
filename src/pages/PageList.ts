import ECommTabNavigation from '../routes/ecomm-tab';

import {
  Cart,
  CategoryDetail,
  Home,
  Login,
  Notification,
  ProductDetail,
  Profile,
  Register,
} from './';

import type {NativeStackNavigationOptions} from '@react-navigation/native-stack/lib/typescript/src/types';

enum Prefix {
  ECOMM = 'ECOMM',
}

enum NType {
  TAB = 'TAB',
  STACK = 'STACK',
}

enum Pages {
  Login = 'Login',
  Register = 'Register',
  CategoryDetail = 'CategoryDetail',
  ProductDetail = 'ProductDetail',
  ECommTab = 'ECommTab',
  Home = 'Home',
  Cart = 'Cart',
  Profile = 'Profile',
  Notification = 'Notification',
}

type IPageList = {
  [key in Pages]: {
    name: string;
    component: any;
    options?: NativeStackNavigationOptions;
  } & (
    | {
        type: NType.TAB;
        initialParams: any;
        options?: any;
      }
    | {
        type: NType.STACK;
      }
  );
};

const PAGE_LIST: IPageList = {
  [Pages.ECommTab]: {
    name: `${Prefix.ECOMM}_${Pages.ECommTab}`,
    component: ECommTabNavigation,
    type: NType.STACK,
    options: {headerShown: false, title: ''},
  },

  [Pages.Login]: {
    name: `${Prefix.ECOMM}_${Pages.Login}`,
    component: Login,
    type: NType.STACK,
    options: {
      title: 'Login',
    },
  },

  [Pages.Register]: {
    name: `${Prefix.ECOMM}_${Pages.Register}`,
    component: Register,
    type: NType.STACK,
    options: {
      title: 'Register',
    },
  },

  [Pages.CategoryDetail]: {
    name: `${Prefix.ECOMM}_${Pages.CategoryDetail}`,
    component: CategoryDetail,
    type: NType.STACK,
    options: {
      title: 'Categor yDetail',
    },
  },

  [Pages.ProductDetail]: {
    name: `${Prefix.ECOMM}_${Pages.ProductDetail}`,
    component: ProductDetail,
    type: NType.STACK,
    options: {
      title: 'Product Detail',
    },
  },

  [Pages.Notification]: {
    name: `${Prefix.ECOMM}_${Pages.Notification}`,
    component: Notification,
    type: NType.STACK,
    options: {
      title: 'Bildirimler',
    },
  },

  //Tab
  [Pages.Home]: {
    name: `${Prefix.ECOMM}_${Pages.Home}`,
    component: Home,
    type: NType.TAB,
    initialParams: {
      name: 'rocket1',
      type: 'ant',
      title: 'Ana Sayfa',
    },
  },

  [Pages.Cart]: {
    name: `${Prefix.ECOMM}_${Pages.Cart}`,
    component: Cart,
    type: NType.TAB,
    initialParams: {
      type: 'ant',
      name: 'shoppingcart',
      title: 'Sepet',
      count: 2,
    },
  },

  [Pages.Profile]: {
    name: `${Prefix.ECOMM}_${Pages.Profile}`,
    component: Profile,
    type: NType.TAB,
    initialParams: {
      name: 'user',
      type: 'ant',
      title: 'Profil',
      count: 5,
    },
  },
};

export {PAGE_LIST, NType};
