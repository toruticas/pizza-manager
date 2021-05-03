import { FC } from 'react';
import { Box, Heading, Paragraph, Meter, Text } from 'grommet';

import { Separator } from 'components/Separator';

const Report: FC<{
  late: string;
  ontime: string;
  performance: string;
}> = ({ late, ontime, performance }) => (
  <Box width='auto' align='center' style={{ borderLeft: '1px solid #EDEDED' }}>
    <Box pad={{ bottom: 'medium' }}>
      <Paragraph>REPORT</Paragraph>
    </Box>
    <Box direction='row' fill pad={{ left: 'medium' }}>
      <Box width='300px'>
        <Paragraph size='small'>Ontime Delivery</Paragraph>
        <Heading size='small' margin={{ top: '0' }}>
          {ontime}
        </Heading>
        <Box width='120px' height='20px'>
          <Meter
            thickness='xsmall'
            values={[
              {
                color: '#62C9B8',
                value: Number(ontime.replace(/[^\d.-]/g, '')),
                label: 'ontime',
              },
            ]}
            aria-label='meter'
            round
          />
        </Box>
      </Box>

      <Box width='300px'>
        <Paragraph size='small'>Late Deliveries</Paragraph>
        <Heading size='small' margin={{ top: '0' }}>
          {late}
        </Heading>
        <Box width='120px'>
          <Meter
            thickness='xsmall'
            values={[
              {
                color: '#EC6265',
                value: Number(late.replace(/[^\d.-]/g, '')),
                label: 'late',
              },
            ]}
            aria-label='meter'
            round
          />
        </Box>
      </Box>
    </Box>

    <Separator />

    <Box direction='row' justify='between' fill pad={{ left: 'medium' }}>
      <Box fill>
        <Paragraph size='small' margin={{ bottom: '0' }}>
          Performance
        </Paragraph>
        <Text size='large' margin={{ top: '0' }} color='#62C9B8' weight='bold'>
          {performance}
        </Text>
      </Box>
      <Box fill />
    </Box>
  </Box>
);

export { Report };
