import React from 'react';
import {useFormikContext} from 'formik';
import {CustomInput} from '../shared';

// Interface for Props
import {FormFieldProps} from '../../@types/interface';

// Components
import ErrorMessage from './errorMessage';

const FormField = ({name, ...props}: FormFieldProps): JSX.Element => {
  const {errors, setFieldTouched, setFieldValue, touched, values} =
    useFormikContext<any>();
  return (
    <>
      <CustomInput
        error={errors[name]}
        onBlur={(): void => setFieldTouched(name)}
        onChangeText={(text): any => setFieldValue(name, text)}
        value={values[name]}
        touched={touched[name]}
        {...props}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormField;
