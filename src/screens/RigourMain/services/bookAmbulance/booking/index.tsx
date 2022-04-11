import React from 'react';
import {View} from 'react-native';

// Interface for props
import {ScreenDefaultProps} from '../../../../../@types/interface';

// Route constants
import {DASHBOARD_HOME} from '../../../../../navigation/routes';

// components
import {BookingForm} from '../../../../../components/ambulanceBooking';
import MapPreview from '../../../../../components/mapPreview';
import {AppStatusBar, Header} from '../../../../../components/shared';
import {COLORS} from '../../../../../constants';

// Styles, Colors
import Styles from './styles';

const BookAmbulanceHome = ({navigation}: ScreenDefaultProps): JSX.Element => {
  return (
    <View style={[Styles.container]}>
      <AppStatusBar backgroundColor={COLORS.transparent} />
      <Header
        navigateTo={() =>
          navigation.reset({
            index: 0,
            routes: [{name: DASHBOARD_HOME}],
          })
        }
      />
      <MapPreview />
      <BookingForm navigation={navigation} />
    </View>
  );
};

export default BookAmbulanceHome;
