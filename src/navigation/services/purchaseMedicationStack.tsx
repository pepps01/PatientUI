import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Navigators Constant
import {
  CART_SCREEN,
  MEDICATION_PAYMENT,
  PURCHASE_MEDICINE_HOME,
  SINGLE_PRODUCT,
} from '../routes';

// Components & Screens for PurchaseMedication
import {
  Cart,
  MedicationPaymentConfirmation,
  ProductListing,
  SingleProduct,
} from '../../screens/RigourMain';

const PurchaseMedicationStack = (): JSX.Element => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={PURCHASE_MEDICINE_HOME}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={PURCHASE_MEDICINE_HOME} component={ProductListing} />
      <Stack.Screen name={SINGLE_PRODUCT} component={SingleProduct} />
      <Stack.Screen name={CART_SCREEN} component={Cart} />
      <Stack.Screen
        name={MEDICATION_PAYMENT}
        component={MedicationPaymentConfirmation}
      />
    </Stack.Navigator>
  );
};

export default PurchaseMedicationStack;
