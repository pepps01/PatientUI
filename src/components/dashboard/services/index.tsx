import React from 'react';
import {View, Text, FlatList} from 'react-native';

// DATA
import {Items} from './data';

// components
import ServiceList from './serviceList';

// Styles, Colors, Constants
import {COLORS, FONTS, SIZES} from '../../../constants';

const Services = (): JSX.Element => {
  return (
    <View style={[{marginTop: SIZES.base}]}>
      <Text
        style={[
          FONTS.h3,
          {color: COLORS.secondary, marginHorizontal: SIZES.margin},
        ]}>
        Services
      </Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Items}
        keyExtractor={(item): any => item.id}
        legacyImplementation={false}
        renderItem={({item}): JSX.Element => <ServiceList item={item} />}
        initialNumToRender={1}
      />
    </View>
  );
};

export default Services;
