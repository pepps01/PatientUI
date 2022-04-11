import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {BookAmbulanceState} from '../../../@types/interface';
import {RootState} from '../../store';

const initialState: BookAmbulanceState = {
  loading: true,
  currentLocation: null,
  destination: null,
  ambulance: null,
  error: null,
  mode: '',
};

export const bookAmbulanceSlice = createSlice({
  name: 'ambulance',
  initialState,
  reducers: {
    setCurrentLocation: (state, action: PayloadAction<any>) => {
      state.currentLocation = action.payload;
    },
    setDestination: (state, action: PayloadAction<any>) => {
      state.destination = action.payload;
    },
    setAmbulance: (state, action: PayloadAction<any>) => {
      state.ambulance = action.payload;
    },
    setMode: (state, action: PayloadAction<any>) => {
      state.loading = true;
      state.mode = action.payload;
    },
  },
});

export const {setCurrentLocation, setDestination, setAmbulance, setMode} =
  bookAmbulanceSlice.actions;

export const ambulance = (state: RootState): any => state.ambulance;

export default bookAmbulanceSlice.reducer;
