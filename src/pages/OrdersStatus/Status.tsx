import { FC } from 'react';
import { mutate } from 'swr';
import { Button, Text } from 'grommet';

import { StatusOptions } from './enums';

const Status: FC<{ id: string; status: StatusOptions }> = ({ id, status }) => {
  const updateStatus = async (status: string) => {
    try {
      const base = {
        accepted: false,
        transit: false,
        completed: false,
        canceled: false,
      };

      const response = await fetch(`/api/orders/update/${id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...base, [status]: true }),
      });
      await response.json();
      mutate('/api/orders');
    } catch (e) {
      console.error(e);
    }
  };

  switch (status) {
    case StatusOptions.Accepted:
      return (
        <>
          <Text size='small'>Accepted</Text>
          <Button
            onClick={() => updateStatus('transit')}
            margin={{ left: 'large' }}
          >
            <Text
              size='small'
              color='#337BF6'
              style={{ textDecoration: 'underline' }}
            >
              Mark as Completed
            </Text>
          </Button>
        </>
      );
    case StatusOptions.Transit:
      return (
        <>
          <Text size='small'>In-Transit</Text>
          <Button
            onClick={() => updateStatus('completed')}
            margin={{ left: 'large' }}
          >
            <Text
              size='small'
              color='#337BF6'
              style={{ textDecoration: 'underline' }}
            >
              Mark as Completed
            </Text>
          </Button>
        </>
      );
    case StatusOptions.Completed:
      return <Text size='small'> Completed</Text>;
    case StatusOptions.Canceled:
      return (
        <Text size='small' color='#EA3359'>
          Cancelled
        </Text>
      );
    case StatusOptions.Started:
    default:
      return (
        <>
          <Button
            onClick={() => updateStatus('accepted')}
            margin={{ right: 'small' }}
          >
            <Text
              size='small'
              color='#55A64E'
              style={{ textDecoration: 'underline' }}
            >
              Accept
            </Text>
          </Button>
          <Button
            onClick={() => updateStatus('canceled')}
            style={{ textDecoration: 'underline' }}
          >
            <Text size='small' color='#EA3359'>
              Cancel
            </Text>
          </Button>
        </>
      );
  }
};

export { Status };
