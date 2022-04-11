const CUSTOMFONT_REGULAR = 'Muli-Regular';
const CUSTOMFONT_BOLD = 'Muli-Bold';
const CUSTOMFONT_MEDIUM = 'Muli-SemiBold';

import {
  fontPixel,
  pixelSizeVertical,
  heightPixel,
  widthPixel,
} from '../utils/normalize';

export const COLORS = {
  default: '#FFFFFF',
  white: '#FFFFFF',
  black: '#000000',
  lightBlack: '#616161',
  gray: '#F2F2F2',
  lightGray: '#EBEBEB',
  primary: '#6B5DD3',
  secondary: '#090F47',
  secondaryLight: 'rgba(9, 15, 71, 0.45)',
  inputBg: 'rgba(110, 116, 172, 0.05)',
  placeholder: 'rgba(9, 15, 71, 0.22)',
  textSecondary: 'rgba(9, 15, 71, 0.5)',
  btnDefaultBg: '#F4F6FA',
  star: '#FDD118',
  background: '#EFEDF9',
  lightBg: 'rgba(239, 237, 249, 0.2)',
  error: '#FF3B3B',
  success: '#06C270',
  transparent: 'transparent',
  fullbackground: '#FBFAFF',
  textInputBg: '#F8F8FB',
};

export const SIZES = {
  // GLOBAL SIZES
  base: fontPixel(8),
  font: fontPixel(16),
  radius: fontPixel(10),
  padding: fontPixel(20),
  margin: fontPixel(25),
  small: fontPixel(10),
  big: fontPixel(25),
  top: fontPixel(40),
  bottom: fontPixel(30),

  // FONT SIZES
  large: fontPixel(24),
  medium: fontPixel(16),
  tiny: fontPixel(10),
  h1: fontPixel(22),
  h2: fontPixel(18),
  h3: fontPixel(15),
  h4: fontPixel(13),
  h5: fontPixel(11),
  h6: fontPixel(9),
  body1: fontPixel(18),
  body2: fontPixel(12),
  body3: fontPixel(13),
};

export const FONTS = {
  h1: {
    fontFamily: CUSTOMFONT_BOLD,
    fontSize: SIZES.h1,
    lineHeight: pixelSizeVertical(36),
    letterSpacing: 0.05,
  },
  h2: {
    fontFamily: CUSTOMFONT_BOLD,
    fontSize: SIZES.h2,
    lineHeight: pixelSizeVertical(28),
    letterSpacing: 0.05,
  },
  h3: {
    fontFamily: CUSTOMFONT_BOLD,
    fontSize: SIZES.h3,
    lineHeight: pixelSizeVertical(24),
    letterSpacing: 0.05,
  },
  h4: {
    fontFamily: CUSTOMFONT_MEDIUM,
    fontSize: SIZES.h4,
    lineHeight: pixelSizeVertical(22),
    letterSpacing: 0.05,
  },
  body1: {
    fontFamily: CUSTOMFONT_REGULAR,
    fontSize: SIZES.body1,
    lineHeight: pixelSizeVertical(22),
  },
  body2: {
    fontFamily: CUSTOMFONT_REGULAR,
    fontSize: SIZES.body2,
    lineHeight: pixelSizeVertical(22),
  },
  body3: {
    fontFamily: CUSTOMFONT_REGULAR,
    fontSize: SIZES.body3,
    lineHeight: pixelSizeVertical(24),
  },
  MEDIUM: 'Muli-SemiBold',
};

export const STYLES = {
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  googleAutoComplete: {
    container: {
      flex: 1,
    },
    textInputContainer: {
      flexDirection: 'row',
    },
    textInput: {
      color: COLORS.secondary,
      backgroundColor: COLORS.inputBg,
      opacity: 1,
      height: heightPixel(50),
      fontSize: SIZES.h4,
      fontFamily: FONTS.MEDIUM,
      borderRadius: SIZES.radius,
    },
    poweredContainer: {
      paddingVertical: -20,
    },
    powered: {
      height: heightPixel(30),
      width: widthPixel(80),
    },
    separator: {
      backgroundColor: COLORS.primary,
    },
  },
  segmentsControl: {
    activeTextStyle: {
      color: COLORS.white,
      fontSize: fontPixel(12),
      fontFamily: FONTS.MEDIUM,
    },
    inactiveTextStyle: {
      color: COLORS.placeholder,
      fontSize: fontPixel(12),
      fontFamily: FONTS.MEDIUM,
    },
  },
};

export const DrawerScreens = {
  bookings: 'Bookings',
  cart: 'Cart',
  profile: 'Profile',
  home: 'Home',
  orders: 'Orders',
  support: 'Support',
  settings: 'Settings',
  wallet: 'Wallet',
};

const appTheme = {COLORS, SIZES, FONTS, STYLES, DrawerScreens};

export default appTheme;
