import {useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import {PermissionsAndroid, Platform} from 'react-native';
import {MAP_API_KEY} from '@env';

type Region = {
  latitude: number;
  longitude: number;
  latitudeDelta?: number;
  longitudeDelta?: number;
};

export const useLocationPermission = (): any => {
  const [location, setLocation] = useState<Region | any>({});
  const [address, setAddress] = useState<any>({});

  Geocoder.init(MAP_API_KEY, {lang: 'en'});

  const checkAndRequestPermission = async (): Promise<any> => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Rigour+ Permission',
          message: 'Rigour+ needs access to your location ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getCurrentLocation();
      } else {
        console.log('Location permission denied');
      }
    } catch (error) {
      console.log('Location permission error', error);
    }
  };

  const confirmPermission = (): any => {
    if (Platform.OS === 'ios') {
      getCurrentLocation();
    } else {
      checkAndRequestPermission();
    }
  };

  const getCurrentLocation = async (): Promise<any> => {
    Geolocation.getCurrentPosition(
      async position => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        const result = await Geocoder.from(position.coords);
        setAddress(result.results[0].formatted_address);
      },
      error => {
        console.log(error);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  useEffect(() => {
    confirmPermission();
  }, []);

  return {location, address};
};
