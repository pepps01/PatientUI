import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Components
import {CardView} from '../shared';

// Interface for props, Navigators constant
import {DoctorsProfileList} from '../../@types/interface';
import {SINGLE_DOCTORS_PROFILE} from '../../navigation/routes';

// Styles && Icons && Colors
import Styles from './styles';
import {Icons, COLORS, FONTS, SIZES} from '../../constants';

const ListView = ({item, navigation}: DoctorsProfileList): JSX.Element => {
  return (
    <CardView
      customStyle={[{marginBottom: SIZES.margin, borderRadius: SIZES.padding}]}>
      <TouchableOpacity
        onPress={(): any => {
          navigation.navigate(SINGLE_DOCTORS_PROFILE, {item});
        }}
        style={[Styles.cardList, {padding: SIZES.base}]}>
        <View style={[Styles.imageList]}>
          <Image
            style={[Styles.image, {borderRadius: SIZES.radius * 2}]}
            source={{uri: 'https://picsum.photos/200/300'}}
          />
        </View>
        <View style={[Styles.cardTextContainer]}>
          <Text
            style={[
              Styles.textInfo,
              {color: COLORS.secondary, fontSize: SIZES.h4},
            ]}>
            {item.name}
          </Text>
          <Text
            style={[
              Styles.textInfo,
              {color: COLORS.placeholder, fontSize: SIZES.body3},
            ]}>
            {item.speciality}
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
              {item.hours}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </CardView>
  );
};

export default ListView;
