import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Region} from 'react-native-maps';

// Interface for props
import {ScreenDefaultProps} from '../../../../../@types/interface';

// Components:
import MapPreview from '../../../../../components/mapPreview';
import {PaymentCardWrapper} from '../../../../../components/shared';

// Constants:
import {COLORS, FONTS} from '../../../../../constants';

// styles
import Styles from './styles';

const LATITUDE_DELTA = 0.25;
const LONGITUDE_DELTA = 0.35;

const MedicationPaymentConfirmation = ({
  route,
}: ScreenDefaultProps): JSX.Element => {
  const mapRef: any = useRef(null);
  // const item: any | undefined = route?.params?.item;

  const [region] = useState<Region>({
    latitude: 6.5580375,
    longitude: 3.3461787,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  return (
    <PaymentCardWrapper customStyle={{padding: 12}} label={'Add New'}>
      <Text style={[FONTS.h3, {color: COLORS.secondary}]}>
        Preferred Address
      </Text>
      <Text
        style={[FONTS.body2, Styles.address, {color: COLORS.secondaryLight}]}>
        No. 24 Ayo Makun Avenue, {'\n'}Off Ikeja Mall, Ikeja Lagos
      </Text>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={[Styles.map, {width: '100%'}]}
        initialRegion={region}
        showsUserLocation={true}
        showsScale={true}
        showsTraffic={true}
        showsIndoors={true}
        loadingIndicatorColor={COLORS.primary}
        showsIndoorLevelPicker={true}
        showsBuildings={true}
      />
    </PaymentCardWrapper>
  );
};

export default MedicationPaymentConfirmation;
