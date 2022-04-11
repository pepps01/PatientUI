import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Routes & Navigation Names
import {
  BOOK_APPOINTMENT_STACK,
  BOOK_AMBULANCE_STACK,
  DASHBOARD_HOME,
  PRODUCT_SCAN_STACK,
  PURCHASE_MEDICATION_STACK,
} from './routes';

// RigourMain All Services and Dashboard Tab Component
import DashboardHome from './dashboardDrawer';
import {USER_PROFILE_STACK} from './routes';
import {
  BookAmbulanceStack,
  BookAppointmentStack,
  PurchaseMedicationStack,
  ScanProductStack,
} from './services';
import {UserProfile} from '../screens/RigourMain';

const DashboardStack = (): JSX.Element => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={DASHBOARD_HOME}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={DASHBOARD_HOME} component={DashboardHome} />
      <Stack.Screen name={USER_PROFILE_STACK} component={UserProfile} />
      <Stack.Screen
        name={BOOK_AMBULANCE_STACK}
        component={BookAmbulanceStack}
      />
      <Stack.Screen
        name={BOOK_APPOINTMENT_STACK}
        component={BookAppointmentStack}
      />
      <Stack.Screen
        name={PURCHASE_MEDICATION_STACK}
        component={PurchaseMedicationStack}
      />
      <Stack.Screen name={PRODUCT_SCAN_STACK} component={ScanProductStack} />
    </Stack.Navigator>
  );
};

export default DashboardStack;
