import Boxes from '../screens/boxes';
import Hives from '../screens/hive';
import Home from '../screens/home';

export const routes = [
  {
    path: '/home',
    component: Home,
    name: 'home',
  },

  {
    name: 'boxes',
    path: '/boxes',
    component: Boxes,
  },
  {
    name: 'hives',
    path: '/hives',
    component: Hives,
  },
];
