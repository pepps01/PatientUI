import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Navigators Constant
import {
  AMBULANCE_BOOKING,
  AMBULANCE_NEARBY,
  BOOK_AMBULANCE_HOME,
  AMBULANCE_REQUEST_SCREEN,
  AMBULANCE_DESTINATION_REQUEST,
} from '../routes';

// Components & Screens for Ambulance Appointment Booking
import {
  BookAmbulanceHome,
  AmbulanceNearbyListing,
  ConfirmAmbulanceBooking,
  AmbulanceRequest,
  AmbulanceDestinationRequest,
} from '../../screens/RigourMain';

const BookAmbulanceStack = (): JSX.Element => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={BOOK_AMBULANCE_HOME}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={BOOK_AMBULANCE_HOME} component={BookAmbulanceHome} />
      <Stack.Screen
        name={AMBULANCE_NEARBY}
        component={AmbulanceNearbyListing}
      />
      <Stack.Screen
        name={AMBULANCE_BOOKING}
        component={ConfirmAmbulanceBooking}
      />
      <Stack.Screen
        name={AMBULANCE_REQUEST_SCREEN}
        component={AmbulanceRequest}
      />
      <Stack.Screen
        name={AMBULANCE_DESTINATION_REQUEST}
        component={AmbulanceDestinationRequest}
      />
    </Stack.Navigator>
  );
};

export default BookAmbulanceStack;
