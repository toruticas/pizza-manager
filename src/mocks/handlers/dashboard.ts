import { rest } from 'msw';
import { database } from '../database';

const dashboard = rest.get('/api/dashboard', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(database.dashboard));
});

export { dashboard };
