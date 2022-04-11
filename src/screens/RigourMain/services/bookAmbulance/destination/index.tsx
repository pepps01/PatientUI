import React from 'react';
import {View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {MAP_API_KEY} from '@env';

// Interface for props
import {ScreenDefaultProps} from '../../../../../@types/interface';

// redux Selectors and state management
import {
  ambulance,
  setCurrentLocation,
  setDestination,
} from '../../../../../redux/features/bookAmbulance';

// Components
import {AppStatusBar, Header} from '../../../../../components/shared';

// Navigator Constants
import {AMBULANCE_REQUEST_SCREEN} from '../../../../../navigation/routes';

// Hooks for redux
import {useAppSelector, useAppDispatch} from '../../../../../hooks';

// Styles && SVGs
import Styles from './styles';
import {GPSIcon, DottedIcon, HospitalIcon} from './svgIcons';
import {COLORS, STYLES} from '../../../../../constants';

const LATITUDE_DELTA = 0.026;
const LONGITUDE_DELTA = 0.027;

const AmbulanceDestinationRequest = ({
  navigation,
}: ScreenDefaultProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const {currentLocation} = useAppSelector(ambulance);

  return (
    <View style={[STYLES.container, {backgroundColor: COLORS.fullbackground}]}>
      <AppStatusBar backgroundColor={COLORS.fullbackground} />
      <Header navigateTo={() => navigation.popToTop()} title="Book Ambulance" />
      <View style={[Styles.formContainer]}>
        <View style={[Styles.formGroup]}>
          <View style={[Styles.svgIcon]}>
            <GPSIcon />
          </View>
          <GooglePlacesAutocomplete
            placeholder={
              currentLocation
                ? currentLocation.address.toString()
                : 'Your Location'
            }
            debounce={200}
            onPress={(data, details = null): any => {
              dispatch(
                setCurrentLocation({
                  latitude: details?.geometry?.location?.lat as any,
                  longitude: details?.geometry?.location?.lng as any,
                  latitudeDelta: LATITUDE_DELTA,
                  longitudeDelta: LONGITUDE_DELTA,
                  address: details?.formatted_address as any,
                }),
              );
            }}
            query={{
              key: MAP_API_KEY,
              language: 'en',
            }}
            fetchDetails={true}
            styles={STYLES.googleAutoComplete}
            listUnderlayColor={COLORS.primary}
            enableHighAccuracyLocation={true}
            enablePoweredByContainer={false}
            filterReverseGeocodingByTypes={[
              'locality',
              'administrative_area_level_3',
            ]}
            predefinedPlacesAlwaysVisible
          />
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
          <GooglePlacesAutocomplete
            placeholder="Enter Destination"
            debounce={200}
            onPress={(data, details = null): any => {
              dispatch(
                setDestination({
                  latitude: details?.geometry?.location?.lat as any,
                  longitude: details?.geometry?.location?.lng as any,
                  latitudeDelta: LATITUDE_DELTA,
                  longitudeDelta: LONGITUDE_DELTA,
                  address: details?.formatted_address as any,
                }),
              );
              navigation.navigate(AMBULANCE_REQUEST_SCREEN);
            }}
            query={{
              key: MAP_API_KEY,
              language: 'en',
            }}
            fetchDetails={true}
            listUnderlayColor={COLORS.primary}
            styles={STYLES.googleAutoComplete}
            enableHighAccuracyLocation={true}
            enablePoweredByContainer={false}
            filterReverseGeocodingByTypes={[
              'locality',
              'administrative_area_level_3',
            ]}
            predefinedPlacesAlwaysVisible
          />
        </View>
      </View>
    </View>
  );
};

export default AmbulanceDestinationRequest;
