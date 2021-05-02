import { FC, ChangeEvent } from 'react';
import { AccordionPanel, Box, Button, Heading, Text } from 'grommet';

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
      <Box>
        <Heading size='16px'>Choose size</Heading>
        {sizeList.map(_size => (
          <label key={_size}>
            {_size}
            <input
              type='radio'
              name={`items.${index}.size`}
              value={_size}
              checked={_size === size}
              onChange={handleChange}
            />
          </label>
        ))}
      </Box>

      <Box>
        <Heading size='16px'>Pick your toppings</Heading>
        {toppingList.map(topping => (
          <label key={topping}>
            {topping}
            <input
              type='checkbox'
              name={`items.${index}.toppings`}
              value={topping}
              onChange={handleChange}
              checked={toppings.includes(topping)}
            />
          </label>
        ))}
      </Box>
    </Box>
  </AccordionPanel>
);

export { OrderItem };
