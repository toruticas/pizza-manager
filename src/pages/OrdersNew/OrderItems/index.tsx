import { useState } from 'react';
import useSWR from 'swr';
import { FieldArray, useFormikContext } from 'formik';
import { Box, Heading, Button, Text, Accordion } from 'grommet';

import { FormValues } from 'types';

import { OrderItem } from './Item';

const OrderItems = () => {
  const [activeIndex, setActiveIndex] = useState([0]);
  const { data } = useSWR('/api/prices');
  const sizes = data.sizes.map((size: any) => size.name.toLowerCase());
  const toppings = data.toppings.map((topping: any) => topping.name);

  const {
    values,
    errors,
    touched,
    handleChange,
  } = useFormikContext<FormValues>();

  return (
    <FieldArray name='items'>
      {({ insert, remove, push }) => (
        <Box>
          <Box direction='row' align='center' justify='between'>
            <Box>
              <Heading size='20px'>Choose your pizza</Heading>
            </Box>
            <Box>
              <Button
                type='button'
                onClick={() => {
                  push({ size: 'large', toppings: [] });
                  setActiveIndex([...activeIndex, values.items.length]);
                }}
                label={
                  <Text color='#92D048' size='small'>
                    Add Pizza
                  </Text>
                }
                color='#92D048'
                size='small'
              />
            </Box>
          </Box>

          <Box background='dark-2'>
            <Accordion
              activeIndex={activeIndex}
              onActive={setActiveIndex}
              multiple
            >
              {values.items.map((item, index) => (
                <OrderItem
                  key={`pizza-${index}`}
                  index={index}
                  handleChange={handleChange}
                  size={item.size}
                  toppings={item.toppings}
                  sizeList={sizes}
                  toppingList={toppings}
                  remove={remove}
                />
              ))}
            </Accordion>
          </Box>

          {errors.items && touched.items ? <div>{errors.items}</div> : null}
        </Box>
      )}
    </FieldArray>
  );
};

export { OrderItems };
