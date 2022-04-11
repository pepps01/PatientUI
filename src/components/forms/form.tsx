import React from 'react';
import {Formik} from 'formik';

// Interface for props
import {FormikFormProps} from '../../@types/interface';

const Form = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: FormikFormProps): JSX.Element => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {(): JSX.Element => <>{children}</>}
    </Formik>
  );
};

export default Form;
