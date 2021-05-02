import useSWR from 'swr';
import { Box } from 'grommet';

import { Container } from 'components/Container';

import { DeliveryStatus } from './DeliveryStatus';
import { TotalSales } from './TotalSales';
import { OrderHistory } from './OrderHistory';
import { Report } from './Report';

const Dashboard = () => {
  const { data } = useSWR('/api/dashboard');

  return (
    <Container>
      <Box direction='row' justify='between' align='center'>
        <DeliveryStatus
          total={data.status.total}
          delivered={data.status.delivered}
          pending={data.status.pending}
        />
        <TotalSales currency={data.sales.currency} total={data.sales.total} />
      </Box>

      <Box direction='row' justify='between' pad={{ top: 'xlarge' }}>
        <OrderHistory data={data.history} />
        <Report
          late={data.report.late}
          ontime={data.report.ontime}
          performance={data.report.performance}
        />
      </Box>
    </Container>
  );
};

export { Dashboard };
