import { FC } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableCell,
  Text,
} from 'grommet';

import { OrderItem } from './OrderItem';

const OrdersTable: FC<{ data: any }> = ({ data }) => (
  <Box pad={{ top: 'large' }}>
    <Table data-testid='orders-table'>
      <TableHeader>
        <TableRow>
          <TableCell>
            <Text size='medium' color='dark-5'>
              Item ID
            </Text>
          </TableCell>
          <TableCell>
            <Text size='medium' color='dark-5'>
              Address
            </Text>
          </TableCell>
          <TableCell>
            <Text size='medium' color='dark-5'>
              Ordered Time
            </Text>
          </TableCell>
          <TableCell>
            <Text size='medium' color='dark-5'>
              Status / Action
            </Text>
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.orders.map((order: any, index: number) => (
          <OrderItem
            key={order.id}
            id={order.id}
            address={order.address}
            time={order.time}
            status={order.status}
            index={index}
          />
        ))}
      </TableBody>
    </Table>
  </Box>
);

export { OrdersTable };
