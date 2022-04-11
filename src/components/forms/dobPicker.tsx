import React, {useState} from 'react';
import {Platform, Pressable} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {useFormikContext} from 'formik';

// Interface for props
import {FormFieldProps} from '../../@types/interface';

// Components
import {CustomInput} from '../shared';
import ErrorMessage from './errorMessage';

const DobPicker = ({name, ...props}: FormFieldProps): JSX.Element => {
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const {setFieldValue, values, touched, errors, setFieldTouched} =
    useFormikContext<any>();

  const onChange = (event: any, birthday: any): any => {
    setShowCalendar(Platform.OS === 'ios');
    setFieldValue(name, moment(birthday).format('YYYY-MM-DD'));
  };
  return (
    <>
      <Pressable onPress={(): void => setShowCalendar(true)}>
        <CustomInput
          editable={false}
          error={errors[name]}
          onBlur={(): void => setFieldTouched(name)}
          onChangeText={(text): any => setFieldValue(name, text)}
          value={values[name]}
          touched={touched[name]}
          {...props}
        />
      </Pressable>
      {showCalendar && (
        <DateTimePicker
          display="default"
          maximumDate={new Date(moment().subtract(18, 'years').toDate())}
          minimumDate={new Date(1900, 1, 1)}
          mode="date"
          onChange={onChange}
          testID="dateTimePicker"
          value={new Date()}
        />
      )}
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default DobPicker;
