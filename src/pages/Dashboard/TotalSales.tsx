import { FC } from 'react';
import { Box, Heading, Paragraph } from 'grommet';

const TotalSales: FC<{ currency: string; total: number }> = ({
  currency,
  total,
}) => (
  <Box fill align='center'>
    <Heading size='small' margin={{ bottom: 'small' }}>
      TOTAL SALES
    </Heading>
    <Paragraph margin={{ top: '0', bottom: '0' }}>{currency}</Paragraph>
    <Heading margin={{ top: 'medium' }}>
      {parseFloat(String(total)).toLocaleString('en')}
    </Heading>
  </Box>
);

export { TotalSales };
