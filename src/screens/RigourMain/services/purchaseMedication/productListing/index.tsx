import React, {useEffect, useState, Suspense, lazy} from 'react';
import {View, Text, Pressable, TouchableOpacity, FlatList} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {ScrollView} from 'react-native-gesture-handler';

// Interface for props && Hooks && Redux Store;
import {ScreenDefaultProps} from '../../../../../@types/interface';
import Actions from '../../../../../redux/actions/medication';
import {cart} from '../../../../../redux/features/cart';
import {
  useAppDispatch,
  useAppSelector,
  useLocationPermission,
} from '../../../../../hooks';

//Navigation Options && Helpers
import {CART_SCREEN, DASHBOARD_HOME} from '../../../../../navigation/routes';
import {_isEmpty} from '../../../../../helpers';

// Components:
import {
  AppStatusBar,
  CardView,
  CustomInput,
  FetchingErrorBox,
  Header,
  Placeholder,
  SegmentControlTab,
} from '../../../../../components/shared';
import {VendorItem} from '../../../../../components/purchaseMedication';

// Styles, SVGs && Constants:
import {STYLES, COLORS, SIZES, FONTS} from '../../../../../constants';
import CartIcon from '../../../../../assets/SVGs/cart-icon.svg';
import Styles from './styles';
import {medication} from '../../../../../redux/features/purchaseMedication';

// Lazy Loading All Products
const AllProductsCategory = lazy(
  () =>
    import('../../../../../components/purchaseMedication/allProductsCategory'),
);

const ProductListing = ({navigation}: ScreenDefaultProps): JSX.Element => {
  const {location} = useLocationPermission();
  const dispatch = useAppDispatch();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const {productInCart} = useAppSelector(cart);
  const {vendor, loading, errorVendor} = useAppSelector(medication);

  useEffect(() => {
    dispatch(Actions.fetchProducts());
    dispatch(Actions.fetchVendor(location));
  }, [dispatch, location]);

  return (
    <SafeAreaView
      style={[STYLES.container, {backgroundColor: COLORS.fullbackground}]}>
      <AppStatusBar backgroundColor={COLORS.fullbackground} />
      <Header
        title="Purchase Product"
        navigateTo={(): void => {
          navigation.reset({
            index: 0,
            routes: [{name: DASHBOARD_HOME}],
          });
        }}>
        <CardView customStyle={Styles.cartContainer}>
          <Pressable
            style={[Styles.cartBtn]}
            onPress={(): any => {
              navigation.navigate(CART_SCREEN);
            }}>
            {_isEmpty(productInCart) ? (
              <></>
            ) : (
              <View
                style={[Styles.cartCounter, {backgroundColor: COLORS.error}]}>
                <Text
                  style={[FONTS.h3, {fontSize: SIZES.h4, color: COLORS.white}]}>
                  {productInCart.toString()}
                </Text>
              </View>
            )}
            <CartIcon />
          </Pressable>
        </CardView>
      </Header>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={[{marginVertical: SIZES.h4, marginHorizontal: SIZES.margin}]}>
          <CustomInput
            placeholder="Search for a vendor or product"
            direction="rtl"
          />
        </View>
        <View style={[Styles.segementedBox]}>
          <SegmentControlTab
            currentIndex={selectedIndex}
            onChange={(index: number): void => {
              setSelectedIndex(index);
            }}
            tabs={['Antibiotics', 'Vaccines']}
            paddingVertical={0.3}
            segmentedControlBackgroundColor={COLORS.inputBg}
            activeSegmentBackgroundColor={COLORS.primary}
            activeTextStyle={STYLES.segmentsControl.activeTextStyle}
            inactiveTextStyle={STYLES.segmentsControl.inactiveTextStyle}
          />
        </View>
        <View style={[Styles.vendors]}>
          <View
            style={[Styles.vendorContents, {marginHorizontal: SIZES.margin}]}>
            <Text style={[FONTS.h3, {color: COLORS.secondary}]}>
              Nearest Vendors
            </Text>

            <TouchableOpacity
              onPress={(): void => {
                console.log('//TODO: linking');
              }}>
              <Text
                style={[
                  {
                    color: COLORS.placeholder,
                    fontSize: SIZES.h3,
                    fontFamily: FONTS.MEDIUM,
                  },
                ]}>
                View all
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[{marginTop: SIZES.padding}]}>
            {errorVendor && (
              <FetchingErrorBox
                btnTitle="Search Vendor"
                label="Vendors"
                onPress={(): void => {
                  dispatch(Actions.fetchVendor(location));
                }}
              />
            )}
            {loading ? (
              <>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <Placeholder
                    width={261}
                    height={111}
                    borderRadius={10}
                    marginLeft={20}
                  />
                  <Placeholder
                    width={261}
                    height={111}
                    borderRadius={10}
                    marginLeft={20}
                  />
                </ScrollView>
                <View style={{paddingVertical: SIZES.base}} />
              </>
            ) : (
              <FlatList
                data={vendor}
                horizontal
                keyExtractor={(item, index): any => index.toString()}
                initialNumToRender={1}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}: any): JSX.Element => (
                  <VendorItem item={item} />
                )}
                refreshing={true}
                progressViewOffset={20}
              />
            )}
          </View>

          <View style={[Styles.rootContainer]}>
            <Text
              style={[
                FONTS.h3,
                {color: COLORS.secondary, marginHorizontal: SIZES.margin},
              ]}>
              Products near you
            </Text>
            <Suspense fallback={<View />}>
              <AllProductsCategory navigation={navigation} />
            </Suspense>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductListing;
