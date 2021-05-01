import useSWR from 'swr';

import { getStatus } from './enums';

const generateSummary = (orders: any) => {
  let completed = 0;
  let canceled = 0;
  let pending = 0;

  for (let item of orders) {
    if (item.canceled) {
      canceled++;
    } else if (item.completed) {
      completed++;
    } else {
      pending++;
    }
  }

  return {
    total: orders.length,
    completed,
    pending,
    canceled,
  };
};

const useOrders = () => {
  const { data, error, isValidating } = useSWR('/api/orders');

  return {
    data: {
      summary: generateSummary(data.orders),
      orders: data.orders.map((order: any) => ({
        id: order.id,
        address: order.address,
        time: order.time,
        status: getStatus(order),
      })),
    },
    error,
    isValidating,
  };
};

export { useOrders };
