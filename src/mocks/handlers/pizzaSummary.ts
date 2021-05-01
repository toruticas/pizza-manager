import { rest } from 'msw';

const pizzaSummary = rest.get('/api/pizzaSummary', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      completed: 1,
      pendings: 0,
      totalSales: '11.98',
      timeAndOrders: {
        time: ['16 PM', '07 AM'],
        orders: [1, 1],
      },
    }),
  );
});

export { pizzaSummary };
