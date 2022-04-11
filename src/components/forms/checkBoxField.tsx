import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useFormikContext} from 'formik';
import CheckBox from '@react-native-community/checkbox';

// components
import ErrorMessage from './errorMessage';

import {COLORS, FONTS} from '../../constants';

type Props = {
  name: string;
};

const CheckBoxField = ({name}: Props): JSX.Element => {
  const {setFieldValue, values, errors, touched} = useFormikContext<any>();
  return (
    <>
      <View style={[styles.terms]}>
        <CheckBox
          disabled={false}
          lineWidth={4}
          onCheckColor={COLORS.primary}
          onFillColor={COLORS.primary}
          value={values[name]}
          onValueChange={(termsValue): void => setFieldValue(name, termsValue)}
        />
        <Text style={[FONTS.h4, {color: COLORS.secondaryLight}]}>
          I accept the{' '}
          <Text style={[{color: COLORS.primary}]}>Terms and Conditions</Text>
        </Text>
      </View>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

const styles = StyleSheet.create({
  terms: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CheckBoxField;
