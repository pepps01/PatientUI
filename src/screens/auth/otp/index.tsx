import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import OtpInputs from 'react-native-otp-inputs';

// Interface props, Route constants && Schema
import {ScreenDefaultProps} from '../../../@types/interface';
import {OTP} from '../../../navigation/routes';

// Redux state Actions
import {loginUserSuccess} from '../../../redux/features/auth';

// API && Storage
import AuthApi from '../../../services/auth';
import AuthStorage from '../../../utils/storage';

// Components && Helpers && Hooks
import {
  CountDownTimer,
  CustomButton,
  Notification,
} from '../../../components/shared';
import {ErrorMessage} from '../../../components/forms';

import {useAppDispatch} from '../../../hooks';

// Styles, Colors, SVGs
import Styles from './styles';
import {SIZES, STYLES, COLORS, FONTS} from '../../../constants';
import Mesh from '../../../assets/SVGs/signup-login-mesh.svg';
import Lock from '../../../assets/SVGs/lock_icon.svg';
import WelcomeAvatar from '../../../assets/PNGs/welcome_avatar.png';

const OTPVerification = ({
  navigation,
  route,
}: ScreenDefaultProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const {email}: any = route?.params;

  const {width, height} = useWindowDimensions();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const [code, setCode] = useState<string>('');

  const [otpError, setOtpError] = useState<string>('');
  const [message, setMessage] = useState<any>({text: '', title: '', type: ''});
  const [userData, setUserData] = useState<any>();

  // Verification of the OTP Code
  const VerifyOTP = async (): Promise<void> => {
    if (code.length < 4) return setOtpError('Please enter 4 digits valid OTP');

    const result = await AuthApi.verifyOTP({email, code});
    if (!result.ok)
      return setMessage({
        text: result?.data.message,
        title: result?.problem,
        type: 'error',
      });

    setUserData(result?.data);
    setModalVisible(true);
  };

  // Resend OTP Code
  const ResendOTP = async (): Promise<void> => {
    const result = await AuthApi.resendOTP({email});
    if (!result.ok)
      return setMessage({
        text: result?.data.message,
        title: result?.problem,
        type: 'error',
      });
    navigation.replace(OTP, {email});
  };

  // Navigate User to Dashboard
  const NavigateToDashboard = (): void => {
    dispatch(loginUserSuccess(userData?.data));
    // Store user details in the storage
    AuthStorage.setUserData(userData);
    setModalVisible(!modalVisible);
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

      <View
        style={[
          {
            marginHorizontal: SIZES.margin,
            marginTop: SIZES.top,
            marginBottom: SIZES.bottom,
          },
        ]}>
        <Text style={[FONTS.h1, Styles.textDesc, {color: COLORS.secondary}]}>
          Check your email
        </Text>
        <View style={[Styles.subText]}>
          <Text
            style={[
              FONTS.body2,
              Styles.textDesc,
              {color: COLORS.secondaryLight},
            ]}>
            We sent you an email with a code.{'\n'}Please enter the code below
          </Text>
          <View style={[Styles.lockView, {backgroundColor: COLORS.primary}]}>
            <Lock />
          </View>
          {otpError ? <ErrorMessage error={otpError} visible={true} /> : <></>}
        </View>
        <KeyboardAvoidingView
          style={[Styles.container]}
          behavior={Platform.OS === 'ios' ? 'position' : 'height'}
          enabled
          keyboardVerticalOffset={10}>
          <OtpInputs
            autofillFromClipboard={true}
            handleChange={otpCode => {
              setCode(otpCode);
            }}
            numberOfInputs={4}
            style={[Styles.OTPinput]}
            inputStyles={[
              Styles.inputOtp,
              {borderColor: COLORS.placeholder, borderRadius: SIZES.radius},
            ]}
          />

          <Text
            style={[
              Styles.countDown,
              {color: COLORS.secondary, fontSize: SIZES.body2},
            ]}>
            code expires in: <CountDownTimer seconds={300} />
          </Text>
          <View style={[Styles.buttonContainer]}>
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
        </KeyboardAvoidingView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={(): any => {
            setModalVisible(!modalVisible);
          }}>
          <View style={[Styles.modalContainer, {width}]}>
            <View style={[Styles.modalBox, {shadowColor: COLORS.primary}]}>
              <View
                style={[Styles.rectangle, {backgroundColor: COLORS.inputBg}]}>
                <TouchableOpacity
                  onPress={(): void => setModalVisible(!modalVisible)}>
                  <Text>{''}</Text>
                </TouchableOpacity>
              </View>
              <View style={[Styles.avatarContainer]}>
                <Image source={WelcomeAvatar} />
              </View>
              <View style={[Styles.textContainer]}>
                <Text
                  style={[FONTS.h2, Styles.text, {color: COLORS.secondary}]}>
                  Welcome Aboard
                </Text>
                <Text
                  style={[
                    FONTS.body2,
                    Styles.text,
                    {color: COLORS.secondaryLight},
                  ]}>
                  Your user account has been set up. Please complete the profile
                  area with the remaining required information.
                </Text>
              </View>
              <CustomButton
                onPress={NavigateToDashboard}
                label="Go to Dashboard"
                variant="primary"
                loading={false}
              />
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default OTPVerification;
