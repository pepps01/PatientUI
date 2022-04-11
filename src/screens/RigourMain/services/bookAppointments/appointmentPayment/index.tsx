import React from 'react';
import {View, Text, Image} from 'react-native';

// Interface for props
import {ScreenDefaultProps} from '../../../../../@types/interface';
// Components
import {
  RatingStars,
  PaymentCardWrapper,
} from '../../../../../components/shared';

// Styles, Colors, SVGs
import Clock from '../../../../../assets/SVGs/clock_booking.svg';
import Calendar from '../../../../../assets/SVGs/calendar_booking.svg';
import Styles from './styles';
import {COLORS, SIZES, FONTS} from '../../../../../constants';

const AppointmentPayment = ({route}: ScreenDefaultProps): JSX.Element => {
  const item: any | undefined = route?.params?.item;

  return (
    <PaymentCardWrapper customStyle={[Styles.wrapper]}>
      <Text style={[Styles.infoText, FONTS.h4, {color: COLORS.secondary}]}>
        Scheduled Appointment
      </Text>
      <View style={[Styles.imageNameContainer]}>
        <Image
          source={{uri: 'https://picsum.photos/200/300'}}
          style={[Styles.image]}
        />
        <View style={[Styles.nameTitleContainer]}>
          <View style={[Styles.ratingStars]}>
            <RatingStars rating={item?.rating} />
          </View>
          <Text
            style={[
              Styles.textName,
              {color: COLORS.secondary, fontSize: SIZES.h4},
            ]}>
            {item?.name}
          </Text>

          <Text
            style={[
              Styles.textInfo,
              {color: COLORS.placeholder, fontSize: SIZES.body3},
            ]}>
            {item?.speciality}
          </Text>
          <View style={[Styles.feeText]}>
            <Text
              style={[
                Styles.textInfo,
                {color: COLORS.placeholder, fontSize: SIZES.body3},
              ]}>
              Consultancy Fee:{' '}
            </Text>
            <Text
              style={[
                Styles.textInfo,
                {color: COLORS.secondary, paddingHorizontal: SIZES.tiny},
              ]}>
              {''}
              {item?.price}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={[Styles.calendarContent, {backgroundColor: COLORS.background}]}>
        <View style={[Styles.calendarItems]}>
          <Calendar />
          <Text
            style={[
              Styles.calendarText,
              {color: COLORS.secondary, fontSize: SIZES.body3},
            ]}>
            Tuesday, Feb 1
          </Text>
        </View>
        <View style={[Styles.calendarItems]}>
          <Clock />
          <Text
            style={[
              Styles.calendarText,
              {color: COLORS.secondary, fontSize: SIZES.body3},
            ]}>
            11:00AM - 11:20AM
          </Text>
        </View>
      </View>
    </PaymentCardWrapper>
  );
};

export default AppointmentPayment;
