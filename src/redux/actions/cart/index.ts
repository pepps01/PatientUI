import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppDispatch} from '../../store';
import ProductAPI from '../../../services/products';

// Toast Notification
import {Toast} from '../../../components/shared';

// Redux Actions
import {getCartItems} from '../../features/cart';

// storage
import Storage from '../../../utils/storage';

// Constants
import {KEYS} from '../../../constants';

// Get All Carts items from the AsyncStorage or server
const getAllCarts =
  () =>
  async (dispatch: AppDispatch): Promise<any> => {
    try {
      const cartItems: any = await AsyncStorage.getItem(KEYS?.CART);
      if (cartItems) {
        dispatch(getCartItems(JSON.parse(cartItems)));
      } else if (!cartItems) {
        const token = await Storage.getToken(KEYS?.AUTH_TOKEN_KEY);
        const response = await ProductAPI.getAllCartItems(JSON.parse(token));

        if (response.ok) {
          await AsyncStorage.setItem(KEYS?.CART, JSON.stringify(cartItems));
          dispatch(getCartItems(cartItems));
        }
      }
    } catch (error: any) {
      Toast.Error({text1: 'Cart Action', text2: error.toString()});
    }
  };

export default {
  getAllCarts,
};
