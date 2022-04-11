import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import {MAP_API_KEY} from '@env';

export interface LocationState {
  fetchHospital: boolean;
  hospitals: any[];
  status: string | null;
}

const initialState: LocationState = {
  fetchHospital: false,
  hospitals: [],
  status: '',
};

export const fetchHospitalList = createAsyncThunk(
  'location/fetchHospitalList',
  async (location: any) => {
    const {latitude, longitude} = location;
    const radius = 2000;
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=hospital&key=${MAP_API_KEY}`,
      );

      if (response.status === 200) {
        const data = (await response.json()).results;
        return data;
      }
    } catch (err) {
      console.log(err);
    }
  },
);

export const HospitalLocationSlice = createSlice({
  name: 'hospitals',
  initialState,

  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchHospitalList.pending, (state: any) => {
      state.fetchHospital = true;
      state.status = 'loading';
    });
    builder.addCase(fetchHospitalList.rejected, (state: any) => {
      state.fetchHospital = false;
      state.status = 'rejected';
    });
    builder.addCase(
      fetchHospitalList.fulfilled,
      (state: any, action: PayloadAction<any>) => {
        state.fetchHospital = false;
        state.hospitals = action.payload;
        state.status = 'fulfilled';
      },
    );
  },
});

export const selectHospitals = (state: RootState): any =>
  state.hospitals.hospitals;

export default HospitalLocationSlice.reducer;
