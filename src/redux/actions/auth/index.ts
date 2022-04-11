import AsyncStorage from '@react-native-async-storage/async-storage';

import {AppDispatch} from '../../store';
import {KEYS} from '../../../constants';

import {
  logoutUser,
  loginUserSuccess,
  setOnboardingStatusFalse,
  setOnboardingStatusTrue,
} from '../../features/auth';

// Check device Onboarding Status
export const checkDeviceOnboardingStatus =
  () =>
  async (dispatch: AppDispatch): Promise<any> => {
    try {
      const value = await AsyncStorage.getItem(KEYS?.ONBOARDING_KEY);
      if (value !== null) {
        const result: any = await checkUserAuthStatus();
        if (result) dispatch(loginUserSuccess(result));
        dispatch(setOnboardingStatusTrue());
      } else {
        dispatch(setOnboardingStatusFalse());
      }
    } catch (error) {}
  };

// Set the Device Onboarding status
export const setDeviceOnboardingStatus =
  (status: boolean) =>
  async (dispatch: AppDispatch): Promise<any> => {
    try {
      await AsyncStorage.setItem(KEYS?.ONBOARDING_KEY, status.toString());
      dispatch(setOnboardingStatusTrue());
    } catch (error) {}
  };

// Check User Auth Status
export const checkUserAuthStatus = async (): Promise<any> => {
  try {
    const userInfo: any = await AsyncStorage.getItem(KEYS?.USER_INFO_KEY);
    if (!userInfo) {
      return null;
    } else {
      const userData = JSON.parse(userInfo);
      return userData;
    }
  } catch (error) {
    console.log(error);
  }
};

// Logout User
export const setUserLogout = () => {
  return async (dispatch: AppDispatch): Promise<any> => {
    try {
      await AsyncStorage.removeItem(KEYS?.USER_INFO_KEY);
      dispatch(logoutUser());
    } catch (error) {}
  };
};
