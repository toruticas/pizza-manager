import { FC } from 'react';

import { StatusOptions } from './enums';

const Status: FC<{ status: StatusOptions }> = ({ status }) => {
  switch (status) {
    case StatusOptions.Accepted:
      return (
        <>
          <p>Accepted</p>
          <button>Mark as Completed</button>
        </>
      );
    case StatusOptions.Transit:
      return (
        <>
          <p>In-Transit</p>
          <button>Mark as Completed</button>
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
          <button>Accept</button>
          <button>Cancel</button>
        </>
      );
  }
};

export { Status };
