import React, {useState} from 'react';
import {View, Pressable, TouchableOpacity, Platform} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import {useFormikContext} from 'formik';
import moment from 'moment';

// components
import {CustomInput} from '../shared';
import ErrorMessage from './errorMessage';

// Styles && SVG && COLORS, SIZES
import Calendar from '../../assets/SVGs/Calendar.svg';
import {COLORS, SIZES} from '../../constants';
import Styles from './styles';

type Props = {
  name: string | any;
};

const CalendarPicker = ({name}: Props): JSX.Element => {
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const {setFieldValue, values, touched, errors, setFieldTouched} =
    useFormikContext<any>();

  const onChange = (event: any, birthday: any): any => {
    setShowCalendar(Platform.OS === 'ios');
    setFieldValue(name, moment(birthday).format('YYYY-MM-DD'));
  };

  return (
    <>
      <View style={[Styles.dobView]}>
        <Pressable
          style={[Styles.input]}
          onPress={(): any => {
            setShowCalendar(true);
          }}>
          <CustomInput
            error={errors[name]}
            editable={false}
            placeholder="Date of Birth e.g YYYY-MM-DD"
            onBlur={(): void => setFieldTouched(name)}
            onChangeText={(text): any => setFieldValue(name, text)}
            value={values[name]}
            touched={touched[name]}
          />
        </Pressable>

        <View
          style={[
            Styles.calendarPicker,
            {backgroundColor: COLORS.inputBg, borderRadius: SIZES.radius},
          ]}>
          <TouchableOpacity
            onPress={(): any => {
              setShowCalendar(true);
            }}>
            <Calendar />
          </TouchableOpacity>
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
        </View>
      </View>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default CalendarPicker;
