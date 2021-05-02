import useSWR from 'swr';
import { FieldArray, useFormikContext } from 'formik';
import { FormValues } from 'types';

import { OrderItem } from './Item';

const OrderItems = () => {
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
        <div>
          <h1>Choose your pizza</h1>
          <button
            type='button'
            onClick={() => push({ size: 'large', toppings: [] })}
          >
            Add Pizza
          </button>

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

          {errors.items && touched.items ? <div>{errors.items}</div> : null}
        </div>
      )}
    </FieldArray>
  );
};

export { OrderItems };
