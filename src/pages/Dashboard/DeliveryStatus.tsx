import { FC } from 'react';
import styled from 'styled-components';
import { Box, Heading, Paragraph, Meter, Text } from 'grommet';

const Over = styled.div`
  position: absolute;
  top: 70px;
  left: auto;
`;

const DeliveryStatus: FC<{
  total: number;
  delivered: number;
  pending: number;
}> = ({ total, delivered, pending }) => (
  <Box fill align='center' pad={{ top: 'medium' }}>
    <Heading size='small'>DELIVERY STATUS</Heading>
    <Heading size='20px' margin={{ bottom: '0' }}>
      Total Orders
    </Heading>
    <Heading size='small' margin={{ top: '0' }}>
      {total}
    </Heading>

    <Box direction='row' justify='between' align='center' fill>
      <Box fill align='center' style={{ position: 'relative' }}>
        <Meter
          size={'150px'}
          thickness={'small'}
          type='circle'
          values={[
            { value: delivered, color: '#62C9B8' },
            { value: total - delivered, color: 'light-1' },
          ]}
          round
        />
        <Over>
          <Text weight='bold'>{delivered}</Text>
        </Over>
        <Paragraph>Orders Delivered</Paragraph>
      </Box>

      <Box fill align='center' style={{ position: 'relative' }}>
        <Meter
          size={'150px'}
          thickness={'small'}
          type='circle'
          values={[
            { value: pending, color: '#EC6265' },
            { value: total - pending, color: 'light-1' },
          ]}
          round
        />
        <Over>
          <Text weight='bold'>{pending}</Text>
        </Over>
        <Paragraph>Pending Delivery</Paragraph>
      </Box>
    </Box>
  </Box>
);

export { DeliveryStatus };
