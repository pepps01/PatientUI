import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';

// Helpers && Redux State/Actions && Hooks
import {authentication} from '../redux/features/auth';
import {setUserLogout} from '../redux/actions/auth';
import {IF} from '../helpers';
import {useAppDispatch, useAppSelector} from '../hooks';
import {setSelectedRoute, screens} from '../redux/features/screenSlice';

// Routes Constants
import {CART_SCREEN_DRAWER, USER_PROFILE_STACK} from './routes';

// styles && COLORS && FONTS && SVgs
import Styles from './styles';
import {COLORS, FONTS, SIZES, Icons, DrawerScreens} from '../constants';
import {
  Profile,
  Bookings,
  Settings,
  Wallet,
  Orders,
  Cart,
  Support,
} from './svgIcons';

interface Props {
  navigation: any;
}

const CustomDrawerContent = ({navigation}: Props): JSX.Element => {
  const dispatch = useAppDispatch();

  const routeName = useAppSelector(screens);
  const {user} = useAppSelector(authentication);

  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={[Styles.scrollContainer]}>
      <View style={[Styles.rootContainer]}>
        <View style={[Styles.topDrawer]}>
          <View style={[Styles.textImage]}>
            <Image
              source={{uri: 'https://picsum.photos/200/300'}}
              style={[Styles.image]}
            />
            <Text
              style={[
                FONTS.h4,
                {
                  color: COLORS.white,
                  fontFamily: FONTS.MEDIUM,
                  marginLeft: SIZES.radius,
                },
              ]}>
              {user?.fullName}
            </Text>
          </View>
          <TouchableOpacity
            style={Styles.closeButton}
            onPress={(): void => {
              navigation.closeDrawer();
            }}>
            <Icons.AntDesign name="close" size={16} color={COLORS.white} />
          </TouchableOpacity>
        </View>
        <View style={[Styles.middleDrawer]}>
          <CustomDrawerItems
            label={DrawerScreens.profile}
            isFocused={routeName === DrawerScreens.profile}
            onPress={(): any => {
              dispatch(setSelectedRoute(DrawerScreens.profile));
              navigation.navigate(USER_PROFILE_STACK);
            }}
          />
          <CustomDrawerItems
            label={DrawerScreens.bookings}
            isFocused={routeName === DrawerScreens.bookings}
            onPress={(): any => {
              dispatch(setSelectedRoute(DrawerScreens.bookings));
            }}
          />
          <CustomDrawerItems
            label={DrawerScreens.wallet}
            isFocused={routeName === DrawerScreens.wallet}
            onPress={(): any => {
              dispatch(setSelectedRoute(DrawerScreens.wallet));
            }}
          />
          <CustomDrawerItems
            label={DrawerScreens.orders}
            isFocused={routeName === DrawerScreens.orders}
            onPress={(): any => {
              dispatch(setSelectedRoute(DrawerScreens.orders));
            }}
          />
          <CustomDrawerItems
            label={DrawerScreens.cart}
            isFocused={routeName === DrawerScreens.cart}
            onPress={(): any => {
              dispatch(setSelectedRoute(DrawerScreens.cart));
              navigation.navigate(CART_SCREEN_DRAWER as any);
            }}
          />
          <CustomDrawerItems
            label={DrawerScreens.support}
            isFocused={routeName === DrawerScreens.support}
            onPress={(): any => {
              dispatch(setSelectedRoute(DrawerScreens.support));
            }}
          />
        </View>
        <View style={[Styles.drawerFooter]}>
          <TouchableOpacity
            style={[Styles.settings]}
            onPress={(): any => {
              console.log('//TODO: Settings');
            }}>
            <View>
              <Settings />
            </View>
            <Text
              style={[
                FONTS.h4,
                {
                  color: COLORS.white,
                  marginLeft: SIZES.tiny,
                },
              ]}>
              {DrawerScreens.settings}
            </Text>
          </TouchableOpacity>
          <View style={[Styles.divider, {backgroundColor: COLORS.white}]} />
          <TouchableOpacity
            onPress={(): any => {
              dispatch(setUserLogout());
            }}>
            <Text
              style={[
                FONTS.h4,
                {
                  color: COLORS.white,
                },
              ]}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

type DrawerItems = {
  label: string;
  onPress: (event: any) => void;
  isFocused?: boolean;
};

const CustomDrawerItems = ({
  label,
  isFocused,
  onPress,
}: DrawerItems): JSX.Element => (
  <TouchableOpacity
    style={[
      Styles.boxContent,
      {
        backgroundColor: isFocused ? COLORS.placeholder : 'transparent',
        borderRadius: isFocused ? SIZES.base : 0,
        paddingLeft: isFocused ? SIZES.base : 0,
      },
    ]}
    onPress={onPress}>
    <View style={[Styles.svgIcons]}>
      <IF condition={label === DrawerScreens.profile}>
        <Profile />
      </IF>
      <IF condition={label === DrawerScreens.bookings}>
        <Bookings />
      </IF>
      <IF condition={label === DrawerScreens.wallet}>
        <Wallet />
      </IF>
      <IF condition={label === DrawerScreens.orders}>
        <Orders />
      </IF>
      <IF condition={label === DrawerScreens.cart}>
        <Cart />
      </IF>
      <IF condition={label === DrawerScreens.support}>
        <Support />
      </IF>
    </View>
    <Text
      style={[
        FONTS.h4,
        {
          color: COLORS.white,
          marginLeft: SIZES.font,
        },
      ]}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default CustomDrawerContent;
