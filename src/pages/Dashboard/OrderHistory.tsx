import { FC } from 'react';
import { Box, DataChart, Paragraph } from 'grommet';

const OrderHistory: FC<{ data: any }> = ({ data }) => (
  <Box align='center' fill>
    <Paragraph>ORDER HISTORY</Paragraph>
    <DataChart
      size={{ height: '200px', width: '800px' }}
      axis={{
        x: {
          granularity: 'fine',
          property: 'date',
        },
        y: false,
      }}
      data={data.labels.reduce((items: any, label: any, index: number) => {
        items.push({
          date: label,
          amount: data.data[index],
        });
        return items;
      }, [])}
      series={['date', { property: 'amount', prefix: '$' }]}
      chart={[
        {
          color: '#EEB25B',
          property: 'amount',
          type: 'line',
          opacity: 'medium',
          thickness: 'xsmall',
          round: true,
        },
        {
          property: 'amount',
          type: 'line',
          thickness: 'xsmall',
          round: true,
        },
      ]}
      guide={{ x: { granularity: 'fine' } }}
    />
  </Box>
);

export { OrderHistory };
