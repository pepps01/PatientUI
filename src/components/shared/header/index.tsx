import React, {ReactNode} from 'react';
import {Pressable, Text, View, ViewStyle} from 'react-native';

// Interface for props
import {CustomHeaderProps} from '../../../@types/interface';

// Styles
import {COLORS, FONTS, Icons, SIZES} from '../../../constants';
import CardView from '../cardView';
import Styles from './styles';

const CustomHeader = ({
  titleColor,
  titleViewStyle,
  headerStyle,
  title,
  children,
  navigateTo,
}: CustomHeaderProps): JSX.Element => {
  return (
    <View
      style={[
        Styles.header,
        headerStyle,
        {
          height: SIZES.top,
          backgroundColor: COLORS.transparent,
          marginHorizontal: SIZES.margin,
          marginVertical: SIZES.small,
        },
      ]}>
      <Pressable onPress={navigateTo}>
        <CardView
          customStyle={[Styles.navigationBtn, {borderRadius: SIZES.base}]}>
          <Icons.FontAwesome
            name="caret-left"
            size={25}
            color={COLORS.secondary}
          />
        </CardView>
      </Pressable>
      <View style={[Styles.middleItem, titleViewStyle]}>
        <Text
          style={[
            FONTS.h2,
            {color: titleColor ? titleColor : COLORS.secondary},
          ]}>
          {title}
        </Text>
      </View>
      <View>{children}</View>
    </View>
  );
};

export default CustomHeader;
