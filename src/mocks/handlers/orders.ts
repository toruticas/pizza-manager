import { rest } from 'msw';

const orders = rest.get('/api/orders', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      orders: [
        {
          id: 'AB75231',
          address: '4107 Clearview Drive, BURKET, Indiana',
          time: '5 minutes ago',
          accepted: false,
          transit: false,
          completed: false,
          canceled: false,
        },
        {
          id: 'HF54D25',
          address: '7 Randall Mill Street Somerset, NJ 08873',
          time: '10 minutes ago',
          accepted: true,
          transit: false,
          completed: false,
          canceled: false,
        },
        {
          id: 'AB75232',
          address: '900 Talbot Ave. Mason, OH 45040',
          time: '30 minutes ago',
          accepted: false,
          transit: true,
          completed: false,
          canceled: false,
        },
        {
          id: 'HF54D26',
          address: '7 Randall Mill Street Somerset, NJ 08873',
          time: '1 hour ago',
          accepted: false,
          transit: false,
          completed: true,
          canceled: false,
        },
        {
          id: 'AB75233',
          address: '4107 Clearview Drive, BURKET, Indiana',
          time: '2 hours ago',
          accepted: false,
          transit: false,
          completed: false,
          canceled: true,
        },
        {
          id: 'HF54D27',
          address: '7 Randall Mill Street Somerset, NJ 08873',
          time: '2 hours ago',
          accepted: false,
          transit: false,
          completed: true,
          canceled: false,
        },
        {
          id: 'AB75234',
          address: '4107 Clearview Drive, BURKET, Indiana',
          time: '4 hours ago',
          accepted: false,
          transit: false,
          completed: true,
          canceled: false,
        },
        {
          id: 'HF54D28',
          address: '7 Randall Mill Street Somerset, NJ 08873',
          time: '6 hours ago',
          accepted: false,
          transit: false,
          completed: true,
          canceled: false,
        },
        {
          id: 'HF54D29',
          address: '4107 Clearview Drive, BURKET, Indiana',
          time: '10 hours ago',
          accepted: false,
          transit: false,
          completed: true,
          canceled: false,
        },
      ],
    }),
  );
});

export { orders };
