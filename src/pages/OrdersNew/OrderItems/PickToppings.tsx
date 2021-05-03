import { FC, ChangeEvent } from 'react';
import { Box, CheckBox, Heading, Grid, Text } from 'grommet';

const CustomCheckBox: FC<{
  index: number;
  active: boolean;
  topping: string;
  handleChange(e: ChangeEvent): void;
}> = ({ index, active, handleChange, topping }) => (
  <Box fill>
    <label htmlFor={`items.${index}.toppings.${topping}`}>
      <Box
        background={active ? '#4A90E2' : 'white'}
        pad={{
          top: 'small',
          right: 'medium',
          bottom: 'small',
          left: 'medium',
        }}
        border={{ color: '#4A90E2' }}
      >
        <CheckBox
          id={`items.${index}.toppings.${topping}`}
          name={`items.${index}.toppings`}
          label={
            <Text color={active ? 'white' : 'dark-1'} weight='bold'>
              {topping.toUpperCase()}
            </Text>
          }
          checked={active}
          value={topping}
          onChange={handleChange}
        />
      </Box>
    </label>
  </Box>
);

const PickToppings: FC<{
  index: number;
  toppingList: string[];
  toppings: string[];
  handleChange(e: ChangeEvent): void;
}> = ({ index, handleChange, toppings, toppingList }) => (
  <Box pad={{ top: 'large' }}>
    <Heading size='16px'>Pick your toppings</Heading>
    <Grid
      columns={{
        count: 4,
        size: 'auto',
      }}
      gap='medium'
    >
      {toppingList.map(topping => (
        <CustomCheckBox
          key={topping}
          index={index}
          active={toppings.includes(topping)}
          topping={topping}
          handleChange={handleChange}
        />
      ))}
    </Grid>
  </Box>
);

export { PickToppings };
