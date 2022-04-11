import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Navigators Constant
import {
  BOOKING_CONSULT,
  BOOKING_PAYMENT,
  BOOK_APPOINTMENT_HOME,
  SINGLE_DOCTORS_PROFILE,
  VIDEO_CALLING_RTC,
} from '../routes';

// Components & Screens for Ambulance Appointment Booking
import {
  ListDoctors,
  DoctorsProfile,
  ConsultDoctor,
  BookAppointmentPayment,
} from '../../screens/RigourMain';
import VideoRTC from '../../components/videoRTC';

const BookAppointmentStack = (): JSX.Element => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={BOOK_APPOINTMENT_HOME}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={BOOK_APPOINTMENT_HOME} component={ListDoctors} />
      <Stack.Screen name={SINGLE_DOCTORS_PROFILE} component={DoctorsProfile} />
      <Stack.Screen name={BOOKING_CONSULT} component={ConsultDoctor} />
      <Stack.Screen name={BOOKING_PAYMENT} component={BookAppointmentPayment} />
      <Stack.Screen name={VIDEO_CALLING_RTC} component={VideoRTC} />
    </Stack.Navigator>
  );
};

export default BookAppointmentStack;
