import { rest } from 'msw';

const dashboard = rest.get('/api/dashboard', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      status: {
        total: 150,
        delivered: 120,
        pending: 30,
      },
      sales: {
        total: 14543,
        currency: 'USD',
      },
      history: {
        labels: [
          '',
          '08 AM',
          '11 AM',
          '01 PM',
          '03 PM',
          '04 PM',
          '06 PM',
          '08PM',
          '10 PM',
          '',
        ],
        data: [25, 20, 30, 25, 35, 20, 30, 25, 35, 30],
      },
      report: {
        ontime: '+29.7%',
        late: '53.4%',
        performance: '+0.05%',
      },
    }),
  );
});

export { dashboard };
