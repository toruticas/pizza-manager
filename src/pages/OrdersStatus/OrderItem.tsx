import { FC } from 'react';

import { StatusOptions } from './enums';
import { Status } from './Status';

const OrderItem: FC<{
  id: string;
  address: string;
  time: string;
  status: StatusOptions;
}> = ({ id, address, time, status }) => (
  <tr data-testid={id}>
    <td>{id}</td>
    <td>{address}</td>
    <td>{time}</td>
    <td>
      <Status status={status} />
    </td>
  </tr>
);

export { OrderItem };
