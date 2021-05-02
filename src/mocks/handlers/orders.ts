import { rest } from 'msw';
import { database } from '../database';

const orders = rest.get('/api/orders', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      orders: database.orders,
    }),
  );
});

export { orders };
