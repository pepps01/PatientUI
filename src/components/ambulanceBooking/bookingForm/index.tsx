import React, {useEffect} from 'react';
import {View, Text, Pressable, Image, ActivityIndicator} from 'react-native';

// Interface for Props
import {ScreenDefaultProps} from '../../../@types/interface';

// Components && Hooks && Routes
import {CustomButton, CustomInput} from '../../shared';
import PlaceholderLoader from './placeholderLoader';
import {
  useLocationPermission,
  useAppDispatch,
  useAppSelector,
} from '../../../hooks';
import {_isEmpty, getClosestPoint} from '../../../helpers';
import {
  AMBULANCE_REQUEST_SCREEN,
  AMBULANCE_DESTINATION_REQUEST,
} from '../../../navigation/routes';

// redux Selectors and state management
import {
  selectHospitals,
  fetchHospitalList,
} from '../../../redux/features/hospitalSlice';
import {
  setCurrentLocation,
  setDestination,
} from '../../../redux/features/bookAmbulance';

// Styles, Colors, Sizes, SVGs
import Styles from './styles';
import {COLORS, FONTS, SIZES} from '../../../constants';
import CouponCard from '../../../assets/PNGs/coupon_card.png';
import {GPSIcon, DottedIcon, HospitalIcon} from './svgIcons';

// Constants
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421;

const BookingForm = ({navigation}: ScreenDefaultProps): JSX.Element => {
  const {location, address} = useLocationPermission();
  const dispatch = useAppDispatch();

  const items = useAppSelector(selectHospitals);

  /*
   *** get the closet hospital for the user current location
   */
  const hospitalItem = Object.values(items).map((item: any, index): any => {
    return {
      _id: index,
      name: item?.name,
      vicinity: item?.vicinity,
      lat: item?.geometry?.location.lat,
      lng: item?.geometry?.location.lng,
    };
  });

  // Stealth and work on the error on load to GetClosestPoint
  const hospital = _isEmpty(address)
    ? ''
    : getClosestPoint(location, hospitalItem, 'km');

  // Fetch Hospitals Nearby Address
  useEffect(() => {
    if (_isEmpty(location)) {
      return;
    } else {
      dispatch(fetchHospitalList(location));
    }
  }, [location]);

  if (_isEmpty(location)) {
    return (
      <View style={[Styles.indicator]}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  // handle form submission
  const handleSubmit = (): any => {
    // TODO: Dispatch user Current Location and Destination with address
    // TODO: Store the Location and address in State object
    // TODO: Navigate user to AMBULANCE_REQUEST_SCREEN
    // TODO: Navigate user to Where to ENTER_LOCATION and DESTINATION_SCREEN
    if (_isEmpty(location) && _isEmpty(hospital)) {
      return;
    } else {
      dispatch(
        setCurrentLocation({
          latitude: location?.latitude,
          longitude: location?.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
          address: address,
        }),
      );
      dispatch(
        setDestination({
          latitude: hospital?.position?.lat,
          longitude: hospital?.position?.lng,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
          address: hospital?.position?.vicinity,
        }),
      );
      navigation.navigate(AMBULANCE_REQUEST_SCREEN);
    }
  };

  return (
    <View style={[Styles.container, {margin: SIZES.padding}]}>
      <View style={[Styles.startContainer]}>
        <View style={[Styles.contentsContainer]}>
          <View style={[Styles.switchBtnRoot]}>
            <View
              style={[
                Styles.switchBtnContainer,
                {backgroundColor: COLORS.btnDefaultBg},
              ]}>
              <Pressable
                style={[
                  Styles.switchButton,
                  {backgroundColor: COLORS.primary},
                ]}>
                <Text
                  style={[
                    {
                      fontFamily: FONTS.MEDIUM,
                      fontSize: SIZES.h5,
                      color: COLORS.white,
                    },
                  ]}>
                  Book Now
                </Text>
              </Pressable>
              <Pressable
                style={[
                  Styles.switchButton,
                  {backgroundColor: COLORS.transparent},
                ]}>
                <Text
                  style={[
                    {
                      fontFamily: FONTS.MEDIUM,
                      fontSize: SIZES.h5,
                      color: COLORS.placeholder,
                    },
                  ]}>
                  Book Later
                </Text>
              </Pressable>
            </View>
          </View>
          <View style={[Styles.couponCard]}>
            <Image source={CouponCard} style={[Styles.couponImage]} />
          </View>
          <View style={[Styles.formRoot]}>
            <Text
              style={[
                {
                  fontFamily: FONTS.MEDIUM,
                  fontSize: SIZES.h4,
                  color: COLORS.placeholder,
                },
              ]}>
              Select Location
            </Text>
            <View style={[Styles.formContainer]}>
              <View style={[Styles.formGroup]}>
                <View style={[Styles.svgIcon]}>
                  <GPSIcon />
                </View>
                <View style={[Styles.inputContainer]}>
                  {_isEmpty(address) ? (
                    <PlaceholderLoader />
                  ) : (
                    <Pressable
                      onPress={(): any => {
                        dispatch(
                          setCurrentLocation({
                            latitude: location?.latitude,
                            longitude: location?.longitude,
                            latitudeDelta: LATITUDE_DELTA,
                            longitudeDelta: LONGITUDE_DELTA,
                            address: address,
                          }),
                        ),
                          navigation.navigate(AMBULANCE_DESTINATION_REQUEST);
                      }}>
                      <CustomInput
                        placeholder="location"
                        value={address.toString().slice(0, 26)}
                        editable={false}
                        textAlign="left"
                      />
                    </Pressable>
                  )}
                </View>
              </View>
              <View style={[Styles.middleForm]}>
                <View style={[Styles.svgIcon]}>
                  <DottedIcon />
                </View>
              </View>
              <View style={[Styles.formGroup]}>
                <View style={[Styles.svgIcon]}>
                  <HospitalIcon />
                </View>
                <View style={[Styles.inputContainer]}>
                  {_isEmpty(hospital) ? (
                    <PlaceholderLoader />
                  ) : (
                    <Pressable
                      onPress={(): any => {
                        dispatch(
                          setCurrentLocation({
                            latitude: location?.latitude,
                            longitude: location?.longitude,
                            latitudeDelta: LATITUDE_DELTA,
                            longitudeDelta: LONGITUDE_DELTA,
                            address: address,
                          }),
                        ),
                          navigation.navigate(AMBULANCE_DESTINATION_REQUEST);
                      }}>
                      <CustomInput
                        placeholder="...Finding nearest hospital"
                        value={
                          _isEmpty(items)
                            ? '...Finding nearest hospital'
                            : hospital.position.name.slice(0, 25)
                        }
                        editable={false}
                        textAlign="left"
                      />
                    </Pressable>
                  )}
                </View>
              </View>
              <View style={[Styles.formDesc]}>
                <Pressable
                  onPress={(): any => {
                    dispatch(
                      setCurrentLocation({
                        latitude: location?.latitude,
                        longitude: location?.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                        address: address,
                      }),
                    ),
                      navigation.navigate(AMBULANCE_DESTINATION_REQUEST);
                  }}>
                  <Text style={[FONTS.body3, {color: COLORS.primary}]}>
                    Choose a different location / hospital
                  </Text>
                </Pressable>
              </View>
              <View style={[Styles.btnBottom]}>
                <CustomButton
                  loading={false}
                  variant="primary"
                  label="Proceed"
                  onPress={handleSubmit}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BookingForm;
