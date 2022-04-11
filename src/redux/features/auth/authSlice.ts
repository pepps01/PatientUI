import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthState} from '../../../@types/interface';
import {RootState} from '../../store';

const initialState: AuthState = {
  loading: false,
  authenticated: false,
  user: null,
  checkingUser: true,
  viewedOnboarding: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    fetchStart: state => {
      state.loading = true;
    },
    loginUserSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.authenticated = true;
      state.user = action.payload;
    },
    setOnboardingStatusTrue: state => {
      state.checkingUser = false;
      state.viewedOnboarding = true;
    },
    setOnboardingStatusFalse: state => {
      state.checkingUser = false;
      state.viewedOnboarding = false;
    },
    logoutUser: state => {
      state.loading = false;
      state.authenticated = false;
      state.user = null;
    },
  },
});

export const {
  fetchStart,
  loginUserSuccess,
  logoutUser,
  setOnboardingStatusTrue,
  setOnboardingStatusFalse,
} = authSlice.actions;

export const authentication = (state: RootState): any => state.auth;

export default authSlice.reducer;
