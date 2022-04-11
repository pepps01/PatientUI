import React from 'react';
import {View, Text, Image} from 'react-native';

// Interface for props
import {CartItemType} from '../../@types/interface';

// Hooks
import {useAppDispatch} from '../../hooks';

// Components
import {CardView, CartCounter} from '../shared';

// Constants
import {COLORS, FONTS, SIZES} from '../../constants';

// Styles
import Styles from './styles';

interface Props {
  item: CartItemType;
  increaseCart: any;
  decreaseCart: any;
}

const CartItem = ({item, increaseCart, decreaseCart}: Props): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <CardView customStyle={Styles.cartItems}>
      <View style={[Styles.cartItemsContent]}>
        <View style={[Styles.imageContainer]}>
          <Image
            source={{uri: 'https://picsum.photos/200/300'}}
            style={Styles.image}
          />
        </View>
        <View style={[Styles.cartItemText]}>
          <Text style={[FONTS.h3, {color: COLORS.secondary}]}>
            {(item?.product?.name || '').substring(0, 20)}
          </Text>
          <Text
            style={[
              FONTS.h3,
              Styles.priceInfo,
              {color: COLORS.error, fontSize: SIZES.h4},
            ]}>
            ₦ {item?.product?.price || 0}
          </Text>
        </View>
        <View style={[Styles.cartCTA]}>
          <CartCounter
            counter={item?.numberOfItems}
            btnStyle={[Styles.button, {backgroundColor: COLORS.background}]}
            cartCountStyle={Styles.cartCount}
            decreaseCount={(): void => {
              dispatch(decreaseCart(item as any));
            }}
            increaseCount={(): void => {
              dispatch(increaseCart(item as any));
            }}
          />
          <Text
            style={[
              FONTS.h3,
              {
                fontSize: SIZES.h5,
                color: COLORS.secondaryLight,
              },
            ]}>
            ₦ {item?.totalAmount}
          </Text>
        </View>
      </View>
    </CardView>
  );
};

export default CartItem;
