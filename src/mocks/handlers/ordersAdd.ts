import { rest } from 'msw';
import { database } from '../database';

export interface Items {
  size: string;
  toppings: string[];
}

export interface FormValues {
  name: string;
  email: string;
  address: string;
  contact: string;
  items: Items[];
}

const idGenerator = () => {
  const s4 = () =>
    (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  const hash = s4() + s4();

  return hash.toUpperCase();
};

const ordersAdd = rest.post<FormValues>('/api/orders/add', (req, res, ctx) => {
  const body = req.body;
  const newOrder = {
    id: idGenerator(),
    address: body?.address,
    time: 'Just now',
    accepted: false,
    transit: false,
    completed: false,
    canceled: false,
  };

  database.orders.push(newOrder);

  return res(ctx.status(201), ctx.json(newOrder));
});

export { ordersAdd };
