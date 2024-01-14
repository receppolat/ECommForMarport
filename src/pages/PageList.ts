import {Login, Register} from './Auth';
import Home from './Home';

const PAGE_LIST = [
  {
    name: 'Login',
    component: Login,
    options: {},
  },
  {
    name: 'Register',
    component: Register,
    options: {},
  },
  {
    name: 'Home',
    component: Home,
    options: {},
  },
];

export {PAGE_LIST};
