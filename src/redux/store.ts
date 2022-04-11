import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {authReducer} from './features/auth';
import {bookAmbulanceReducer} from './features/bookAmbulance';
import {CartReducer} from './features/cart';
import {hospitalReducer} from './features/hospitalSlice';
import {medicationReducer} from './features/purchaseMedication';
import screenReducer from './features/screenSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ambulance: bookAmbulanceReducer,
    cart: CartReducer,
    hospitals: hospitalReducer,
    medication: medicationReducer,
    screens: screenReducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({serializableCheck: false}).concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
