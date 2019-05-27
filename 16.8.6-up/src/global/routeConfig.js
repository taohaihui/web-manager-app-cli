import Frame from '../layout/frame/Frame';
import Login from '../view/login/Login';
import Index from '../view/index/Index';

const routerData = [
  {
    type: 'Route',
    path: '/',
    component: Frame,
    children: [
      {
        type: 'IndexRedirect',
        path: 'login'
      },
      {
        type: 'Route',
        path: 'login',
        title: '登录',
        component: Login
      },
      {
        type: 'Route',
        path: 'index',
        title: '首页',
        component: Index
      }
    ]
  }
];

export default routerData;