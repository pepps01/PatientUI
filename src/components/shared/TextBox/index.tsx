import React from 'react';
import {View, Text} from 'react-native';

// Constants
import {COLORS, FONTS, SIZES} from '../../../constants';

// styles
import Styles from './styles';

interface TextBoxProps {
  label: string | any;
}

const TextBox = ({label}: TextBoxProps): JSX.Element => {
  return (
    <View
      style={[
        Styles.container,
        {
          backgroundColor: COLORS.inputBg,
          borderColor: COLORS.inputBg,
        },
      ]}>
      <Text
        numberOfLines={2}
        style={[
          FONTS.h4,
          {marginLeft: SIZES.tiny, color: COLORS.textSecondary},
        ]}>
        {label}
      </Text>
    </View>
  );
};

export default TextBox;
