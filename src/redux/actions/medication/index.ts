import {AppDispatch} from '../../store';
import ProductAPI from '../../../services/products';

// storage
import Storage from '../../../utils/storage';

// Constants
import {KEYS} from '../../../constants';

import {
  setLoading,
  setProducts,
  setError,
  setVendor,
  setErrorVendor,
} from '../../features/purchaseMedication';
import {Toast} from '../../../components/shared';

// Fetches the products from the server
const fetchProducts =
  () =>
  async (dispatch: AppDispatch): Promise<any> => {
    dispatch(setLoading(true));
    try {
      const token = await Storage.getToken(KEYS?.AUTH_TOKEN_KEY);
      const response = await ProductAPI.getAllProducts(JSON.parse(token));
      dispatch(setLoading(false));
      if (!response.ok) return dispatch(setError(true));

      dispatch(setProducts(response?.data?.data));
    } catch (error) {
      console.log(`Error from getting Products ${error}`);
    }
  };

// Fetch vendor List from server
const fetchVendor = (location: any) => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    const {latitude, longitude} = location;
    const token = await Storage.getToken(KEYS?.AUTH_TOKEN_KEY);
    const response = await ProductAPI.getNearestPharmVendor(
      JSON.parse(token),
      latitude,
      longitude,
    );
    dispatch(setLoading(false));
    if (!response.ok) return dispatch(setErrorVendor(true));

    dispatch(setVendor(response?.data?.data));
    Toast.Success({
      text1: 'Vendor List Fetched Successfully',
      text2: response?.data?.message,
    });
  } catch (error) {
    console.log(`Error from getting Vendor ${error}`);
  }
};

export default {
  fetchProducts,
  fetchVendor,
};
