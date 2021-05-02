import { rest } from 'msw';

const prices = rest.get('/api/prices', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      sizes: [
        {
          name: 'Large',
          price: 40.0,
          id: 1,
        },
        {
          name: 'Medium',
          price: 30.0,
          id: 2,
        },
        {
          name: 'Small',
          price: 20.0,
          id: 3,
        },
      ],
      toppings: [
        {
          name: 'Bacon',
          price: 3.5,
          id: 1,
        },
        {
          name: 'Pepperoni',
          price: 2.5,
          id: 2,
        },
        {
          name: 'Mushroom',
          price: 2.0,
          id: 3,
        },
        {
          name: 'Olive',
          price: 4.5,
          id: 4,
        },
        {
          name: 'Basil',
          price: 3.0,
          id: 5,
        },
        {
          name: 'Sweetcorn',
          price: 2.5,
          id: 6,
        },
        {
          name: 'Onion',
          price: 3.0,
          id: 7,
        },
        {
          name: 'Tomatoe',
          price: 3.5,
          id: 8,
        },
      ],
    }),
  );
});

export { prices };
