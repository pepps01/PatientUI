import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Navigators Constant
import {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD,
  OTP,
  PasswordOTP,
  PasswordRESET,
  VERIFY_OTP_EMAIL,
} from './routes';

// Components
import {
  Login,
  Register,
  OTPVerification,
  ForgotPassword,
  ForgotPasswordOTP,
  ForgotPasswordReset,
} from '../screens/auth';

const AuthStack = (): JSX.Element => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={LOGIN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={LOGIN} component={Login} />
      <Stack.Screen name={REGISTER} component={Register} />
      <Stack.Screen name={FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={PasswordOTP} component={ForgotPasswordOTP} />
      <Stack.Screen name={PasswordRESET} component={ForgotPasswordReset} />
      <Stack.Screen name={OTP} component={OTPVerification} />
      <Stack.Screen name={VERIFY_OTP_EMAIL} component={OTPVerification} />
    </Stack.Navigator>
  );
};

export default AuthStack;
