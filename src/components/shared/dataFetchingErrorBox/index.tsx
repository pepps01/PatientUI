import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// Interface for props
import {FetchingErrorBoxProps} from '../../../@types/interface';

// Constants
import {COLORS, FONTS} from '../../../constants';
import CardView from '../cardView';

// styles
import Styles from './styles';

const FetchingErrorBox = ({
  btnTitle,
  onPress,
  label,
}: FetchingErrorBoxProps): JSX.Element => {
  return (
    <CardView customStyle={Styles.cardContainer}>
      <Text style={[FONTS.h3, {color: COLORS.secondary}]}>
        {`Couldn't retrieve list of ${label}`}
      </Text>
      <TouchableOpacity
        onPress={onPress}
        style={[Styles.btnStyle, {backgroundColor: COLORS.primary}]}>
        <Text style={[FONTS.h3, {color: COLORS.white}]}>{btnTitle}</Text>
      </TouchableOpacity>
    </CardView>
  );
};

export default FetchingErrorBox;
