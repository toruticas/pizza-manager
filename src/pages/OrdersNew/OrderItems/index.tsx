import { FieldArray, useFormikContext } from 'formik';
import { FormValues } from '../types';

import { OrderItem } from './Item';

const OrderItems = () => {
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
            Add item
          </button>

          {values.items.map((item, index) => (
            <OrderItem
              key={`pizza-${index}`}
              index={index}
              handleChange={handleChange}
              size={item.size}
              toppings={item.toppings}
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
