import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import {ProductSliceState} from '../../../@types/interface';

const initialState: ProductSliceState = {
  loading: true,
  products: [],
  error: false,
  vendor: [],
  errorVendor: false,
};

export const PurchaseMedicationSlice = createSlice({
  name: 'purchaseMedication',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<any>) => {
      state.loading = action.payload;
    },
    setProducts: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.products = action.payload;
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.loading = false;
      state.error = action.payload;
    },
    setVendor: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.vendor = action.payload;
    },
    setErrorVendor: (state, action: PayloadAction<boolean>) => {
      state.loading = false;
      state.errorVendor = action.payload;
    },
  },
});

export const {setLoading, setProducts, setError, setVendor, setErrorVendor} =
  PurchaseMedicationSlice.actions;

export const medication = (state: RootState): any => state.medication;
export default PurchaseMedicationSlice.reducer;
