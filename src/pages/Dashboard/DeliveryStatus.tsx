import { FC } from 'react';

const DeliveryStatus: FC<{
  total: number;
  delivered: number;
  pending: number;
}> = ({ total, delivered, pending }) => (
  <aside>
    <h1>Delivery Status</h1>
    <h3>Total Orders</h3>
    <h3>
      <strong>{total}</strong>
    </h3>

    <div>
      <p>{delivered}</p>
      <p>Orders Delivered</p>
    </div>

    <div>
      <p>{pending}</p>
      <p>Pending Delivery</p>
    </div>
  </aside>
);

export { DeliveryStatus };
