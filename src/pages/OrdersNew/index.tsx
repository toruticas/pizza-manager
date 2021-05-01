import { Formik } from 'formik';
import * as Yup from 'yup';

import { BasicInformation } from './BasicInformation';
import { OrderItems } from './OrderItems';

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
  return (
    <div>
      <h1>OrdersNew</h1>
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <BasicInformation />
            <hr />
            <OrderItems />
            <button type='submit' disabled={isSubmitting}>
              Place Order
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export { OrdersNew };
