import React from 'react';
import {View, Text, useWindowDimensions, Image, Pressable} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

// Interface for props && Routes
import {ScreenDefaultProps} from '../../../../../@types/interface';
import {BOOKING_CONSULT} from '../../../../../navigation/routes';

// Components
import {
  AppStatusBar,
  CardView,
  CustomButton,
  RatingStars,
} from '../../../../../components/shared';

// Styles, SVGs, Constants
import Styles from './styles';
import Background from '../../../../../assets/SVGs/doctorListingbg.svg';
import Location from '../../../../../assets/SVGs/Location.svg';
import {COLORS, FONTS, Icons, SIZES, STYLES} from '../../../../../constants';

const DoctorsProfile = ({
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
      <View style={[Styles.overlay]}>
        <Background />
      </View>
      <View
        style={[
          Styles.header,
          {
            height: SIZES.top,
            backgroundColor: COLORS.transparent,
            marginHorizontal: SIZES.margin,
            marginVertical: SIZES.small,
          },
        ]}>
        <CardView
          customStyle={[Styles.navigationBtn, {borderRadius: SIZES.base}]}>
          <Pressable onPress={(): void => navigation.goBack()}>
            <Icons.FontAwesome
              name="caret-left"
              size={25}
              color={COLORS.secondary}
            />
          </Pressable>
        </CardView>
        <View style={[Styles.headerContent]}>
          <View style={[Styles.profileImageContainer]}>
            <Image
              source={{uri: 'https://picsum.photos/200/300'}}
              style={[Styles.profileImage, {borderRadius: SIZES.base}]}
            />
          </View>
          <View style={[Styles.ratings]}>
            <RatingStars rating={item?.rating} />
          </View>
          <View style={[Styles.textContainer]}>
            <Text style={[FONTS.h3, {color: COLORS.secondary}]}>
              {item?.name}
            </Text>
            <Text style={[FONTS.body3, {color: COLORS.placeholder}]}>
              {item?.speciality}
            </Text>
          </View>
        </View>
        <View style={[Styles.status]}>
          <Text
            style={[
              Styles.statusText,
              {color: COLORS.secondary, fontSize: SIZES.h4},
            ]}>
            Online
          </Text>
        </View>
      </View>
      <View
        style={[
          Styles.body,
          {backgroundColor: COLORS.white, shadowColor: COLORS.primary},
        ]}>
        <Text
          style={[
            FONTS.h3,
            {color: COLORS.secondary, paddingTop: SIZES.large},
          ]}>
          About Doctor
        </Text>
        <View style={[Styles.bodyContents]}>
          <Text
            style={[
              FONTS.body3,
              {color: COLORS.placeholder, textAlign: 'justify'},
            ]}>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            lectus sed turpis neque, diam mauris eget tempor dui. Eget
            sollicitudin non cursus aliquet egestas orci. Ultrices erat et urna
            platea in iaculis integer dignissim ipsum.{' '}
          </Text>
        </View>
        <View style={[Styles.experienceRating]}>
          <View
            style={[
              Styles.ratingExpContainer,
              {backgroundColor: COLORS.background},
            ]}>
            <Text style={[FONTS.h3, {color: COLORS.secondary}]}>
              100<Text style={[{fontSize: SIZES.h4}]}> +</Text>
            </Text>
            <Text style={[Styles.statusText, {color: COLORS.placeholder}]}>
              Patients
            </Text>
          </View>
          <View
            style={[
              Styles.ratingExpContainer,
              {backgroundColor: COLORS.background},
            ]}>
            <Text style={[FONTS.h3, {color: COLORS.secondary}]}>
              10<Text style={[{fontSize: SIZES.h4}]}> Years</Text>
            </Text>
            <Text style={[Styles.statusText, {color: COLORS.placeholder}]}>
              Experience
            </Text>
          </View>
          <View
            style={[
              Styles.ratingExpContainer,
              {backgroundColor: COLORS.background},
            ]}>
            <Text style={[FONTS.h3, {color: COLORS.secondary}]}>
              {item?.rating}
              <Text style={[{fontSize: SIZES.h4}]}></Text>
            </Text>
            <Text style={[Styles.statusText, {color: COLORS.placeholder}]}>
              Rating
            </Text>
          </View>
        </View>
        <View>
          <Text style={[FONTS.h3, {color: COLORS.secondary}]}>Location</Text>
          <View style={[Styles.locationContents]}>
            <View
              style={[
                Styles.navigationPin,
                {backgroundColor: COLORS.background},
              ]}>
              <Location />
            </View>
            <View style={[Styles.locationNameAddress]}>
              <Text style={[FONTS.h3, {color: COLORS.secondary}]}>
                {item?.location}
              </Text>
              <Text
                style={[Styles.locationAddress, {color: COLORS.placeholder}]}>
                No 8, Folarin Adetokunbo Street, Ikoyi Lagos
              </Text>
            </View>
          </View>
        </View>
        <CardView
          customStyle={[Styles.footer, {backgroundColor: COLORS.white}]}>
          <View style={[Styles.footerViewContents]}>
            <Text
              style={[
                Styles.footerText,
                {color: COLORS.placeholder, fontSize: SIZES.h2},
              ]}>
              Consultant Fee
            </Text>
            <Text style={[FONTS.h2, {color: COLORS.secondary}]}>
              {item?.price}
            </Text>
          </View>
          <CustomButton
            label="Book Appointment"
            variant="primary"
            loading={false}
            onPress={(): void => {
              navigation.navigate(BOOKING_CONSULT, {item});
            }}
          />
        </CardView>
      </View>
    </SafeAreaView>
  );
};

export default DoctorsProfile;
