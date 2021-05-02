import { Box, Text } from 'grommet';

import { OrdersTable } from './OrdersTable';
import { Summary } from './Summary';
import { useOrders } from './useOrders';
import { Container } from 'components/Container';

const OrdersStatus = () => {
  const { data } = useOrders();

  return (
    <Box>
      <Box pad={{ bottom: 'medium' }}>
        <Text color='white' weight='bold'>
          Order Management
        </Text>
        <Text color='white' size='small'>
          Manage your orders here and get an overview of status
        </Text>
      </Box>

      <Container>
        <Summary
          total={data.summary.total}
          completed={data.summary.completed}
          pending={data.summary.pending}
          canceled={data.summary.canceled}
        />
        <OrdersTable data={data} />
      </Container>
    </Box>
  );
};

export { OrdersStatus };
