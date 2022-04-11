import React, {RefObject, useRef, useState} from 'react';
import {ScrollView, StyleSheet, Button} from 'react-native';

// @ts-ignore
import OtpInputs from 'react-native-otp-inputs';

const Test = () => {
  const otpRef: RefObject<any> = useRef();
  const [s, setS] = useState(true);
  const [fourDigit, setFourDigit] = useState(false);
  const [otpcode, setOtpCode] = useState<string>('');

  console.log('@OTPCode', otpcode);
  const focusOTP = () => {
    otpRef.current.focus();
  };

  const resetOTP = () => {
    otpRef.current.reset();
  };

  const toggle = () => {
    setFourDigit(fourDigit => !fourDigit);
  };

  const handleChange = (code: string) => {
    console.log('currentCodeReturned', code, s);
    setS(s => !s);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button onPress={resetOTP} title="Reset" />
      <Button onPress={focusOTP} title="Focus" />
      <Button onPress={toggle} title="Toggle" />

      {fourDigit ? (
        <OtpInputs
          clearTextOnFocus
          handleChange={handleChange}
          keyboardType="phone-pad"
          numberOfInputs={4}
          ref={otpRef}
          selectTextOnFocus={false}
          autofillFromClipboard={false}
          style={[styles.OTPinput]}
          inputStyles={[styles.inputOtp]}
        />
      ) : (
        <OtpInputs
          keyboardType="phone-pad"
          numberOfInputs={6}
          ref={otpRef}
          autofillFromClipboard={false}
          style={[styles.OTPinput]}
          inputStyles={[styles.inputOtp]}
          handleChange={function (otpCode: string): void {
            setOtpCode(otpCode);
          }}
        />
      )}
    </ScrollView>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  inputOtp: {
    borderWidth: 2,
    width: 60,
    padding: 5,
    height: 60,
    textAlign: 'center',
    fontFamily: 'Muli-Bold',
    fontSize: 34,
  },

  OTPinput: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
