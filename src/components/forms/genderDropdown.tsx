import React from 'react';
import {useFormikContext} from 'formik';

// Constant
import {DATA} from '../../constants';

// Components
import {Dropdown} from '../shared';
import ErrorMessage from './errorMessage';

type Props = {
  name: string;
};

const GenderDropdown = ({name}: Props): JSX.Element => {
  const {errors, setFieldValue, touched, values} = useFormikContext<any>();
  return (
    <>
      <Dropdown
        placeholder={values[name]}
        items={DATA?.Gender}
        selectedItem={values[name]}
        onSelectedItem={item => {
          setFieldValue(name, item);
        }}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default GenderDropdown;
