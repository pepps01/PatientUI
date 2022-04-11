import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

// Interface for Props and
import {ScreenDefaultProps} from '../../../@types/interface';

// Components
import {CardView} from '../../shared';

// Navigators constants
import {
  BOOK_APPOINTMENT_STACK,
  BOOK_APPOINTMENT_HOME,
} from '../../../navigation/routes';

//Styles & Icons
import Styles from './styles';
import {Icons, COLORS, SIZES, FONTS} from '../../../constants';

const BottomView = ({navigation}: ScreenDefaultProps): JSX.Element => {
  return (
    <View style={[{marginHorizontal: SIZES.margin, marginTop: SIZES.margin}]}>
      <View style={[Styles.textContainer, {marginBottom: SIZES.tiny}]}>
        <Text style={[FONTS.h3, {color: COLORS.secondary}]}>
          Let's find your Doctor
        </Text>
        <TouchableOpacity
          onPress={(): void => {
            navigation.navigate(BOOK_APPOINTMENT_STACK, {
              screen: BOOK_APPOINTMENT_HOME,
            });
          }}>
          <Text
            style={[
              Styles.textInfo,
              {color: COLORS.placeholder, fontSize: SIZES.h3},
            ]}>
            View all
          </Text>
        </TouchableOpacity>
      </View>
      <CardView
        customStyle={[
          {marginBottom: SIZES.padding, borderRadius: SIZES.padding},
        ]}>
        <TouchableOpacity style={[Styles.cardContent, {padding: SIZES.base}]}>
          <View style={[Styles.imageContainer]}>
            <Image
              style={[Styles.image]}
              source={{uri: 'https://picsum.photos/200/300'}}
            />
          </View>
          <View style={[Styles.cardTextContainer]}>
            <Text
              style={[
                Styles.textInfo,
                {color: COLORS.secondary, fontSize: SIZES.h4},
              ]}>
              Dr. Alisia Donald
            </Text>
            <Text
              style={[
                Styles.textInfo,
                {color: COLORS.placeholder, fontSize: SIZES.body3},
              ]}>
              Dentist
            </Text>
            <View style={[Styles.hoursContainer]}>
              <Icons.MaterialCommunityIcons
                name="clock-time-five"
                size={15}
                color={COLORS.primary}
              />
              <Text style={[FONTS.body3, {color: COLORS.primary}]}>
                {' '}
                Active hours:{' '}
              </Text>
              <Text style={[FONTS.body3, {color: COLORS.placeholder}]}>
                09:00AM - 2:00PM
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </CardView>
    </View>
  );
};

export default BottomView;
