import { FC } from 'react';
import { mutate } from 'swr';

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
          <p>Accepted</p>
          <button onClick={() => updateStatus('transit')}>
            Mark as Completed
          </button>
        </>
      );
    case StatusOptions.Transit:
      return (
        <>
          <p>In-Transit</p>
          <button onClick={() => updateStatus('completed')}>
            Mark as Completed
          </button>
        </>
      );
    case StatusOptions.Completed:
      return <p>Completed</p>;
    case StatusOptions.Canceled:
      return <p>Cancelled</p>;
    case StatusOptions.Started:
    default:
      return (
        <>
          <button onClick={() => updateStatus('accepted')}>Accept</button>
          <button onClick={() => updateStatus('canceled')}>Cancel</button>
        </>
      );
  }
};

export { Status };
