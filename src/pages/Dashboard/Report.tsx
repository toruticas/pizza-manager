import { FC } from 'react';
import { Box, Heading, Paragraph, Meter, Text } from 'grommet';

const Report: FC<{
  late: string;
  ontime: string;
  performance: string;
}> = ({ late, ontime, performance }) => (
  <Box width='auto' align='center'>
    <Box>
      <Paragraph>REPORT</Paragraph>
    </Box>
    <Box direction='row' fill>
      <Box width='300px'>
        <Paragraph size='small'>Ontime Delivery</Paragraph>
        <Heading size='small' margin={{ top: '0' }}>
          {ontime}
        </Heading>
        <Box width='120px'>
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

    <Box justify='between' fill>
      <Box />
      <Box>
        <Paragraph size='small' margin={{ bottom: '0' }}>
          Performance
        </Paragraph>
        <Text size='large' margin={{ top: '0' }} color='#62C9B8' weight='bold'>
          {performance}
        </Text>
      </Box>
    </Box>
  </Box>
);

export { Report };
