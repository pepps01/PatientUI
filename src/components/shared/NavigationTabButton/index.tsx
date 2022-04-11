import React from 'react';
import {Text, Pressable} from 'react-native';
import Animated from 'react-native-reanimated';

// Interface for props
import {NavigationTabButtonProps} from '../../../@types/interface';

// Helper function
import {IF} from '../../../helpers';

// Constants
import {COLORS, DrawerScreens, FONTS, SIZES} from '../../../constants';

// Svgs
import {
  HomeActive,
  HomeInactive,
  BookingsActive,
  BookingsInactive,
  WalletInActive,
  WalletActive,
  OrdersInActive,
  OrdersActive,
} from './svgIcons';

// Styles for
import Styles from './styles';

// Windows width dimensions

const NavigationTabButton = ({
  label,
  isDrawerOpen,
  isFocused,
  onPress,
  outerContainerStyle,
  svgContainerStyle,
}: NavigationTabButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <Animated.View
        style={[Styles.outerAnimatedContainer, outerContainerStyle]}>
        <Animated.View style={[Styles.innerAnimatedContainer]}>
          <Animated.View style={[Styles.svgIconsContainer, svgContainerStyle]}>
            {isFocused ? (
              <IF condition={label === DrawerScreens.home}>
                <HomeActive />
              </IF>
            ) : (
              <IF condition={label === DrawerScreens.home}>
                <HomeInactive />
              </IF>
            )}
            {isFocused ? (
              <IF condition={label === DrawerScreens.bookings}>
                <BookingsActive />
              </IF>
            ) : (
              <IF condition={label === DrawerScreens.bookings}>
                <BookingsInactive />
              </IF>
            )}
            {isFocused ? (
              <IF condition={label === DrawerScreens.wallet}>
                <WalletActive />
              </IF>
            ) : (
              <IF condition={label === DrawerScreens.wallet}>
                <WalletInActive />
              </IF>
            )}
            {isFocused ? (
              <IF condition={label === DrawerScreens.orders}>
                <OrdersActive />
              </IF>
            ) : (
              <IF condition={label === DrawerScreens.orders}>
                <OrdersInActive />
              </IF>
            )}
          </Animated.View>
          {isFocused && (
            <Text
              numberOfLines={1}
              style={[
                FONTS.h3,
                {
                  color:
                    isDrawerOpen === 'open' ? COLORS.primary : COLORS.white,
                  marginTop: SIZES.small,
                  textAlign: 'center',
                },
              ]}>
              {label}
            </Text>
          )}
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};

export default NavigationTabButton;
