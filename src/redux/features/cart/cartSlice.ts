import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {KEYS} from '../../../constants';
import {RootState} from '../../store';
import {
  CartItemType,
  CartSliceType,
  ProductTypes,
} from '../../../@types/interface';
import {Toast} from '../../../components/shared';

const initialState: CartSliceType = {
  cartItems: [],
  cartTotalAmount: 0,
  productInCart: 0,
  loading: true,
  VAT: 0,
  subTotal: 0,
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getCartItems: (state, action: PayloadAction<CartItemType[]>) => {
      state.loading = true;
      if (action.payload === null) state.cartItems = [];
      else state.cartItems = action.payload;
      state.loading = false;

      // calculate subTotal
      let subTotal = 0;
      state.cartItems.forEach((item: CartItemType) => {
        subTotal += item.totalAmount;
      });
      state.subTotal = subTotal;
      // calculate VAT
      let VAT = 0;
      state.cartItems.forEach((item: CartItemType) => {
        VAT += item.totalAmount * 0.075;
      });
      state.VAT = subTotal * 0.075;

      // Total Product in Cart
      let productInCart = 0;
      state.cartItems.forEach((item: CartItemType) => {
        productInCart += item.numberOfItems;
      });
      state.productInCart = productInCart;

      // calculate cartTotalAmount
      let cartTotalAmount = 0;
      state.cartItems.forEach((item: CartItemType) => {
        cartTotalAmount += item.totalAmount;
      });
      state.cartTotalAmount = subTotal + state.VAT;
    },
    addToCart: (state, action: PayloadAction<ProductTypes>) => {
      const cartItems = state.cartItems;
      const itemIndex = cartItems.findIndex(
        (item: any) => item.product.productId === action.payload.productId,
      );
      if (itemIndex === -1) {
        const tempProduct = {
          product: action.payload,
          numberOfItems: 1,
          totalAmount: action.payload.price,
        };
        cartItems.push(tempProduct);
        // Subtotal
        state.subTotal += action.payload.price;
        // VAT
        state.VAT = state.subTotal * 0.075;
        // Total
        state.cartTotalAmount = state.subTotal + state.VAT;
        // Product in cart
        state.productInCart += 1;

        // Show toast Notification
        Toast.Success({
          text1: 'Add to Cart',
          text2: `You added ${action.payload.name} to cart`,
        });
        AsyncStorage.setItem(KEYS.CART, JSON.stringify(cartItems));
      } else {
        cartItems[itemIndex].numberOfItems += 1;

        // Total Amount of Single Product
        const totalAmount =
          cartItems[itemIndex].numberOfItems *
          cartItems[itemIndex].product.price;
        cartItems[itemIndex].totalAmount = totalAmount;

        // Calculate Subtotal of all cartItems
        let subTotal = 0;
        cartItems.forEach((item: CartItemType) => {
          subTotal += item.totalAmount;
        });
        state.subTotal = subTotal;

        // Calculate VAT of all cartItems
        let VAT = 0;
        cartItems.forEach((item: CartItemType) => {
          VAT += item.totalAmount * 0.075;
        });
        state.VAT = VAT;

        // Calculate Total Product in Cart
        let productInCart = 0;
        cartItems.forEach((item: CartItemType) => {
          productInCart += item.numberOfItems;
        });
        state.productInCart = productInCart;

        // Calculate Total Amount of Cart
        let cartTotalAmount = 0;
        cartItems.forEach((item: CartItemType) => {
          cartTotalAmount += item.totalAmount;
        });
        state.cartTotalAmount = cartTotalAmount;
      }
      // Show toast Notification
      Toast.Success({
        text1: 'Add to Cart',
        text2: `You added ${action.payload.name} to cart`,
      });
      AsyncStorage.setItem(KEYS.CART, JSON.stringify(cartItems));
    },
    increaseCart: (state, action: PayloadAction<CartItemType>) => {
      if (action.payload === undefined)
        return Toast.Error({
          text1: 'Add Product to Cart',
          text2: 'Click on ADD TO CART Button',
        });
      const cartItems: any = state.cartItems;
      const itemIndex = cartItems.findIndex(
        (item: any) =>
          item.product.productId === action.payload.product.productId,
      );
      if (state.cartItems[itemIndex]) {
        if (state.cartItems[itemIndex].numberOfItems >= 1) {
          state.cartItems[itemIndex].numberOfItems += 1;

          // Total Amount of Single Product
          const totalAmount =
            state.cartItems[itemIndex].numberOfItems *
            state.cartItems[itemIndex].product.price;
          state.cartItems[itemIndex].totalAmount = totalAmount;
          // Calculate Subtotal of all cartItems
          let subTotal = 0;
          cartItems.forEach((item: CartItemType) => {
            subTotal += item.totalAmount;
          });
          state.subTotal = subTotal;

          // Calculate VAT of all cartItems
          let VAT = 0;
          cartItems.forEach((item: CartItemType) => {
            VAT += item.totalAmount * 0.075;
          });
          state.VAT = VAT;

          // Calculate Total Product in Cart
          let productInCart = 0;
          cartItems.forEach((item: CartItemType) => {
            productInCart += item.numberOfItems;
          });
          state.productInCart = productInCart;

          // Calculate Total Amount of Cart
          let cartTotalAmount = 0;
          cartItems.forEach((item: CartItemType) => {
            cartTotalAmount += item.totalAmount;
          });
          state.cartTotalAmount = cartTotalAmount;
          // Show toast Notification
          Toast.Success({
            text1: 'Add to Cart',
            text2: `You added ${action.payload.product.name} to cart`,
          });
          AsyncStorage.setItem(KEYS.CART, JSON.stringify(cartItems));
        }
      } else {
        return Toast.Error({
          text1: 'Add Product to Cart',
          text2: 'Click on ADD TO CART Button',
        });
      }
    },
    decreaseCart: (state, action: PayloadAction<CartItemType>) => {
      if (action.payload === undefined)
        return Toast.Error({
          text1: 'Product Not Found',
          text2: 'Click on ADD TO CART Button',
        });
      const cartItems = state.cartItems;
      const itemIndex = cartItems.findIndex(
        (item: any) =>
          item.product.productId === action.payload.product.productId,
      );
      if (state.cartItems[itemIndex]) {
        if (state.cartItems[itemIndex].numberOfItems > 1) {
          state.cartItems[itemIndex].numberOfItems -= 1;

          // Total Amount of Single Product
          const totalAmount =
            state.cartItems[itemIndex].numberOfItems *
            state.cartItems[itemIndex].product.price;
          state.cartItems[itemIndex].totalAmount = totalAmount;
          // Calculate Subtotal of all cartItems
          let subTotal = 0;
          cartItems.forEach((item: CartItemType) => {
            subTotal += item.totalAmount;
          });
          state.subTotal = subTotal;

          // Calculate VAT of all cartItems
          let VAT = 0;
          cartItems.forEach((item: CartItemType) => {
            VAT += item.totalAmount * 0.075;
          });
          state.VAT = VAT;

          // Calculate Total Product in Cart
          let productInCart = 0;
          cartItems.forEach((item: CartItemType) => {
            productInCart += item.numberOfItems;
          });
          state.productInCart = productInCart;

          // Calculate Total Amount of Cart
          let cartTotalAmount = 0;
          cartItems.forEach((item: CartItemType) => {
            cartTotalAmount += item.totalAmount;
          });
          state.cartTotalAmount = cartTotalAmount;

          AsyncStorage.setItem(KEYS.CART, JSON.stringify(cartItems));
        }

        // Delete Product from cart if less than one
        else if (state.cartItems[itemIndex].numberOfItems === 1) {
          const removeCartItem = state.cartItems.filter(
            (item: any) =>
              item.product.productId !== action.payload.product.productId,
          );
          state.cartItems = removeCartItem;
          state.VAT = 0;
          state.subTotal = 0;
          state.productInCart = 0;
          state.cartTotalAmount = 0;

          // Show toast Notification
          Toast.Success({
            text1: 'Remove from Cart',
            text2: `You removed ${action.payload.product.name} from cart`,
          });

          AsyncStorage.removeItem(KEYS.CART);
        }
      }
    },
    clearCart: state => {
      state.cartItems = [];
      state.VAT = 0;
      state.subTotal = 0;
      state.cartTotalAmount = 0;
      state.productInCart = 0;
      AsyncStorage.removeItem(KEYS.CART);

      Toast.Success({text1: 'CART CLEARED', text2: 'Your cart is empty'});
    },
  },
});

export const {getCartItems, addToCart, increaseCart, decreaseCart, clearCart} =
  CartSlice.actions;

export const cart = (state: RootState): any => state.cart;

export default CartSlice.reducer;
