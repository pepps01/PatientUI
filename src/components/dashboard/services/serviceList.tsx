import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Interface for Props
import {ServicesDashboardItem} from '../../../@types/interface';

// Components
import {CardView} from '../../shared';

// styles, Constant, SVGs
import Styles from './styles';
import {COLORS, SIZES} from '../../../constants';
import {
  PURCHASE_MEDICATION_STACK,
  PURCHASE_MEDICINE_HOME,
} from '../../../navigation/routes';
import {
  BOOK_AMBULANCE_HOME,
  BOOK_AMBULANCE_STACK,
  BOOK_APPOINTMENT_HOME,
  BOOK_APPOINTMENT_STACK,
  PRODUCT_SCAN_HOME,
  PRODUCT_SCAN_STACK,
} from '../../../navigation/routes';
import {
  AppointmentP,
  AmbulanceP,
  MedicationP,
  InsuranceP,
  ScanP,
  FillPattern,
  ScanW,
  AppointmentW,
  AmbulanceW,
  MedicationW,
  InsuranceW,
} from './iconSVGs';

const ServiceList = ({item}: ServicesDashboardItem): JSX.Element => {
  const navigation: any = useNavigation();
  const [pattern, setPattern] = useState<boolean>(false);

  // Margin Right for the last Item
  const marginRight = item.id === 5 ? SIZES.margin : 0;

  return pattern === true ? (
    <CardView
      customStyle={[
        Styles.cardContainer,
        {borderRadius: SIZES.radius, marginRight},
      ]}>
      <View style={[Styles.svgView]}>
        <FillPattern width={122} height={121} />
      </View>
      <TouchableOpacity
        style={[Styles.cardContent]}
        onPress={(): any => {
          setPattern(!pattern);
        }}>
        <View style={[Styles.icon, {backgroundColor: COLORS.lightBg}]}>
          {item.id === 1 && <AppointmentW />}
          {item.id === 2 && <AmbulanceW />}
          {item.id === 3 && <MedicationW />}
          {item.id === 4 && <InsuranceW />}
          {item.id === 5 && <ScanW />}
        </View>
        <Text
          style={[
            Styles.serviceName,
            {color: COLORS.white, fontSize: SIZES.body2},
          ]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    </CardView>
  ) : (
    <CardView
      customStyle={[
        Styles.cardContainer,
        {borderRadius: SIZES.radius, marginRight},
      ]}>
      <TouchableOpacity
        style={[Styles.cardContent]}
        onPress={(): any => {
          if (item.id === 1) {
            setPattern(true);
            setTimeout((): any => {
              navigation.navigate(BOOK_APPOINTMENT_STACK, {
                screen: BOOK_APPOINTMENT_HOME,
              });
              setPattern(false);
            }, 500);
          }
          if (item.id === 2) {
            setPattern(true);
            setTimeout((): any => {
              navigation.navigate(BOOK_AMBULANCE_STACK, {
                screen: BOOK_AMBULANCE_HOME,
              });
              setPattern(false);
            }, 500);
          }
          if (item.id === 3) {
            setPattern(true);
            setTimeout((): any => {
              navigation.navigate(PURCHASE_MEDICATION_STACK, {
                screen: PURCHASE_MEDICINE_HOME,
              });
              setPattern(false);
            }, 500);
          }
          if (item.id === 5) {
            setPattern(true);
            setTimeout((): any => {
              navigation.navigate(PRODUCT_SCAN_STACK, {
                screen: PRODUCT_SCAN_HOME,
              });
              setPattern(false);
            }, 300);
          }
        }}>
        <View style={[Styles.icon, {backgroundColor: COLORS.background}]}>
          {item.id === 1 && <AppointmentP />}
          {item.id === 2 && <AmbulanceP />}
          {item.id === 3 && <MedicationP />}
          {item.id === 4 && <InsuranceP />}
          {item.id === 5 && <ScanP />}
        </View>
        <Text
          style={[
            Styles.serviceName,
            {color: COLORS.secondary, fontSize: SIZES.body2},
          ]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    </CardView>
  );
};

export default ServiceList;
