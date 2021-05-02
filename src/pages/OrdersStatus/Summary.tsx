import styled from 'styled-components';
import { FC } from 'react';
import { Box, Button, Text, Meter } from 'grommet';
import { Separator } from 'components/Separator';

const Bullet = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${props => props.color ?? 'green'};
  border-radius: 15px;
`;

const Item: FC<{ title: string; data: number; color: string }> = ({
  title,
  data,
  color,
}) => (
  <Box direction='row' align='center' pad={{ right: 'medium' }}>
    <Box pad='small'>
      <Bullet color={color} />
    </Box>
    <Box>
      <Text size='small'>{title}</Text>
      <Text size='xsmall'>{data}</Text>
    </Box>
  </Box>
);

const Summary: FC<{
  total: number;
  completed: number;
  pending: number;
  canceled: number;
}> = ({ total, completed, pending, canceled }) => (
  <Box data-testid='summary-section' pad={{ top: 'medium' }}>
    <Box direction='row' align='center' justify='between'>
      <Box>
        <Text margin={{ bottom: 'small' }}>Total items in inventory</Text>
      </Box>
      <Box>
        <Button
          type='submit'
          label={
            <Text color='#337BF6' size='small'>
              Print summary
            </Text>
          }
          color='#337BF6'
          size='small'
          fill={false}
          onClick={() => {
            alert('Preparing for printing');
          }}
        />
      </Box>
    </Box>
    <Box>
      <Text>
        <Text size='xlarge' color='#337BF6' margin={{ right: 'xsmall' }}>
          {total}
        </Text>
        <Text size='small'>items</Text>
      </Text>
      <Box elevation='large' width='300px' margin={{ top: 'small' }}>
        <Meter
          values={[
            { value: (completed * 100) / total, color: '#76D572' },
            { value: (pending * 100) / total, color: '#337BF6' },
            { value: (canceled * 100) / total, color: '#EA3359' },
          ]}
          thickness='small'
          aria-label='meter'
        />
      </Box>
    </Box>

    <Separator />

    <Box direction='row'>
      <Item title='Completed' data={completed} color='#76D572' />
      <Item title='Pending' data={pending} color='#337BF6' />
      <Item title='Canceled' data={canceled} color='#EA3359' />
    </Box>
  </Box>
);

export { Summary };
