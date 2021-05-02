import { rest } from 'msw';
import { Order } from 'types';

import { database } from '../database';

const ordersUpdate = rest.put<Partial<Order>>(
  '/api/orders/update/:id',
  (req, res, ctx) => {
    database.orders.forEach((order, i) => {
      if (order.id === req.params.id) {
        database.orders.splice(i, 1, {
          ...order,
          ...req.body,
        });
      }
    });

    return res(ctx.status(200), ctx.json(database.orders));
  },
);

export { ordersUpdate };
