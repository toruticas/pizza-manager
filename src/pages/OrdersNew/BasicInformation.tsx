import { FC } from 'react';
import { useFormikContext } from 'formik';

import { FormValues } from './types';

const BasicInformation: FC = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  } = useFormikContext<FormValues>();

  return (
    <>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          name='name'
          type='text'
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {touched.name && errors.name ? <div>{errors.name}</div> : null}
      </div>
      <div>
        <label htmlFor='email'>E-mail Address</label>
        <input
          id='email'
          name='email'
          type='email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email ? <div>{errors.email}</div> : null}
      </div>
      <div>
        <label htmlFor='address'>Address</label>
        <input
          id='address'
          name='address'
          type='text'
          value={values.address}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.address && errors.address ? <div>{errors.address}</div> : null}
      </div>
      <div>
        <label htmlFor='contact'>Contact Number</label>
        <input
          id='contact'
          name='contact'
          type='text'
          value={values.contact}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.contact && errors.contact ? <div>{errors.contact}</div> : null}
      </div>
    </>
  );
};

export { BasicInformation };
