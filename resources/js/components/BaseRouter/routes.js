import Home from '../../views/Home/Home';
import Dashboard from '../../views/Dashboard/Dashboard';

export default [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/dashboard',
    exact: true,
    component: Dashboard,
  },
];