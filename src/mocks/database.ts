const dashboard = {
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
};

const orders = [
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
];

const sizes = [
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
];

const toppings = [
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
];

const database = {
  dashboard,
  orders,
  sizes,
  toppings,
};

export { database };
