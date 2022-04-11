import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {ScrollView} from 'react-native-gesture-handler';

// Interface for props, mock data
import {ScreenDefaultProps} from '../../../../../@types/interface';

// Components
import {
  AppStatusBar,
  CardView,
  CustomButton,
  Header,
} from '../../../../../components/shared';

// Styles, Colors, SVGs
import Styles from './styles';
import {COLORS, FONTS, Icons, SIZES, STYLES} from '../../../../../constants';
import Clock from '../../../../../assets/SVGs/clock_booking.svg';

const ConfirmAmbulanceBooking = ({
  route,
  navigation,
}: ScreenDefaultProps): JSX.Element => {
  const {width, height} = useWindowDimensions();

  const item: any = route?.params?.item;

  console.log('item', item);

  return (
    <SafeAreaView
      style={[
        STYLES.container,
        {backgroundColor: COLORS.fullbackground, width, height},
      ]}>
      <AppStatusBar backgroundColor={COLORS.transparent} />
      <Header navigateTo={() => navigation.popToTop()} title="Book Ambulance" />
      <ScrollView>
        <View style={[Styles.rootContainer]}>
          <View style={[Styles.imageContainer]}>
            <Image
              source={{uri: 'https://picsum.photos/200/300'}}
              style={[Styles.image]}
            />
          </View>
        </View>
        <View
          style={[
            {marginBottom: SIZES.bottom, marginHorizontal: SIZES.margin},
          ]}>
          <CardView
            customStyle={[Styles.cardContainer, {borderRadius: SIZES.radius}]}>
            <View style={[Styles.ambulanceDesc]}>
              <Text style={[FONTS.body3, {color: COLORS.placeholder}]}>
                Ambulance's name
              </Text>
              <Text
                style={[
                  {
                    color: COLORS.secondary,
                    fontFamily: FONTS.MEDIUM,
                    fontSize: SIZES.h3,
                    lineHeight: SIZES.bottom,
                  },
                ]}>
                SU Ambulance
              </Text>
            </View>
          </CardView>
          <CardView
            customStyle={[Styles.cardContainer, {borderRadius: SIZES.radius}]}>
            <View></View>
          </CardView>
          <View style={[Styles.formContainer]}>
            <View style={[Styles.callToAction]}>
              <View style={[Styles.descText]}>
                <View
                  style={[Styles.btnAction, {borderColor: COLORS.secondary}]}>
                  <Text
                    style={[
                      {
                        color: COLORS.secondary,
                        fontFamily: FONTS.MEDIUM,
                        fontSize: SIZES.h3,
                      },
                    ]}>
                    Pick up
                  </Text>
                </View>
                <View
                  style={[Styles.btnAction, {borderColor: COLORS.secondary}]}>
                  <Text
                    style={[
                      {
                        color: COLORS.secondary,
                        fontFamily: FONTS.MEDIUM,
                        fontSize: SIZES.h3,
                      },
                    ]}>
                    Drop off
                  </Text>
                </View>
              </View>
              <View style={[Styles.descText]}>
                {/* //TODO: Look for a TimePicker for a Form  */}
                <View
                  style={[
                    Styles.infoContainer,
                    {
                      backgroundColor: COLORS.inputBg,
                      borderColor: COLORS.inputBg,
                    },
                  ]}>
                  <TouchableOpacity style={[Styles.timeContent]}>
                    <Text
                      style={[
                        {
                          color: COLORS.placeholder,
                          fontFamily: FONTS.MEDIUM,
                          fontSize: SIZES.h3,
                        },
                      ]}>
                      Time
                    </Text>
                    <Clock />
                  </TouchableOpacity>
                </View>
                <View
                  style={[
                    Styles.infoContainer,
                    {
                      backgroundColor: COLORS.inputBg,
                      borderColor: COLORS.inputBg,
                    },
                  ]}>
                  <TouchableOpacity style={[Styles.timeContent]}>
                    <Text
                      style={[
                        {
                          color: COLORS.placeholder,
                          fontFamily: FONTS.MEDIUM,
                          fontSize: SIZES.h3,
                        },
                      ]}>
                      Time
                    </Text>
                    <Clock />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={[Styles.btnContainer]}>
              <CustomButton
                loading={false}
                onPress={(): any => {
                  console.log('// TODO: Route to payment');
                }}
                label="Book"
                variant="primary"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConfirmAmbulanceBooking;
