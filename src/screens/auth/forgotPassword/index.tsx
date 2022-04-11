import React, {useState} from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  KeyboardAvoidingView,
  StatusBar,
  Platform,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {ScrollView} from 'react-native-gesture-handler';

// Interface props & Schemas, Route Constants, Hooks && API
import AuthApi from '../../../services/auth';
import {ForgotPasswordSchema} from '../../../schemas';
import {ScreenDefaultProps} from '../../../@types/interface';
import {PasswordOTP} from '../../../navigation/routes';

// components
import {Form, FormField, SubmitButton} from '../../../components/forms';
import {Notification} from '../../../components/shared';

// Styles, Colors, SVGs
import Mesh from '../../../assets/SVGs/signup-login-mesh.svg';
import {SIZES, STYLES, COLORS, FONTS} from '../../../constants';
import Styles from './styles';

const ForgotPassword = ({navigation}: ScreenDefaultProps): JSX.Element => {
  const [message, setMessage] = useState<any>({text: '', title: '', type: ''});

  // Handle Submit Form
  const handleSubmit = async (
    values: any,
    actions: any,
  ): Promise<any | void> => {
    const {email}: any = values;
    const result = await AuthApi.sendPasswordReset({email});
    actions.setSubmitting(false);
    if (!result.ok)
      return setMessage({
        text: result?.data.message,
        title: result?.problem,
        type: 'error',
      });
    actions.resetForm();

    navigation.navigate(PasswordOTP, {email});
  };
  const {width, height} = useWindowDimensions();
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
          keyboardVerticalOffset={10}>
          <View
            style={[
              {
                marginHorizontal: SIZES.margin,
                marginTop: SIZES.top,
                marginBottom: SIZES.bottom,
              },
            ]}>
            <Text style={[FONTS.h1, {color: COLORS.secondary}]}>
              Reset Password
            </Text>
            <View style={[Styles.subText]}>
              <Text style={[FONTS.body2, {color: COLORS.secondaryLight}]}>
                Provide your credentials to get a reset pin
              </Text>
            </View>
            <View style={[Styles.formContainer]}>
              <Form
                validationSchema={ForgotPasswordSchema}
                initialValues={{email: ''}}
                onSubmit={handleSubmit}>
                <FormField placeholder="Email Address" name="email" />
                <View style={[Styles.buttonContainer]}>
                  <SubmitButton
                    variant="primary"
                    label="Next"
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

export default ForgotPassword;
