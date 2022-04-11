import React, {RefObject, useRef, useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {ScrollView} from 'react-native-gesture-handler';
import OtpInputs from 'react-native-otp-inputs';

// Interface props, Route constants && Schema
import {ScreenDefaultProps} from '../../../@types/interface';
import {PasswordOTP, PasswordRESET} from '../../../navigation/routes';

// Redux state Actions

// API && Storage
import AuthApi from '../../../services/auth';

// Components && Helpers && Hooks
import {
  CountDownTimer,
  CustomButton,
  Notification,
} from '../../../components/shared';
import {ErrorMessage} from '../../../components/forms';

// Styles, Colors, SVGs
import Styles from './styles';
import {SIZES, STYLES, COLORS, FONTS} from '../../../constants';
import Mesh from '../../../assets/SVGs/signup-login-mesh.svg';
import Lock from '../../../assets/SVGs/lock_icon.svg';

const ForgotPasswordOTP = ({
  navigation,
  route,
}: ScreenDefaultProps): JSX.Element => {
  const otpRef: RefObject<any> = useRef();

  const {email}: any = route?.params;

  const {width, height} = useWindowDimensions();
  const [code, setCode] = useState<string>('');
  const [otpError, setOtpError] = useState<string>('');
  const [message, setMessage] = useState<any>({text: '', title: '', type: ''});

  // Verification of the OTP Code
  const VerifyOTP = async (): Promise<void> => {
    if (code.length < 4) return setOtpError('Please enter 4 digits valid OTP');

    const result = await AuthApi.verifyPasswordOTP({email, code});

    if (!result.ok)
      return setMessage({
        text: result?.data.message,
        title: result?.problem,
        type: 'error',
      });

    navigation.navigate(PasswordRESET, {email});
  };

  // Resend OTP Code
  const ResendOTP = async (): Promise<void> => {
    const result = await AuthApi.sendPasswordReset({email});
    if (!result.ok)
      return setMessage({
        text: result?.data.message,
        title: result?.problem,
        type: 'error',
      });
    navigation.replace(PasswordOTP, {email});
  };

  return (
    <SafeAreaView
      style={[
        STYLES.container,
        {backgroundColor: COLORS.white, width, height},
      ]}>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
      {message.text ? (
        <Notification
          text={message.text}
          title={message.title}
          type={message.type}
          onHide={() => {
            setMessage({text: '', title: '', type: ''});
          }}
        />
      ) : (
        <></>
      )}
      <View style={[Styles.imageTop]}>
        <Mesh width={width} />
      </View>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'position' : 'height'}
          enabled
          keyboardVerticalOffset={30}>
          <View
            style={[
              {
                marginHorizontal: SIZES.margin,
                marginTop: SIZES.top,
                marginBottom: SIZES.bottom,
              },
            ]}>
            <Text
              style={[FONTS.h1, Styles.textDesc, {color: COLORS.secondary}]}>
              Check your email
            </Text>
            <View style={[Styles.subTextOTP]}>
              <Text
                style={[
                  FONTS.body2,
                  Styles.textDesc,
                  {color: COLORS.secondaryLight},
                ]}>
                We sent you an email with a code. Please enter the code below
              </Text>
              <View
                style={[Styles.lockView, {backgroundColor: COLORS.primary}]}>
                <Lock />
              </View>
              {otpError ? (
                <ErrorMessage error={otpError} visible={true} />
              ) : (
                <></>
              )}
            </View>
            <View style={{flex: 1}}>
              <OtpInputs
                autofillFromClipboard={true}
                handleChange={function (otpCode: string): void {
                  setCode(otpCode);
                }}
                numberOfInputs={4}
                ref={otpRef}
                style={[Styles.OTPinput]}
                inputStyles={[
                  Styles.inputOtp,
                  {borderColor: COLORS.placeholder, borderRadius: SIZES.radius},
                ]}
              />
            </View>

            <Text
              style={[
                Styles.countDown,
                {color: COLORS.secondary, fontSize: SIZES.body2},
              ]}>
              code expires in: <CountDownTimer seconds={300} />
            </Text>
            <View style={[Styles.buttonContainerOTP]}>
              <CustomButton
                variant="primary"
                label="Verify"
                loading={false}
                onPress={VerifyOTP}
              />

              <CustomButton
                variant="default"
                label="Send again"
                loading={false}
                onPress={ResendOTP}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPasswordOTP;
