import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

// Interface for props
import {CartCounterProps} from '../../../@types/interface';

// Constants
import {COLORS, FONTS, Icons} from '../../../constants';

const CartCounter = ({
  btnStyle,
  counter,
  cartCountStyle,
  decreaseCount,
  increaseCount,
  iconSize,
}: CartCounterProps): JSX.Element => {
  const [count] = useState<number>(1);

  return (
    <View style={[Styles.cartButtonsContainer]}>
      <Pressable onPress={decreaseCount}>
        <View style={[btnStyle, {borderColor: COLORS.primary}]}>
          <Icons.Feather name="minus" size={iconSize} color={COLORS.primary} />
        </View>
      </Pressable>
      <View style={[cartCountStyle]}>
        <Text style={[FONTS.h2, {color: COLORS.secondary}]}>
          {counter ? counter : count}
        </Text>
      </View>
      <Pressable onPress={increaseCount}>
        <View style={[btnStyle, {borderColor: COLORS.primary}]}>
          <Icons.Feather name="plus" size={iconSize} color={COLORS.primary} />
        </View>
      </Pressable>
    </View>
  );
};

const Styles = StyleSheet.create({
  cartButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

CartCounter.defaultProps = {
  iconSize: 15,
};

export default CartCounter;
