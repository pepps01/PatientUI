import React from 'react';
import {View, Text, useWindowDimensions, Image} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

// Interface for props
import {ScreenDefaultProps} from '../../../../../@types/interface';

// Components
import {
  AppStatusBar,
  CardView,
  CustomButton,
  Header,
  RatingStars,
} from '../../../../../components/shared';

// Styles, Colors, SVGs
import Styles from './styles';
import {COLORS, FONTS, Icons, SIZES, STYLES} from '../../../../../constants';
import {BOOKING_PAYMENT} from '../../../../../navigation/routes';

const BookingConsult = ({
  route,
  navigation,
}: ScreenDefaultProps): JSX.Element => {
  const {width, height} = useWindowDimensions();
  const item: any | undefined = route?.params?.item;

  return (
    <SafeAreaView
      style={[
        STYLES.container,
        {backgroundColor: COLORS.fullbackground, width, height},
      ]}>
      <AppStatusBar backgroundColor={COLORS.transparent} />

      <Header
        navigateTo={() => navigation.goBack()}
        title="Book Consult"
        titleViewStyle={{marginLeft: -SIZES.padding}}
      />
      <View
        style={[
          {marginHorizontal: SIZES.margin, marginVertical: SIZES.margin},
        ]}>
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
                {color: COLORS.secondary, fontSize: SIZES.h3},
              ]}>
              {item?.name}
            </Text>
            <Text
              style={[
                Styles.textSpec,
                {color: COLORS.placeholder, fontSize: SIZES.body3},
              ]}>
              {item?.speciality}
            </Text>
          </View>
        </View>
        <Text
          style={[Styles.textDesc, FONTS.body3, {color: COLORS.placeholder}]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh risus
          venenatis nec, diam venenatis. Neque vel duis tristique dolor sit eu.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh risus
          venenatis nec, diam venenatis. Neque vel duis tristique dolor sit eu.{' '}
        </Text>
      </View>
      <View style={[{marginHorizontal: SIZES.margin}]}>
        <Text style={[FONTS.h3, {color: COLORS.secondary}]}>Choose date</Text>
      </View>
      <View style={[{marginHorizontal: SIZES.margin}]}>
        <Text style={[FONTS.h3, {color: COLORS.secondary}]}>
          Available time slots
        </Text>
      </View>
      <View style={[{marginHorizontal: SIZES.margin}]}>
        <CustomButton
          label="Confirm Booking"
          variant="primary"
          loading={false}
          onPress={(): void => {
            navigation.navigate(BOOKING_PAYMENT, {item});
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default BookingConsult;
