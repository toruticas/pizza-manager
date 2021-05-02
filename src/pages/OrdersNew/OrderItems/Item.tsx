import { FC, ChangeEvent } from 'react';

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
  <div key={`pizza-${index}`}>
    <h2>{`Pizza ${index + 1}`}</h2>
    <button type='button' onClick={() => remove(index)}>
      Remove Pizza
    </button>

    <div key={index}>
      <p>Choose size</p>
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

      <p>Pick your toppings</p>
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
    </div>
  </div>
);

export { OrderItem };
