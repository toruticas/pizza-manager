import useSWR from 'swr';
import { useFormikContext } from 'formik';
import { FormValues } from './types';

const calculateTotal = (data: any, items: any) => {
  return items.reduce((total: number, item: any) => {
    const itemPrice = data.sizes.find(
      (size: any) => item.size.toLowerCase() === size.name.toLowerCase(),
    ).price;

    const toppingsPrice = item.toppings.reduce(
      (sum: number, topping: string) =>
        sum + data.toppings.find((t: any) => topping === t.name).price,
      0,
    );
    const subTotal = itemPrice + toppingsPrice;

    return total + subTotal;
  }, 0);
};

const Summary = () => {
  const { data } = useSWR('/api/prices');
  const { values } = useFormikContext<FormValues>();

  return (
    <div>
      <h1>Summary</h1>

      {values.items.map((item, index) => (
        <div key={`item-${index}`}>
          <p>
            <strong>
              {item.size} Pizza {index + 1}
            </strong>
            ..........
            <strong>
              GBP{' '}
              {
                data.sizes.find(
                  (size: any) =>
                    item.size.toLowerCase() === size.name.toLowerCase(),
                ).price
              }
            </strong>
          </p>
          {item.toppings.map((topping: string) => (
            <p key={topping}>
              <span>{topping}</span>
              ..........
              <span>
                {data.toppings.find((t: any) => topping === t.name).price}
              </span>
            </p>
          ))}
        </div>
      ))}
      <hr />
      <h1>
        <span>Total</span>
        <strong>GBP {calculateTotal(data, values.items)}</strong>
      </h1>
    </div>
  );
};

export { Summary };
