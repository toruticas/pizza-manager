import { FC } from 'react';
import { useFormikContext } from 'formik';
import { Heading, TextInput, Box } from 'grommet';

import { FormValues } from 'types';

const BasicInformation: FC = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  } = useFormikContext<FormValues>();

  return (
    <Box>
      <Heading size='20px'>Basic Information</Heading>
      <Box gap='medium'>
        <Box direction='row' gap='xlarge'>
          <Box fill>
            <label htmlFor='name'>Name</label>
            <TextInput
              id='name'
              name='name'
              type='text'
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.name && errors.name ? <div>{errors.name}</div> : null}
          </Box>
          <Box fill>
            <div>
              <label htmlFor='email'>E-mail Address</label>
              <TextInput
                id='email'
                name='email'
                type='email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email ? <div>{errors.email}</div> : null}
            </div>
          </Box>
        </Box>
        <Box direction='row' gap='xlarge'>
          <Box fill>
            <label htmlFor='address'>Address</label>
            <TextInput
              id='address'
              name='address'
              type='text'
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.address && errors.address ? (
              <div>{errors.address}</div>
            ) : null}
          </Box>
          <Box fill>
            <label htmlFor='contact'>Contact Number</label>
            <TextInput
              id='contact'
              name='contact'
              type='text'
              value={values.contact}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.contact && errors.contact ? (
              <div>{errors.contact}</div>
            ) : null}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { BasicInformation };
