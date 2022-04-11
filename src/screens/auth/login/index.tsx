import React, {useState} from 'react';
import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Keyboard,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {ScrollView} from 'react-native-gesture-handler';

// Schemas, Interface Props, Route Constants, Helper Functions, Hooks
import {LoginSchema} from '../../../schemas';
import {ScreenDefaultProps, SignInInputs} from '../../../@types/interface';
import {
  REGISTER,
  FORGOT_PASSWORD,
  VERIFY_OTP_EMAIL,
} from '../../../navigation/routes';
import {useAppDispatch, useToggleVisibility} from '../../../hooks';

// Api , Redux State, Storage && Keys
import AuthApi from '../../../services/auth';
import AuthStorage from '../../../utils/storage';
import {loginUserSuccess} from '../../../redux/features/auth';
import {KEYS} from '../../../constants';

// components
import {Form, FormField, SubmitButton} from '../../../components/forms';
import {Notification, Toast} from '../../../components/shared';
import SocialAuth from '../../../components/socialAuth';

// Styles, Colors, SVGs
import Styles from './styles';
import {SIZES, STYLES, COLORS, FONTS} from '../../../constants';
import Mesh from '../../../assets/SVGs/signup-login-mesh.svg';
import Print from '../../../assets/SVGs/fingerprint.svg';

const Login = ({navigation}: ScreenDefaultProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const {width, height} = useWindowDimensions();
  // Password Toggle Visibility
  const {isPasswordVisible, Icon, togglePasswordVisibility} =
    useToggleVisibility();

  const [message, setMessage] = useState<any>({text: '', title: '', type: ''});

  const handleSubmit = async (
    values: any,
    actions: any,
  ): Promise<any | void> => {
    const {email, password}: SignInInputs = values;
    const result = await AuthApi.login({email, password});

    actions.setSubmitting(false);
    if (!result.ok)
      return setMessage({
        text: result?.data.message,
        title: result?.problem,
        type: 'error',
      });

    const emailVerification = result?.data?.data?.emailVerifiedStatus;
    if (emailVerification !== KEYS.VERIFIED_EMAIL_KEY)
      return navigation.navigate(VERIFY_OTP_EMAIL, {email});

    actions.resetForm();
    dispatch(loginUserSuccess(result?.data?.data));
    Toast.Success({text1: 'Welcome to Rigour+', text2: result?.data?.message});
    // Store user details in the storage
    const data = result?.data;
    AuthStorage.setUserData(data);
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
        backgroundColor={COLORS.transparent}
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
          style={[Styles.container]}
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
            <Text style={[FONTS.h1, {color: COLORS.secondary}]}>
              Welcome Back
            </Text>
            <View style={[Styles.subText]}>
              <Text style={[FONTS.h3, {color: COLORS.secondaryLight}]}>
                Don't have an account? / {''}
              </Text>
              <TouchableOpacity
                onPress={(): void => {
                  navigation.navigate(REGISTER);
                }}>
                <Text style={[FONTS.h3, {color: COLORS.secondary}]}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
            <Form
              validationSchema={LoginSchema}
              initialValues={{email: '', password: ''}}
              onSubmit={handleSubmit}>
              <View style={[Styles.formContainer]}>
                <View>
                  <FormField
                    name="email"
                    placeholder="Email Address"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    returnKeyType="next"
                    enablesReturnKeyAutomatically={true}
                  />
                </View>
                <View style={[Styles.passwordThumbContainer]}>
                  <View style={[Styles.inputContainer]}>
                    <FormField
                      autoCorrect={false}
                      direction="password"
                      enablesReturnKeyAutomatically
                      icon={Icon}
                      name="password"
                      onPress={togglePasswordVisibility}
                      onSubmitEditing={Keyboard.dismiss}
                      placeholder="Password"
                      returnKeyType="next"
                      secureTextEntry={isPasswordVisible}
                      textContentType="password"
                    />
                  </View>
                  <TouchableOpacity
                    onPress={(): void =>
                      console.log('//TODO: Popup FingerPrint Verfication')
                    }
                    style={[
                      Styles.thumbPrintContainer,
                      {backgroundColor: COLORS.inputBg},
                    ]}>
                    <Print />
                  </TouchableOpacity>
                </View>
                <View style={[Styles.forgotPasswordInput]}>
                  <TouchableOpacity
                    onPress={(): any => {
                      navigation.navigate(FORGOT_PASSWORD);
                    }}>
                    <Text
                      style={[
                        FONTS.h3,
                        {
                          color: COLORS.secondaryLight,
                          fontFamily: FONTS.MEDIUM,
                        },
                      ]}>
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={[Styles.buttonContainer]}>
                  <SubmitButton
                    variant="primary"
                    label="Login"
                    loading={false}
                  />
                </View>
              </View>
            </Form>
            <SocialAuth />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
