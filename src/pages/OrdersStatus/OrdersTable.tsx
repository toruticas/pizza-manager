import { FC } from 'react';

import { OrderItem } from './OrderItem';

const OrdersTable: FC<{ data: any }> = ({ data }) => (
  <table data-testid='orders-table'>
    <thead>
      <tr>
        <th>Item ID</th>
        <th>Address</th>
        <th>Ordered Time</th>
        <th>Status / Action</th>
      </tr>
    </thead>
    <tbody>
      {data.orders.map((order: any) => (
        <OrderItem
          key={order.id}
          id={order.id}
          address={order.address}
          time={order.time}
          status={order.status}
        />
      ))}
    </tbody>
  </table>
);

export { OrdersTable };
