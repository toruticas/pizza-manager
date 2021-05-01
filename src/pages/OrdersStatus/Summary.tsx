import { FC } from 'react';

const Summary: FC<{
  total: number;
  completed: number;
  pending: number;
  canceled: number;
}> = ({ total, completed, pending, canceled }) => (
  <div data-testid='summary-section'>
    <p>Total items in inventory</p>
    <p>
      <span>{total}</span> <small>items</small>
    </p>
    <div>
      <p>Completed</p>
      <p>{completed}</p>
    </div>
    <div>
      <p>Pending</p>
      <p>{pending}</p>
    </div>
    <div>
      <p>Canceled</p>
      <p>{canceled}</p>
    </div>
  </div>
);

export { Summary };
