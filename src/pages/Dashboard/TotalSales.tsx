import { FC } from 'react';

const TotalSales: FC<{ currency: string; total: number }> = ({
  currency,
  total,
}) => (
  <aside>
    <h2>Total Sales</h2>
    <h2>
      <small>{currency}</small>
    </h2>
    <p>{total}</p>
  </aside>
);

export { TotalSales };
