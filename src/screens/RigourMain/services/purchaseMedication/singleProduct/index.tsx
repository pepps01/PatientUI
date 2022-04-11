import React from 'react';
import {View, Text, useWindowDimensions, Image} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

// Interface for props && Types
import {
  CartItemType,
  ProductTypes,
  ScreenDefaultProps,
} from '../../../../../@types/interface';

// Redux Store && Hooks
import {
  increaseCart,
  decreaseCart,
  cart,
  addToCart,
} from '../../../../../redux/features/cart';
import {useAppDispatch, useAppSelector} from '../../../../../hooks';

// Constants
import {COLORS, FONTS, SIZES, STYLES} from '../../../../../constants';

// Components
import {
  AppStatusBar,
  CardView,
  CartCounter,
  CustomButton,
  Header,
} from '../../../../../components/shared';

// Styles && SVGs
import Styles from './styles';
import Background from '../../../../../assets/SVGs/doctorListingbg.svg';
import {_isEmpty} from '../../../../../helpers';

const SingleProduct = ({
  route,
  navigation,
}: ScreenDefaultProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const {width, height} = useWindowDimensions();
  const {cartItems} = useAppSelector(cart);

  const product: ProductTypes = route?.params?.item;

  // Filter to get the product
  const newCartItem = cartItems.filter(
    (item: CartItemType) => item.product.productId === product.productId,
  );

  // Check if the product is already in the cart
  const countItem = _isEmpty(newCartItem) ? 1 : newCartItem[0].numberOfItems;

  return (
    <SafeAreaView
      style={[
        STYLES.container,
        {backgroundColor: COLORS.fullbackground, width, height},
      ]}>
      <AppStatusBar backgroundColor={COLORS.transparent} />
      <View style={[Styles.overlay]}>
        <Background />
      </View>
      <Header navigateTo={(): void => navigation.goBack()} />
      <View style={[Styles.imageContainer]}>
        <Image
          source={{uri: 'https://picsum.photos/200/300'}}
          style={[Styles.image]}
        />
      </View>
      <View
        style={[
          Styles.body,
          {backgroundColor: COLORS.white, shadowColor: COLORS.primary},
        ]}>
        <View style={[{marginTop: SIZES.margin}]}>
          <Text
            style={[
              FONTS.h2,
              {color: COLORS.secondary, fontSize: SIZES.padding},
            ]}>
            {product?.name}
          </Text>
          <Text style={[FONTS.h3, {color: COLORS.primary}]}>
            {product?.weight}
          </Text>
          <View style={[Styles.priceTag, {backgroundColor: COLORS.primary}]}>
            <Text style={[FONTS.h3, {color: COLORS.white}]}>
              ₦ {product?.price}
            </Text>
          </View>
        </View>

        <CartCounter
          btnStyle={Styles.button}
          counter={countItem}
          cartCountStyle={Styles.cartCount}
          decreaseCount={(): void => {
            dispatch(decreaseCart(newCartItem[0]));
          }}
          increaseCount={(): void => {
            dispatch(increaseCart(newCartItem[0]));
          }}
        />

        <View style={[Styles.productDesc]}>
          <Text style={[FONTS.h3, {color: COLORS.secondary}]}>
            Product Description
          </Text>
          <Text
            style={[
              FONTS.body2,
              {
                color: COLORS.placeholder,
                textAlign: 'justify',
                marginTop: SIZES.font,
              },
            ]}>
            {(product?.description || '').substring(0, 100)}
          </Text>
        </View>
        <View style={[Styles.vendorTitle]}>
          <Text style={[FONTS.h3, {color: COLORS.secondary}]}>Vendor:</Text>
          <Text style={[FONTS.h4, {color: COLORS.placeholder}]}>
            {product?.vendor}
          </Text>
        </View>

        <CardView
          customStyle={[Styles.footer, {backgroundColor: COLORS.white}]}>
          <CustomButton
            onPress={(): void => {
              dispatch(addToCart(product));
            }}
            label="Add to Cart"
            variant="primary"
            loading={false}
          />
        </CardView>
      </View>
    </SafeAreaView>
  );
};

export default SingleProduct;
