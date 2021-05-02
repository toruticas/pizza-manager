import useSWR from 'swr';
import styled from 'styled-components';
import { useFormikContext } from 'formik';
import { Box, Heading, Text } from 'grommet';
import { FormValues } from 'types';

const DottedLine = styled.p`
  min-width: 600px;
  background: inherit;
  margin: 0 auto;
  position: relative;
  height: 16px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0.2rem;
    width: 100%;
    height: 0;
    border-bottom: 2px dotted;
  }
`;

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
    <Box>
      <Heading size='20px'>Summary</Heading>

      {values.items.map((item, index) => (
        <Box key={`item-${index}`} pad={{ bottom: 'medium' }}>
          <Box direction='row' justify='between' align='center'>
            <Box>
              <Text weight='bold'>
                {item.size.replace(/^\w/, c => c.toUpperCase())} Pizza{' '}
                {index + 1}
              </Text>
            </Box>
            <Box>
              <DottedLine />
            </Box>
            <Box>
              <Text weight='bold'>
                GBP{' '}
                {
                  data.sizes.find(
                    (size: any) =>
                      item.size.toLowerCase() === size.name.toLowerCase(),
                  ).price
                }
              </Text>
            </Box>
          </Box>
          {item.toppings.map((topping: string) => (
            <Box
              direction='row'
              justify='between'
              key={topping}
              pad={{ top: 'xsmall' }}
            >
              <Box pad={{ left: 'large' }}>{topping}</Box>
              <Box>
                {data.toppings.find((t: any) => topping === t.name).price}
              </Box>
            </Box>
          ))}
        </Box>
      ))}
      <Box direction='row' justify='between' align='center'>
        <Box>
          <Heading size='small'>TOTAL</Heading>
        </Box>
        <Box>
          <Heading size='small'>
            GBP {calculateTotal(data, values.items)}
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

export { Summary };
