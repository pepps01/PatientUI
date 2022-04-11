import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {ScrollView} from 'react-native-gesture-handler';

// Interface for props
import {CartItemType, ScreenDefaultProps} from '../../../@types/interface';

// Redux store and Global Hooks
import {
  cart,
  increaseCart,
  decreaseCart,
  clearCart,
} from '../../../redux/features/cart';
import {useAppSelector, useAppDispatch} from '../../../hooks';

// Helper functions
import {IF} from '../../../helpers';

// Components:
import {
  AppStatusBar,
  CustomButton,
  Header,
  PromoCardBox,
} from '../../../components/shared';
import CartItem from '../../../components/cartItem';

// Routes Constant
import {DASHBOARD_HOME, MEDICATION_PAYMENT} from '../../../navigation/routes';

// Constants:
import {COLORS, FONTS, STYLES} from '../../../constants';

// Styles && SVgs
import EmptyCart from '../../../assets/SVGs/empty_cart.svg';
import Styles from './styles';

const Cart = ({navigation}: ScreenDefaultProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const {cartItems} = useAppSelector(cart);
  const {cartTotalAmount, productInCart, VAT, subTotal} = useAppSelector(cart);

  return (
    <SafeAreaView
      style={[STYLES.container, {backgroundColor: COLORS.fullbackground}]}>
      <AppStatusBar backgroundColor={COLORS.fullbackground} />
      <Header
        navigateTo={(): void => {
          navigation.reset({
            index: 0,
            routes: [{name: DASHBOARD_HOME}],
          });
        }}
        title={`Cart (${productInCart || 0})`}
        titleViewStyle={Styles.titleViewStyle}
      />
      <>
        <IF condition={cartItems && cartItems.length <= 0}>
          <View style={Styles.emptyCartContainer}>
            <View style={[Styles.emptyCartSvg]}>
              <EmptyCart />
            </View>

            <View style={[Styles.textContainer]}>
              <Text
                style={[Styles.textTitle, FONTS.h2, {color: COLORS.secondary}]}>
                Cart is empty.
              </Text>
              <Text
                style={[
                  Styles.textSubtitle,
                  FONTS.body2,
                  {color: COLORS.secondaryLight, fontFamily: FONTS.MEDIUM},
                ]}>
                Make your orders for products needed so they can be added here.
              </Text>
            </View>
          </View>
        </IF>
      </>
      <>
        <IF condition={cartItems && cartItems.length > 0}>
          <View style={[Styles.cartRootContainer]}>
            <TouchableOpacity
              onPress={(): void => {
                dispatch(clearCart());
              }}
              style={[Styles.removeItem]}>
              <Text style={[FONTS.h3, {color: COLORS.secondaryLight}]}>
                Remove all
              </Text>
            </TouchableOpacity>
            <View style={[Styles.cartItemsList]}>
              <ScrollView horizontal={false}>
                {cartItems.map((item: CartItemType, idx: number): any => {
                  return (
                    <CartItem
                      key={idx}
                      item={item}
                      increaseCart={increaseCart}
                      decreaseCart={decreaseCart}
                    />
                  );
                })}
              </ScrollView>
            </View>
            <View style={[Styles.promoContainer]}>
              <PromoCardBox />
            </View>
            <View
              style={[Styles.totalContainer, {backgroundColor: COLORS.white}]}>
              <ScrollView horizontal={false}>
                <View style={[Styles.calculation]}>
                  <View style={[Styles.output]}>
                    <Text style={[FONTS.h3, {color: COLORS.secondary}]}>
                      Subtotal
                    </Text>
                    <Text style={[FONTS.h3, {color: COLORS.secondary}]}>
                      ₦ {subTotal}
                    </Text>
                  </View>
                  <View
                    style={[
                      Styles.divider,
                      {backgroundColor: COLORS.secondary},
                    ]}
                  />

                  <View style={[Styles.output]}>
                    <Text style={[FONTS.h3, {color: COLORS.secondary}]}>
                      Tax
                    </Text>
                    <Text style={[FONTS.h3, {color: COLORS.secondary}]}>
                      ₦ {VAT}
                    </Text>
                  </View>
                  <View
                    style={[
                      Styles.divider,
                      {backgroundColor: COLORS.secondary},
                    ]}
                  />

                  <View style={[Styles.output]}>
                    <Text style={[FONTS.h3, {color: COLORS.secondary}]}>
                      Delivery
                    </Text>
                    <Text style={[FONTS.h3, {color: COLORS.secondary}]}>
                      ₦ 1500
                    </Text>
                  </View>
                  <View
                    style={[
                      Styles.divider,
                      {backgroundColor: COLORS.secondary},
                    ]}
                  />

                  <View style={[Styles.output, Styles.totalOutput]}>
                    <Text style={[FONTS.h2, {color: COLORS.secondary}]}>
                      Total
                    </Text>
                    <Text style={[FONTS.h2, {color: COLORS.secondary}]}>
                      ₦ {cartTotalAmount}
                    </Text>
                  </View>
                </View>
              </ScrollView>
              <View style={{justifyContent: 'flex-end', flex: 1}}>
                <CustomButton
                  label="Proceed Checkout"
                  onPress={(): void => {
                    navigation.navigate(MEDICATION_PAYMENT);
                  }}
                  variant="primary"
                  loading={false}
                />
              </View>
            </View>
          </View>
        </IF>
      </>
    </SafeAreaView>
  );
};

export default Cart;
