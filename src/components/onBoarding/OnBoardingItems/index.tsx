import {View, Text, useWindowDimensions, Image} from 'react-native';
import React from 'react';

// Interface Props
import {OnBoardingItemsProps} from '../../../@types/interface';
import BuyMedicine from '../../../assets/PNGs/BuyMedicine.png';
import DoorStepDelivery from '../../../assets/PNGs/doorStepDelivery.png';
import ConsultDoctor from '../../../assets/PNGs/consultDoctor.png';

// Styles && Theme && Colors
import Styles from './styles';
import {STYLES, COLORS, FONTS} from '../../../constants';

const OnBoardingItems = ({item}: OnBoardingItemsProps): JSX.Element => {
  const {width} = useWindowDimensions();

  return (
    <>
      <View
        style={[
          STYLES.container,
          Styles.container,
          {width, backgroundColor: COLORS.fullbackground},
        ]}>
        <View style={[Styles.image]}>
          {item.id === '1' && <Image source={BuyMedicine} />}
          {item.id === '2' && <Image source={DoorStepDelivery} />}
          {item.id === '3' && <Image source={ConsultDoctor} />}
        </View>
        <View style={Styles.textContainer}>
          <Text style={[Styles.title, FONTS.h2, {color: COLORS.secondary}]}>
            {item.title}
          </Text>
          <Text
            style={[
              Styles.description,
              FONTS.body2,
              {color: COLORS.secondaryLight},
            ]}>
            {item.description}
          </Text>
        </View>
      </View>
    </>
  );
};

export default OnBoardingItems;
