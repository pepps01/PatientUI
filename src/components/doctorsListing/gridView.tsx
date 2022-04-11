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

const GridView = ({
  item,
  index,
  navigation,
}: DoctorsProfileList): JSX.Element => {
  // Make it look zizag
  const marginTop = index % 2 === 0 ? 0 : 40;
  return (
    <CardView
      customStyle={[
        Styles.cardContainer,
        {marginTop, borderRadius: SIZES.padding},
      ]}>
      <TouchableOpacity
        style={[Styles.cardGrid]}
        onPress={(): any => {
          navigation.navigate(SINGLE_DOCTORS_PROFILE, {item});
        }}>
        <View style={[Styles.imageGrid]}>
          <Image
            style={[Styles.image, {borderRadius: SIZES.radius}]}
            source={{uri: 'https://picsum.photos/200/300'}}
            resizeMode="cover"
          />
        </View>
        <View>
          <Text
            style={[
              Styles.textDesc,
              {color: COLORS.secondary, fontSize: SIZES.h4},
            ]}>
            {item.name}
          </Text>
          <Text
            style={[
              Styles.textDesc,
              {color: COLORS.placeholder, fontSize: SIZES.h4},
            ]}>
            {item.speciality}
          </Text>
        </View>
        <View style={[Styles.activeHours]}>
          <Icons.MaterialCommunityIcons
            name="clock-time-five"
            size={15}
            color={COLORS.primary}
          />
          <Text style={[FONTS.body3, {color: COLORS.primary}]}>
            {' '}
            Active hours:
          </Text>
        </View>
        <Text
          style={[
            Styles.hoursText,
            {color: COLORS.placeholder, fontSize: SIZES.h4},
          ]}>
          {item.hours}
        </Text>
      </TouchableOpacity>
    </CardView>
  );
};

export default GridView;
