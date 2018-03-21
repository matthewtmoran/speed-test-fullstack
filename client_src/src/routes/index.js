import {
  Home,
  SpeedTestsContainer,
  Login,
  Signup,
  Dashboard,
} from '../views/pages';
import { CoreLayout } from '../views/layouts';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const routes = [
  {
    path: '/',
    component: Home,
    layout: PublicRoute,
    exact: true,
  }, {
    path: '/speedtests/:id',
    component: SpeedTestsContainer,
    layout: PrivateRoute,
    exact: true,
  }, {
    path: '/login',
    component: Login,
    layout: PublicRoute,
    exact: true,
  }, {
    path: '/signup',
    component: Signup,
    layout: PublicRoute,
    exact: true,
  }, {
    path: '/dashboard',
    component: Dashboard,
    layout: PrivateRoute,
    exact: true,
  },
];

export {
  PublicRoute,
  PrivateRoute
}

export default routes;