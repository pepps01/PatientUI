import React from 'react';
import {useFormikContext} from 'formik';
import {SubmitButtonProps} from '../../@types/interface';

import {CustomButton} from '../shared';

function SubmitButton(props: SubmitButtonProps): JSX.Element {
  const {handleSubmit} = useFormikContext<any>();
  return <CustomButton {...props} onPress={handleSubmit} />;
}

export default SubmitButton;
