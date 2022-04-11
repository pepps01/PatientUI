import React, {useState} from 'react';
import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StatusBar,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

// Interface Props, Schemas, Route Constants, Hooks, Helpers
import {LOGIN, OTP} from '../../../navigation/routes';
import {ScreenDefaultProps, SignUpFormInputs} from '../../../@types/interface';
import {SignupSchema} from '../../../schemas';
import {useToggleVisibility} from '../../../hooks';

// Api , Redux State
import AuthApi from '../../../services/auth';

// Components
import {
  CalendarPicker,
  CheckBoxField,
  Form,
  FormField,
  GenderPicker,
  SubmitButton,
} from '../../../components/forms';
import {Notification} from '../../../components/shared';

import SocialAuth from '../../../components/socialAuth';

// Styles && Constants && SVGs
import Styles from './styles';
import {SIZES, STYLES, COLORS, FONTS, KEYS} from '../../../constants';
import Mesh from '../../../assets/SVGs/signup-login-mesh.svg';

const Register = ({navigation}: ScreenDefaultProps): JSX.Element => {
  const {width} = useWindowDimensions();
  // Password Toggle Visibility
  const {isPasswordVisible, Icon, togglePasswordVisibility} =
    useToggleVisibility();
  const [message, setMessage] = useState<any>({text: '', title: '', type: ''});

  // Handle Form Submission
  const handleSubmit = async (
    values: any,
    actions: any,
  ): Promise<any | void> => {
    const {
      email,
      firstName,
      lastName,
      password,
      terms,
      dob,
      gender,
    }: SignUpFormInputs = values;

    const result = await AuthApi.register({
      email,
      firstname: firstName,
      lastname: lastName,
      password,
      date_of_birth: dob,
      gender,
      application_name: KEYS?.APPLICATION_NAME,
      role_id: KEYS?.ROLE_ID,
    });
    actions.setSubmitting(false);

    if (!result.ok)
      return setMessage({
        text: result?.data.message,
        title: result?.data?.errors?.email,
        type: 'error',
      });
    actions.resetForm();

    const userData = result?.data?.data?.email;
    // Navigate to OTP Screen
    navigation.navigate(OTP, {
      email: userData,
    });
  };

  return (
    <SafeAreaView
      style={[STYLES.container, {backgroundColor: COLORS.white, width}]}>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <KeyboardAvoidingView
        style={[Styles.container]}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled>
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
          <View
            style={[
              {
                marginHorizontal: SIZES.margin,
                marginTop: SIZES.top,
                marginBottom: SIZES.bottom,
              },
            ]}>
            <View>
              <Text style={[FONTS.h1, {color: COLORS.secondary}]}>
                Hello, {'\n'}
                Let's get you signed up.
              </Text>
              <View style={[Styles.subText]}>
                <Text style={[FONTS.h3, {color: COLORS.secondaryLight}]}>
                  Already signed up? / {''}
                </Text>
                <TouchableOpacity
                  onPress={(): void => {
                    navigation.navigate(LOGIN);
                  }}>
                  <Text style={[FONTS.h3, {color: COLORS.secondary}]}>
                    Login{' '}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <Form
              validationSchema={SignupSchema}
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                dob: '',
                gender: '',
                terms: false,
              }}
              onSubmit={handleSubmit}>
              <View style={[Styles.formContainer]}>
                <View style={[Styles.userNamesInputView]}>
                  <View style={[Styles.nameInput]}>
                    <FormField
                      name="firstName"
                      placeholder="First Name"
                      returnKeyType="next"
                      textContentType="givenName"
                    />
                  </View>
                  <View style={[Styles.nameInput]}>
                    <FormField
                      name="lastName"
                      placeholder="Last Name"
                      returnKeyType="next"
                      textContentType="familyName"
                    />
                  </View>
                </View>
                <View style={[Styles.inputContainer]}>
                  <FormField
                    name="email"
                    placeholder="Email"
                    returnKeyType="next"
                    textContentType="emailAddress"
                  />
                </View>
                <View style={[Styles.inputContainer]}>
                  <FormField
                    autoCorrect={false}
                    direction="password"
                    enablesReturnKeyAutomatically
                    icon={Icon}
                    name="password"
                    onPress={togglePasswordVisibility}
                    placeholder="Password"
                    returnKeyType="next"
                    secureTextEntry={isPasswordVisible}
                    textContentType="password"
                  />
                </View>

                <CalendarPicker name="dob" />
                <GenderPicker name="gender" />
                <CheckBoxField name="terms" />
                <View style={[Styles.loginBtnContainer]}>
                  <SubmitButton
                    label="Next"
                    variant="primary"
                    loading={false}
                  />
                </View>
              </View>
            </Form>
            <SocialAuth />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;
