import useSWR from 'swr';

import { DeliveryStatus } from './DeliveryStatus';
import { TotalSales } from './TotalSales';
import { OrderHistory } from './OrderHistory';
import { Report } from './Report';

const Dashboard = () => {
  const { data } = useSWR('/api/dashboard');

  return (
    <div>
      <div>
        <DeliveryStatus
          total={data.status.total}
          delivered={data.status.delivered}
          pending={data.status.pending}
        />
        <TotalSales currency={data.sales.currency} total={data.sales.total} />
      </div>

      <div>
        <OrderHistory />
        <Report
          late={data.report.late}
          ontime={data.report.ontime}
          performance={data.report.performance}
        />
      </div>
    </div>
  );
};

export { Dashboard };
