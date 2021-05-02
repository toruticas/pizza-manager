import { FC } from 'react';
import { TableRow, TableCell, Text } from 'grommet';

import { StatusOptions } from './enums';
import { Status } from './Status';

const OrderItem: FC<{
  id: string;
  address: string;
  time: string;
  index: number;
  status: StatusOptions;
}> = ({ id, address, time, status, index }) => (
  <TableRow
    data-testid={id}
    style={{ backgroundColor: index % 2 === 1 ? '#F8F8F8' : 'white' }}
  >
    <TableCell>
      <Text size='small'>{id}</Text>
    </TableCell>
    <TableCell>
      <Text size='small'>{address}</Text>
    </TableCell>
    <TableCell>
      <Text size='small'>{time}</Text>
    </TableCell>
    <TableCell>
      <Status id={id} status={status} />
    </TableCell>
  </TableRow>
);

export { OrderItem };
