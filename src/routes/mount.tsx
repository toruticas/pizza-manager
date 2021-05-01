import { Dashboard } from 'pages/Dashboard';
import { OrdersNew } from 'pages/OrdersNew';
import { OrdersStatus } from 'pages/OrdersStatus';

import { dashboard, ordersNew, ordersStatus } from './base';

const routes = [
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
