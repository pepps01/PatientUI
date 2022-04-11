import React from 'react';
import {Image, TouchableOpacity, Text, View} from 'react-native';

// Interface for props
import {VendorSliceTypes} from '../../../@types/interface';

// Component:
import {CardView} from '../../shared';

// Styles && Constants
import Styles from './styles';
import {COLORS, FONTS, Icons, SIZES} from '../../../constants';

interface ItemProps {
  item: VendorSliceTypes;
}

const VendorItem = ({item}: ItemProps): JSX.Element => {
  return (
    <>
      <CardView
        customStyle={[
          Styles.contents,
          {borderRadius: SIZES.radius, marginVertical: SIZES.base},
        ]}>
        <TouchableOpacity>
          <View style={Styles.vendorContents}>
            <Image
              source={{uri: 'https://picsum.photos/200/300'}}
              style={Styles.vendorImage}
            />

            <View style={Styles.vendorDetails}>
              <Text style={[FONTS.h4, {color: COLORS.secondary}]}>
                {item?.storeName}
              </Text>
              <Text style={[Styles.addressInfo, {color: COLORS.placeholder}]}>
                {item?.mainAddress}
              </Text>
              <View style={[Styles.ratingInfo]}>
                <Icons.FontAwesome
                  name="star"
                  size={14}
                  color={COLORS.star}
                  style={[Styles.icon]}
                />
                <Text style={[Styles.infoText, {color: COLORS.secondary}]}>
                  2.4 (200)
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </CardView>
      <View style={{paddingVertical: SIZES.base}} />
    </>
  );
};

export default VendorItem;
