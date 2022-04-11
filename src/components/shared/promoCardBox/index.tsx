import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

// Components:
import CardView from '../cardView';

// Constants
import {COLORS, FONTS, SIZES} from '../../../constants';
// SVGs
import PromoCard from '../../../assets/SVGs/promocard.svg';

const PromoCardBox = (): JSX.Element => {
  return (
    <CardView customStyle={Styles.promoCard}>
      <View style={Styles.inputSvg}>
        <PromoCard />
        <TextInput
          placeholder="Promo Code"
          underlineColorAndroid="transparent"
          textAlign="left"
          placeholderTextColor={COLORS.secondaryLight}
          style={[Styles.input]}
        />
      </View>
      <TouchableOpacity style={Styles.btn}>
        <Text style={[FONTS.h3, {color: COLORS.white}]}>Apply</Text>
      </TouchableOpacity>
    </CardView>
  );
};

const Styles = StyleSheet.create({
  promoCard: {
    padding: 7,
    minHeight: 55,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  inputSvg: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    flex: 1,
  },
  input: {
    fontFamily: FONTS.MEDIUM,
    fontSize: SIZES.h3,
    padding: SIZES.font,
    color: COLORS.secondary,
    flexGrow: 1,
  },
  btn: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    width: 94,
    height: '100%',
    borderRadius: 10,
  },
});

export default PromoCardBox;
