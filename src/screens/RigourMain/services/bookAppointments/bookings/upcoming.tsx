import React from 'react';
import {View, Text, SectionList} from 'react-native';

// Interface for props
import {BookingsItemProps} from '../../../../../@types/interface';
import DATA from './data';

// Components
import BookingsItems from '../../../../../components/bookings';

// Styles, COLORS and FONT_SIZE
import {FONTS, COLORS, SIZES} from '../../../../../constants';

const UpcomingBookings = (): JSX.Element => {
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index): any => index.toString()}
      renderItem={({item, index}: BookingsItemProps): JSX.Element => (
        <BookingsItems
          item={item}
          index={index}
          withButton={true}
          status="Confirmed"
        />
      )}
      renderSectionHeader={({section: {title}}): JSX.Element => (
        <View style={[{marginBottom: SIZES.margin}]}>
          <Text style={[FONTS.h3, {color: COLORS.secondary}]}>{title}</Text>
        </View>
      )}
    />
  );
};

export default UpcomingBookings;
