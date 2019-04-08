import Home from '../views';
import Header from '../views/Header';
import Footer from '../views/Footer';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/header',
    component: Header,
  },
  {
    path: '/footer',
    component: Footer,
  },
];

export default routes;
