import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store';

interface NavigationRoute {
  selectedRoute: string | any;
  profileInfoEditing: boolean;
  identityInfoEditing: boolean;
}

const initialState: NavigationRoute = {
  selectedRoute: '',
  profileInfoEditing: false,
  identityInfoEditing: false,
};

export const ScreenSlice = createSlice({
  name: 'screens',
  initialState,
  reducers: {
    setSelectedRoute: (state, action: PayloadAction<any>) => {
      state.selectedRoute = action.payload;
    },
    setPersonalInfoEditing: (state, action: PayloadAction<boolean>) => {
      state.profileInfoEditing = action.payload;
    },
    setIdentityInfoEditing: (state, action: PayloadAction<boolean>) => {
      state.identityInfoEditing = action.payload;
    },
  },
});

export const {
  setSelectedRoute,
  setPersonalInfoEditing,
  setIdentityInfoEditing,
} = ScreenSlice.actions;

export const screens = (state: RootState): any => state.screens.selectedRoute;
export const personalInfoEditing = (state: RootState): any =>
  state.screens.profileInfoEditing;
export const identityInfoEditing = (state: RootState): any =>
  state.screens.identityInfoEditing;

export default ScreenSlice.reducer;
