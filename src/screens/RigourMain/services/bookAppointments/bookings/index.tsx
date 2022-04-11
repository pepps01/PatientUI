import React from 'react';
import {View, Text} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

// Components
import {
  AppStatusBar,
  SegmentControlTab,
} from '../../../../../components/shared';
import UpcomingBookings from './upcoming';
import CanceledBookings from './canceled';
import CompletedBookings from './completed';

// Helpers
import {IF} from '../../../../../helpers';

// Styles
import Styles from './styles';
import {STYLES, COLORS, FONTS, SIZES} from '../../../../../constants';

const AppointmentBookings = (): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <SafeAreaView
      style={[
        STYLES.container,
        {
          backgroundColor: COLORS.fullbackground,
        },
      ]}>
      <AppStatusBar backgroundColor={COLORS.fullbackground} />
      <View style={[Styles.header]}>
        <Text style={[FONTS.h3, {color: COLORS.secondary}]}>Bookings</Text>
      </View>

      <View style={[Styles.segmentControl]}>
        <SegmentControlTab
          activeSegmentBackgroundColor={COLORS.primary}
          activeTextStyle={STYLES.segmentsControl.activeTextStyle}
          currentIndex={selectedIndex}
          inactiveTextStyle={STYLES.segmentsControl.inactiveTextStyle}
          onChange={(index: number) => {
            setSelectedIndex(index);
          }}
          paddingVertical={2}
          segmentedControlBackgroundColor={COLORS.inputBg}
          tabs={['Upcoming', 'Completed', 'Canceled']}
        />
      </View>
      <View style={[Styles.contents, {marginHorizontal: SIZES.margin}]}>
        <IF condition={selectedIndex === 0}>
          <UpcomingBookings />
        </IF>
        <IF condition={selectedIndex === 1}>
          <CompletedBookings />
        </IF>
        <IF condition={selectedIndex === 2}>
          <CanceledBookings />
        </IF>
      </View>
    </SafeAreaView>
  );
};

export default AppointmentBookings;
