import { FC, ChangeEvent } from 'react';
import { AccordionPanel, Box, Button, Heading, Text } from 'grommet';

import { PickToppings } from './PickToppings';
import { SelectSize } from './SelectSize';

const OrderItem: FC<{
  index: number;
  size: string;
  sizeList: string[];
  toppingList: string[];
  toppings: string[];
  handleChange(e: ChangeEvent): void;
  remove<T>(index: number): T | undefined;
}> = ({
  index,
  handleChange,
  size,
  toppings,
  sizeList,
  toppingList,
  remove,
}) => (
  <AccordionPanel
    label={
      <Box direction='row' justify='between' align='center' fill>
        <Box pad={{ left: 'medium' }}>
          <Heading size='20px'>{`Pizza ${index + 1}`.toUpperCase()}</Heading>
        </Box>
        <Box>
          <Button
            as='div'
            type='button'
            onClick={() => remove(index)}
            label={<Text size='small'>Remove Pizza</Text>}
            color='#BF2828'
            size='small'
          />
        </Box>
      </Box>
    }
  >
    <Box background='white' pad='medium'>
      <SelectSize
        index={index}
        sizeList={sizeList}
        size={size}
        handleChange={handleChange}
      />
      <PickToppings
        index={index}
        toppingList={toppingList}
        toppings={toppings}
        handleChange={handleChange}
      />
    </Box>
  </AccordionPanel>
);

export { OrderItem };
