import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';

// Interface for props
import {BookingsItemProps} from '../../@types/interface';

// Components & helpers
import {CardView} from '../shared';
import {IF} from '../../helpers';

// Styles && SVGs && COLORS
import Styles from './styles';
import {COLORS, SIZES, FONTS, Icons} from '../../constants';
import Clock from '../../assets/SVGs/clock_booking.svg';
import Calendar from '../../assets/SVGs/calendar_booking.svg';

const BookingsItems = ({
  item,
  index,
  withButton,
  status,
}: BookingsItemProps): JSX.Element => {
  if (withButton) {
    return (
      <CardView customStyle={[Styles.withButton, {borderRadius: SIZES.radius}]}>
        <View style={[Styles.cardContent]}>
          <View style={[Styles.topContent]}>
            <Image
              source={{uri: 'https://picsum.photos/200/300'}}
              style={[Styles.image]}
            />
            <View style={[Styles.textContent]}>
              <Text style={[FONTS.h4, {color: COLORS.secondary}]}>
                Dr. Malt Nie
              </Text>
              <Text style={[FONTS.body3, {color: COLORS.placeholder}]}>
                Dentist
              </Text>
            </View>
          </View>

          <View
            style={[
              Styles.calendarContent,
              {backgroundColor: COLORS.background},
            ]}>
            <View style={[Styles.calendarItems]}>
              <Calendar />
              <Text
                style={[
                  Styles.calendarText,
                  {color: COLORS.secondary, fontSize: SIZES.h5},
                ]}>
                Tuesday, Feb 1
              </Text>
            </View>
            <View style={[Styles.calendarItems]}>
              <Clock />
              <Text
                style={[
                  Styles.calendarText,
                  {color: COLORS.secondary, fontSize: SIZES.h5},
                ]}>
                11:00AM - 11:20AM
              </Text>
            </View>
            <View style={[Styles.calendarItems]}>
              <IF condition={status === 'Confirmed'}>
                <View style={[Styles.roundIcon]} />
                <Text
                  style={[
                    Styles.calendarText,
                    {color: COLORS.secondary, fontSize: SIZES.h5},
                  ]}>
                  {status}
                </Text>
              </IF>
            </View>
          </View>
          <View
            style={[Styles.divider, {backgroundColor: COLORS.placeholder}]}
          />
          <View style={[Styles.bottomContent]}>
            <Pressable
              style={[Styles.button, {backgroundColor: COLORS.btnDefaultBg}]}>
              <Text style={[FONTS.h3, {color: COLORS.placeholder}]}>
                cancel
              </Text>
            </Pressable>
            <Pressable
              style={[Styles.button, {backgroundColor: COLORS.primary}]}>
              <Text style={[FONTS.h3, {color: COLORS.white}]}>Reschedule</Text>
            </Pressable>
          </View>
        </View>
      </CardView>
    );
  }
  return (
    <CardView
      customStyle={[Styles.cardContainer, {borderRadius: SIZES.radius}]}>
      <View style={[Styles.container]}>
        <View style={[Styles.topContent]}>
          <Image
            source={{uri: 'https://picsum.photos/200/300'}}
            style={[Styles.image]}
          />
          <View style={[Styles.textContent]}>
            <Text style={[FONTS.h4, {color: COLORS.secondary}]}>
              Dr. Malt Nie
            </Text>
            <Text style={[FONTS.body3, {color: COLORS.placeholder}]}>
              Dentist
            </Text>
          </View>
        </View>

        <View
          style={[
            Styles.calendarContent,
            {backgroundColor: COLORS.background},
          ]}>
          <View style={[Styles.calendarItems]}>
            <Calendar />
            <Text
              style={[
                Styles.calendarText,
                {color: COLORS.secondary, fontSize: SIZES.h5},
              ]}>
              Tuesday, Feb 1
            </Text>
          </View>
          <View style={[Styles.calendarItems]}>
            <Clock />
            <Text
              style={[
                Styles.calendarText,
                {color: COLORS.secondary, fontSize: SIZES.h5},
              ]}>
              11:00AM - 11:20AM
            </Text>
          </View>

          <View style={[Styles.calendarItems]}>
            <IF condition={status === 'Completed'}>
              <View style={[Styles.roundComplete]}>
                <Icons.Feather name="check" size={8} color="#1FCC79" />
              </View>
              <Text
                style={[
                  Styles.calendarText,
                  {color: COLORS.secondary, fontSize: SIZES.h5},
                ]}>
                {status}
              </Text>
            </IF>
            <IF condition={status === 'Canceled'}>
              <View style={[Styles.roundCancel]}>
                <Text style={[{color: COLORS.error, fontSize: SIZES.base}]}>
                  X
                </Text>
              </View>
              <Text
                style={[
                  Styles.calendarText,
                  {color: COLORS.secondary, fontSize: SIZES.h5},
                ]}>
                {status}
              </Text>
            </IF>
          </View>
        </View>
      </View>
    </CardView>
  );
};

export default BookingsItems;
