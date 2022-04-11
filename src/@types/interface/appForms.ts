import {ReactNode} from 'react';
// import {AnyObject} from 'yup/lib/types';
import {CustomTextInputProps, CustomButtonProps} from './defaultProps';

export interface SignUpFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dob: string;
  gender: string;
  terms: boolean;
}
export interface SignInInputs {
  email: string;
  password: string;
}

export interface FormFieldProps extends CustomTextInputProps {
  name: any;
}

export interface SubmitButtonProps extends CustomButtonProps {
  label: string | any;
  editingMode?: void;
}

type SubmitFunction = {
  (values: any, actions: any): Promise<any>;
};
export interface FormikFormProps {
  initialValues: any;
  validationSchema: any;
  onSubmit: SubmitFunction;
  children: ReactNode;
}

export interface ResetPasswordInputProps {
  password: string;
  c_password: string;
}
