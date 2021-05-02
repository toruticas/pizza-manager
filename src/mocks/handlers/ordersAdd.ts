import { rest } from 'msw';

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

const ordersAdd = rest.post<FormValues>('/api/orders/add', (req, res, ctx) => {
  const body = req.body;

  return res(
    ctx.status(201),
    ctx.json({
      orders: {
        id: 'AB75231',
        address: body?.address,
        time: 'Just now',
        accepted: false,
        transit: false,
        completed: false,
        canceled: false,
      },
    }),
  );
});

export { ordersAdd };
