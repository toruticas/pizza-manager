import { FC } from 'react';
import { Box } from 'grommet';

const Container: FC = props => (
  <Box
    background='white'
    elevation='large'
    round='xsmall'
    pad={{
      top: 'small',
      right: 'xlarge',
      bottom: 'large',
      left: 'large',
    }}
    {...props}
  />
);

export { Container };
