import { FC } from 'react';

const Report: FC<{
  late: string;
  ontime: string;
  performance: string;
}> = ({ late, ontime, performance }) => (
  <aside>
    <h2>Report</h2>
    <div>
      <h4>Ontime Delivery</h4>
      <p>{ontime}</p>
    </div>

    <div>
      <h4>Late Deliveries</h4>
      <p>{late}</p>
    </div>

    <div>
      <h4>Performance</h4>
      <p>{performance}</p>
    </div>
  </aside>
);

export { Report };
