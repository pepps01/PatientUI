import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

// Helpers Functions
import {IF} from '../helpers';

// Components
import {CardView} from './shared';

// SVGS && constant
import GenderMale from '../assets/SVGs/male-gender.svg';
import GenderFemale from '../assets/SVGs/female-gender.svg';
import {COLORS, FONTS, SIZES} from '../constants';

type Props = {
  id: any;
  label: any;
  onPress: () => void;
};

const GenderPickerItem = ({id, label, onPress}: Props): JSX.Element => {
  return (
    <Pressable onPress={onPress} style={{borderRadius: SIZES.radius}}>
      <CardView customStyle={styles.cardContents}>
        {
          <IF condition={id === '1'}>
            <GenderMale />
            <Text style={[FONTS.h3, {color: COLORS.secondary}]}>{label}</Text>
          </IF>
        }
        {
          <IF condition={id === '2'}>
            <GenderFemale />
            <Text style={[FONTS.h3, {color: COLORS.secondary}]}>{label}</Text>
          </IF>
        }
      </CardView>
    </Pressable>
  );
};

export default GenderPickerItem;

const styles = StyleSheet.create({
  cardContents: {
    height: 118,
    width: 142,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
