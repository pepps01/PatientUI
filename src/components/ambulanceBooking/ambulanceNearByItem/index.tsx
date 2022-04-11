import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Interface for Props
import {AmbulanceProfileList} from '../../../@types/interface';

// Routes
import {AMBULANCE_BOOKING} from '../../../navigation/routes';

// components
import {CardView} from '../../shared';

// Styles, Sizes, Colors
import Styles from './styles';
import {COLORS, FONTS, SIZES} from '../../../constants';

const AmbulanceNearbyForm = ({
  item,
  navigation,
}: AmbulanceProfileList): JSX.Element => {
  return (
    <CardView
      customStyle={[{marginBottom: SIZES.margin, borderRadius: SIZES.padding}]}>
      <TouchableOpacity
        onPress={(): void => {
          navigation.navigate(AMBULANCE_BOOKING, {item});
        }}
        style={[Styles.cardViewContent, {padding: SIZES.base}]}>
        <View style={[Styles.imageContainer]}>
          <Image
            source={{uri: 'https://picsum.photos/200/300'}}
            style={[Styles.image]}
          />
        </View>
        <View style={[Styles.textContainer]}>
          <Text
            style={[
              FONTS.h3,
              {color: COLORS.secondary, fontFamily: FONTS.MEDIUM},
            ]}>
            {item.name}
          </Text>
          <View style={[Styles.description]}>
            <View style={[Styles.distanceStatus]}>
              <Text style={[FONTS.body3, {color: COLORS.primary}]}>
                Distance:
              </Text>
              <Text style={[FONTS.body3, {color: COLORS.primary}]}>
                Active:
              </Text>
            </View>
            <View style={[Styles.ambulanceInfo]}>
              <Text style={[FONTS.body3, {color: COLORS.placeholder}]}>
                {`${item.distance}KM Away`}
              </Text>
              <Text style={[FONTS.body3, {color: COLORS.placeholder}]}>
                {`${item.active} hours / All Days`}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </CardView>
  );
};

export default AmbulanceNearbyForm;
