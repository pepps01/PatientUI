import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  StatusBar,
  Platform,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Region, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import {MAP_API_KEY} from '@env';

// Interface for props
import {ScreenDefaultProps} from '../../../../../@types/interface';

// redux Selectors and state management
import {ambulance} from '../../../../../redux/features/bookAmbulance';

// Components
import {CustomButton, Header} from '../../../../../components/shared';

// Hooks && Routes
import {useAppSelector} from '../../../../../hooks';
import {AMBULANCE_NEARBY} from '../../../../../navigation/routes';

// Styles && Colors && Image
import AmbulanceCar from '../../../../../assets/PNGs/ambulance-car.png';
import Styles from './styles';
import {COLORS, FONTS, Icons, SIZES} from '../../../../../constants';

const LATITUDE_DELTA = 0.026;
const LONGITUDE_DELTA = 0.027;

const BookAmbulanceRequest = ({
  navigation,
}: ScreenDefaultProps): JSX.Element => {
  Geocoder.init(MAP_API_KEY, {lang: 'en'});
  const {width, height} = useWindowDimensions();
  const mapRef: any = useRef(null);
  const watchId: any = useRef(null);
  const {currentLocation, destination} = useAppSelector(ambulance);

  const [previewRegion, setPreview] = useState<Region | any>(currentLocation);
  const [destinationRegion, setDestination] = useState<Region | any>(
    destination,
  );
  const [arrivalTime, setArrivalTime] = useState<number | any>(0);

  const getDestination = (): any => {
    watchId.current = Geocoder.from(destination.address.toString()).then(
      (json: any) => {
        const {results} = json;
        const {geometry} = results[0];
        const {location} = geometry;
        const {lat, lng} = location;
        setDestination({
          latitude: lat,
          longitude: lng,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
          address: results[0]?.formatted_address,
        });
      },
    );
  };

  // Get User Location and Track position
  const getUserLocation = async (): Promise<any> => {
    watchId.current = Geolocation.watchPosition(position => {
      setPreview({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      });
    });
  };

  // Watch users location latitude and longitude
  useEffect(() => {
    getUserLocation();
    getDestination();

    return () => {
      Geolocation.clearWatch(watchId.current);
    };
  }, [watchId]);

  // Zoom and Fit Markers Effect
  useEffect(() => {
    const fitTopMap = async (): Promise<any> => {
      if (!previewRegion || !destinationRegion) {
        return;
      }
      await mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
        animated: true,
        edgePadding: {
          right: Math.round(width + height / 3),
          bottom: 100,
          left: Math.round(width + height / 3),
          top: 150,
        },
      });
    };
    fitTopMap();
  }, [previewRegion, destinationRegion]);

  // const mapReadyHandler = useCallback(() => {
  //   if (Platform.OS === 'ios') {
  //     mapRef?.current?.fitToElements(false);
  //   } else {
  //     mapRef?.current?.fitToSuppliedMarkers(['origin', 'destination'], {
  //       edgePadding: {
  //         right: width / 2,
  //         bottom: 50,
  //         left: width / 2,
  //         top: 150,
  //       },
  //     });
  //   }
  // }, [mapRef]);

  // TODO: Zoom and Fit Markers Effect
  // TODO: Native Map direction

  // Watch changes to region
  // const regionChange = (region: Region): void => {
  //   setPreview(region);
  // };

  return (
    <View style={[Styles.container]}>
      <Header
        headerStyle={{marginTop: SIZES.top}}
        navigateTo={() => navigation.popToTop()}
      />
      <MapView
        initialRegion={previewRegion}
        followsUserLocation={true}
        loadingIndicatorColor={COLORS.primary}
        provider={PROVIDER_GOOGLE}
        showsBuildings={true}
        showsIndoorLevelPicker={true}
        showsIndoors={true}
        showsScale={true}
        showsUserLocation={true}
        style={[Styles.map, {width}]}
        ref={mapRef}>
        {currentLocation && (
          <Marker coordinate={previewRegion} identifier={'origin'}>
            <View style={[Styles.origin]}>
              <Icons.MaterialIcons
                name="location-history"
                size={30}
                color={COLORS.primary}
              />
            </View>
          </Marker>
        )}
        {destination && (
          <Marker coordinate={destinationRegion} identifier={'destination'}>
            <View style={[Styles.destination]}>
              <Icons.MaterialCommunityIcons
                name="hospital-marker"
                size={30}
                color={COLORS.primary}
              />
            </View>
          </Marker>
        )}
        {destination && (
          <MapViewDirections
            origin={previewRegion}
            destination={destinationRegion}
            apikey={MAP_API_KEY}
            waypoints={[previewRegion]}
            strokeColor={COLORS.primary}
            strokeWidth={3}
            mode="DRIVING"
            optimizeWaypoints={true}
            onReady={(result): any => {
              setArrivalTime(result.duration);
            }}
          />
        )}
      </MapView>
      <View
        style={[
          Styles.footer,
          {backgroundColor: COLORS.fullbackground, width},
        ]}>
        <View style={[Styles.drawer, {backgroundColor: COLORS.inputBg}]}></View>
        <TouchableOpacity
          onPress={(): void => {
            navigation.navigate(AMBULANCE_NEARBY);
          }}>
          <Text style={[FONTS.body3, {color: COLORS.primary}]}>
            Find a private Ambulance nearby
          </Text>
        </TouchableOpacity>
        <View
          style={[
            Styles.divider,
            {backgroundColor: COLORS.secondaryLight, width},
          ]}></View>
        <View style={[Styles.footerContent, {width}]}>
          <View style={[Styles.footerContentItem]}>
            <View style={[Styles.textImage]}>
              <Image
                source={AmbulanceCar}
                resizeMode="contain"
                style={[Styles.ambulanceCar]}
              />
              <Text
                style={[
                  Styles.info,
                  {fontSize: SIZES.tiny, fontFamily: FONTS.MEDIUM},
                ]}>
                Drop off ({Math.round(arrivalTime)} mins)
              </Text>
            </View>
            <View>
              <Text style={[FONTS.h3, {color: COLORS.secondary}]}>
                EST. NGN 2500
              </Text>
              <Text style={[FONTS.body3, {color: COLORS.placeholder}]}>
                Est. 2,000 - 2,500 NGN
              </Text>
            </View>
          </View>
        </View>
        <CustomButton
          loading={false}
          label="Request Ambulance"
          variant="primary"
        />
      </View>
    </View>
  );
};

export default BookAmbulanceRequest;
