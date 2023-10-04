import { IRoute } from 'umi';
import Pages from '../constants/pages';

const routes: IRoute[] = [
  {
    path: '/',
    component: '@/pages/index',
    title: '首页',
  },
  {
    path: Pages.Home,
    component: '@/pages/index',
    title: '首页',
  },
  /* 404 */
  {
    path: '*',
    component: '@/pages/404',
    title: 'NOT FOUND',
  },
];

export default routes;
