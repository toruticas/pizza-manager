import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Box, Button, Heading, Text } from 'grommet';

import { ordersStatusPath } from 'routes/helpers';
import { Container } from 'components/Container';

import { BasicInformation } from './BasicInformation';
import { OrderItems } from './OrderItems';
import { Summary } from './Summary';

const schema = Yup.object({
  name: Yup.string()
    .max(64, 'Name must be 64 characters or less')
    .required('Name is required'),
  address: Yup.string()
    .max(64, 'Address must be 64 characters or less')
    .required('Address is required'),
  contact: Yup.string()
    .max(20, 'Contact must be 20 characters or less')
    .required('Contact is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  items: Yup.array()
    .of(
      Yup.object().shape({
        size: Yup.string().required('Required'),
        toppings: Yup.array().of(Yup.string().required('Required')),
      }),
    )
    .min(1, 'Minimum of 1 item'),
});

const initialValues = {
  name: '',
  email: '',
  address: '',
  contact: '',
  items: [
    {
      size: 'large',
      toppings: [],
    },
  ],
};

const OrdersNew = () => {
  const history = useHistory();
  return (
    <Container>
      <Heading size='small'>Pizza Order</Heading>
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const response = await fetch('/api/orders/add', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(values),
            });
            await response.json();
          } catch (e: unknown) {
            console.error(e);
            /* handle error */
          }
          setSubmitting(false);
          history.push(ordersStatusPath());
        }}
      >
        {({ isSubmitting, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box gap='large'>
              <BasicInformation />
              <OrderItems />
              <Summary />
              <Box direction='row' align='center' justify='between'>
                <Box></Box>
                <Box>
                  <Button
                    type='submit'
                    label={
                      <Text color='#337BF6' size='small'>
                        Place Order
                      </Text>
                    }
                    color='#337BF6'
                    size='small'
                    disabled={isSubmitting}
                    fill={false}
                  />
                </Box>
              </Box>
            </Box>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export { OrdersNew };
