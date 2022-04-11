import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

// Interface props, Route constants && Schema
import {
  ScreenDefaultProps,
  ResetPasswordInputProps,
} from '../../../@types/interface';

// API && Schemas
import AuthApi from '../../../services/auth';
import {PasswordResetSchema} from '../../../schemas';

// Components && Helpers && Hooks
import {useToggleVisibility} from '../../../hooks';
import {Form, FormField, SubmitButton} from '../../../components/forms';
import {Notification} from '../../../components/shared';

// Styles, Colors, SVGs
import Styles from './styles';
import {SIZES, STYLES, COLORS, FONTS} from '../../../constants';
import Mesh from '../../../assets/SVGs/signup-login-mesh.svg';

const ForgotPasswordReset = ({
  navigation,
  route,
}: ScreenDefaultProps): JSX.Element => {
  const {email}: any = route?.params;
  // Password Toggle Visibility
  const {isPasswordVisible, Icon, togglePasswordVisibility} =
    useToggleVisibility();
  const {width, height} = useWindowDimensions();

  const [message, setMessage] = useState<any>({text: '', title: '', type: ''});

  // Handle Submit Form
  const handleSubmit = async (
    values: any,
    actions: any,
  ): Promise<any | void> => {
    const {password, c_password}: ResetPasswordInputProps = values;
    const result = await AuthApi.verifyPasswordReset({
      email,
      password,
      password_confirmation: c_password,
    });
    actions.setSubmitting(false);
    if (!result.ok)
      return setMessage({
        text: result?.data.message,
        title: result?.problem,
        type: 'error',
      });
    actions.resetForm();

    navigation.popToTop();
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
            <Text style={[FONTS.h2, {color: COLORS.secondary}]}>
              Please, fill in your new password
            </Text>
            <View style={[Styles.formContainer]}>
              <Form
                validationSchema={PasswordResetSchema}
                initialValues={{password: '', c_password: ''}}
                onSubmit={handleSubmit}>
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
                <View style={[Styles.inputContainer]}>
                  <FormField
                    autoCorrect={false}
                    direction="password"
                    enablesReturnKeyAutomatically
                    icon={Icon}
                    name="c_password"
                    onPress={togglePasswordVisibility}
                    placeholder="Confirm Password"
                    returnKeyType="next"
                    secureTextEntry={isPasswordVisible}
                    textContentType="password"
                  />
                </View>
                <View style={[Styles.passwordSubmit]}>
                  <SubmitButton
                    label="Submit"
                    variant="primary"
                    loading={false}
                  />
                </View>
              </Form>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPasswordReset;
