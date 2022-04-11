import React from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

// Interface for props, mock data
import {
  ScreenDefaultProps,
  AmbulanceProfileList,
} from '../../../../../@types/interface';
import DATA from './data';

// Components
import {AppStatusBar, Header} from '../../../../../components/shared';
import {AmbulanceNearbyItem} from '../../../../../components/ambulanceBooking';

// Styles, Colors, SVGs
import {COLORS, SIZES, STYLES} from '../../../../../constants';

const AmbulanceNearbyListing = ({
  navigation,
}: ScreenDefaultProps): JSX.Element => {
  const {width, height} = useWindowDimensions();

  return (
    <SafeAreaView
      style={[
        STYLES.container,
        {backgroundColor: COLORS.fullbackground, width, height},
      ]}>
      <AppStatusBar backgroundColor={COLORS.transparent} />
      <Header
        navigateTo={() => navigation.popToTop()}
        title="Ambulances nearby"
      />
      <FlatList
        data={DATA}
        horizontal={false}
        keyExtractor={(item): any => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}: AmbulanceProfileList): JSX.Element => (
          <AmbulanceNearbyItem item={item} navigation={navigation} />
        )}
        ListHeaderComponentStyle={[{marginVertical: SIZES.tiny}]}
        ListHeaderComponent={<View />}
        contentContainerStyle={[
          {
            paddingHorizontal: SIZES.margin,
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default AmbulanceNearbyListing;
