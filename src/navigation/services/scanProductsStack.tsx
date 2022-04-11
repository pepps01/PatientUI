import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Navigators Constant
import {PRODUCT_SCAN_HOME} from '../routes';

// Components & Screens for Ambulance Appointment Booking
import {ScanPreview} from '../../screens/RigourMain';

const ScanProductStack = (): JSX.Element => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={PRODUCT_SCAN_HOME}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={PRODUCT_SCAN_HOME} component={ScanPreview} />
    </Stack.Navigator>
  );
};

export default ScanProductStack;
