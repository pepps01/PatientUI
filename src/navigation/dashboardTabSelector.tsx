import React, {useEffect} from 'react';
import {View, Text, useWindowDimensions, StatusBar} from 'react-native';
import {useDrawerStatus} from '@react-navigation/drawer';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

// Interface for Props
import {ScreenDefaultProps} from '../@types/interface';

// Redux and Hooks
import Cart from '../redux/actions/cart';
import {setSelectedRoute, screens} from '../redux/features/screenSlice';
import {useAppDispatch, useAppSelector} from '../hooks';

// Helper Functions && Components
import {IF} from '../helpers';
import {
  AppointmentBookings,
  Dashboard,
  Orders,
  Wallet,
} from '../screens/RigourMain';
import {NavigationTabButton} from '../components/shared';

// Constants
import {COLORS, DrawerScreens, STYLES} from '../constants';

// Styles
import Styles from './styles';

const DashboardTabSelector = ({
  navigation,
  ...props
}: ScreenDefaultProps): JSX.Element => {
  // Windows width & height Dimensions
  const {width, height} = useWindowDimensions();
  const tabRouteName = useAppSelector(screens);
  const dispatch = useAppDispatch();

  // Reanimated Shared Value
  const homeTabFlex: any = useSharedValue<number>(1);
  const homeTabColor: any = useSharedValue<string>(COLORS.primary);
  const bookingsTabFlex: any = useSharedValue<number>(1);
  const bookingsTabColor: any = useSharedValue<string>(COLORS.primary);
  const walletTabFlex: any = useSharedValue<number>(1);
  const walletTabColor: any = useSharedValue<string>(COLORS.primary);
  const ordersTabFlex: any = useSharedValue<number>(1);
  const ordersTabColor: any = useSharedValue<string>(COLORS.primary);

  // Reanimated Animated Style
  const homeTabStyle = useAnimatedStyle(() => {
    return {
      flex: homeTabFlex.value,
    };
  });

  const homeColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: homeTabColor.value,
    };
  });

  const bookingsTabStyle = useAnimatedStyle(() => {
    return {
      flex: bookingsTabFlex.value,
    };
  });

  const bookingsColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: bookingsTabColor.value,
    };
  });

  const walletTabStyle = useAnimatedStyle(() => {
    return {
      flex: walletTabFlex.value,
    };
  });

  const walletColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: walletTabColor.value,
    };
  });

  const ordersTabStyle = useAnimatedStyle(() => {
    return {
      flex: ordersTabFlex.value,
    };
  });

  const ordersColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: ordersTabColor.value,
    };
  });

  // Set Routes to Home
  useEffect(() => {
    dispatch(setSelectedRoute(DrawerScreens.home));
  }, []);

  // Change Focus on Tab Press
  useEffect(() => {
    if (tabRouteName === DrawerScreens?.home) {
      homeTabFlex.value = withTiming(4, {duration: 500});
      homeTabColor.value = withTiming(COLORS.white, {duration: 500});
    } else {
      homeTabFlex.value = withTiming(1, {duration: 500});
      homeTabColor.value = withTiming(COLORS.primary, {duration: 500});
    }
    if (tabRouteName === DrawerScreens?.bookings) {
      bookingsTabFlex.value = withTiming(4, {duration: 500});
      bookingsTabColor.value = withTiming(COLORS.white, {duration: 500});
    } else {
      bookingsTabFlex.value = withTiming(1, {duration: 500});
      bookingsTabColor.value = withTiming(COLORS.primary, {duration: 500});
    }
    if (tabRouteName === DrawerScreens?.wallet) {
      walletTabFlex.value = withTiming(4, {duration: 500});
      walletTabColor.value = withTiming(COLORS.white, {duration: 500});
    } else {
      walletTabFlex.value = withTiming(1, {duration: 500});
      walletTabColor.value = withTiming(COLORS.primary, {duration: 500});
    }
    if (tabRouteName === DrawerScreens?.orders) {
      ordersTabFlex.value = withTiming(4, {duration: 500});
      ordersTabColor.value = withTiming(COLORS.white, {duration: 500});
    } else {
      ordersTabFlex.value = withTiming(1, {duration: 500});
      ordersTabColor.value = withTiming(COLORS.primary, {duration: 500});
    }
  }, [tabRouteName]);

  // Check Drawer Status
  const isDrawerOpen = useDrawerStatus();
  const progress = useSharedValue<any>(0);

  useEffect(() => {
    if (isDrawerOpen === 'open') {
      progress.value = withTiming(1);
    } else {
      progress.value = withTiming(0);
    }
  }, [isDrawerOpen]);

  // Animated Style for the Views
  const animatedStyle = useAnimatedStyle(() => {
    const scaleY = interpolate(progress.value, [0, 1], [1, 0.85], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    const borderRadius = interpolate(progress.value, [0, 1], [1, 35], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    return {
      transform: [{scaleY}],
      borderRadius,
    };
  });

  // Get All Cart
  useEffect(() => {
    dispatch(Cart.getAllCarts());
  }, [dispatch]);

  return (
    <Animated.View
      {...props}
      style={[
        STYLES.container,
        {backgroundColor: COLORS.fullbackground, width, height},
        animatedStyle,
      ]}>
      <View style={[Styles.rootComponentView]}>
        <IF condition={tabRouteName === DrawerScreens?.home}>
          <Dashboard navigation={navigation} {...props} />
        </IF>
        <IF condition={tabRouteName === DrawerScreens?.bookings}>
          <AppointmentBookings />
        </IF>
        <IF condition={tabRouteName === DrawerScreens?.wallet}>
          <Wallet navigation={navigation} />
        </IF>
        <IF condition={tabRouteName === DrawerScreens?.orders}>
          <Orders navigation={navigation} />
        </IF>
      </View>

      <View
        style={[Styles.tabSelectorContainer, {shadowColor: COLORS.primary}]}>
        <View
          style={[
            Styles.navigationBtnContainer,
            {
              backgroundColor:
                isDrawerOpen === 'open' ? COLORS.white : COLORS.primary,
            },
          ]}>
          <NavigationTabButton
            label={DrawerScreens?.home}
            isDrawerOpen={isDrawerOpen}
            isFocused={tabRouteName === DrawerScreens?.home}
            onPress={(): any => {
              dispatch(setSelectedRoute(DrawerScreens?.home));
            }}
            outerContainerStyle={homeTabStyle}
            svgContainerStyle={homeColorStyle}
          />
          <NavigationTabButton
            label={DrawerScreens?.bookings}
            isDrawerOpen={isDrawerOpen}
            isFocused={tabRouteName === DrawerScreens?.bookings}
            onPress={(): any => {
              dispatch(setSelectedRoute(DrawerScreens?.bookings));
            }}
            outerContainerStyle={bookingsTabStyle}
            svgContainerStyle={bookingsColorStyle}
          />
          <NavigationTabButton
            label={DrawerScreens?.wallet}
            isDrawerOpen={isDrawerOpen}
            isFocused={tabRouteName === DrawerScreens?.wallet}
            onPress={(): any => {
              dispatch(setSelectedRoute(DrawerScreens?.wallet));
            }}
            outerContainerStyle={walletTabStyle}
            svgContainerStyle={walletColorStyle}
          />
          <NavigationTabButton
            label={DrawerScreens?.orders}
            isDrawerOpen={isDrawerOpen}
            isFocused={tabRouteName === DrawerScreens?.orders}
            onPress={(): any => {
              dispatch(setSelectedRoute(DrawerScreens?.orders));
            }}
            outerContainerStyle={ordersTabStyle}
            svgContainerStyle={ordersColorStyle}
          />
        </View>
      </View>
    </Animated.View>
  );
};

export default DashboardTabSelector;
