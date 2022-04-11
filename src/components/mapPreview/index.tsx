import React, {useRef, useState} from 'react';
import {useWindowDimensions} from 'react-native';

import MapView, {PROVIDER_GOOGLE, Region} from 'react-native-maps';

// Styles, colors
import Styles from './styles';
import {COLORS} from '../../constants';

const LATITUDE_DELTA = 0.25;
const LONGITUDE_DELTA = 0.35;

const MapPreview = (): JSX.Element => {
  const mapRef: any = useRef(null);
  const [region] = useState<Region>({
    latitude: 6.5580375,
    longitude: 3.3461787,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const {width} = useWindowDimensions();

  return (
    <MapView
      ref={mapRef}
      provider={PROVIDER_GOOGLE}
      style={[Styles.map, {width}]}
      initialRegion={region}
      showsUserLocation={true}
      showsScale={true}
      showsTraffic={true}
      showsIndoors={true}
      loadingIndicatorColor={COLORS.primary}
      showsIndoorLevelPicker={true}
      showsBuildings={true}></MapView>
  );
};

export default MapPreview;
