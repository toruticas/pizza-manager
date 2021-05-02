import { rest } from 'msw';
import { database } from '../database';

const prices = rest.get('/api/prices', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      sizes: database.sizes,
      toppings: database.toppings,
    }),
  );
});

export { prices };
