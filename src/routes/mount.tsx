import { Dashboard } from 'pages/Dashboard';
import { OrdersNew } from 'pages/OrdersNew';
import { OrdersStatus } from 'pages/OrdersStatus';

import { home, dashboard, ordersNew, ordersStatus } from './base';

const routes = [
  {
    ...home,
    component: Dashboard,
  },
  {
    ...dashboard,
    component: Dashboard,
  },
  {
    ...ordersNew,
    component: OrdersNew,
  },
  {
    ...ordersStatus,
    component: OrdersStatus,
  },
];

export { routes };
