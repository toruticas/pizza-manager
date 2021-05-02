import { dashboard } from './dashboard';
import { orders } from './orders';
import { ordersAdd } from './ordersAdd';
import { ordersUpdate } from './ordersUpdate';
import { prices } from './prices';

const handlers = [dashboard, orders, ordersAdd, ordersUpdate, prices];

export { handlers };
