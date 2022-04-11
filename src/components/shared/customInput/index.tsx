import React from 'react';
import {
  View,
  TextInput as CustomTextInput,
  TouchableOpacity,
} from 'react-native';

// Hooks && Store item
import {useAppSelector} from '../../../hooks';
import {personalInfoEditing} from '../../../redux/features/screenSlice';

// Interface Props
import {CustomTextInputProps} from '../../../@types/interface';

// Styles && Constants && SVGs
import {Icons, FONTS, COLORS, SIZES} from '../../../constants';
import FilterCandle from '../../../assets/SVGs/filter_candle.svg';
import Styles from './styles';

const CustomInput = ({
  touched,
  error,
  direction,
  icon,
  onPress,
  ...props
}: CustomTextInputProps): JSX.Element => {
  const editMode = useAppSelector(personalInfoEditing);

  const borderColor = editMode
    ? COLORS.primary
    : touched && error
    ? COLORS.error
    : COLORS.inputBg;

  if (direction === 'rtl') {
    return (
      <View
        style={[
          Styles.container,
          Styles.innerField,
          {
            backgroundColor: COLORS.inputBg,
            borderColor,
          },
        ]}>
        <TouchableOpacity onPress={onPress}>
          <Icons.Feather
            name="search"
            size={20}
            color={COLORS.placeholder}
            style={[{margin: SIZES.base}]}
          />
        </TouchableOpacity>
        <View style={[Styles.inputRTL]}>
          <CustomTextInput
            underlineColorAndroid="transparent"
            textAlign="left"
            placeholderTextColor={COLORS.placeholder}
            style={[
              {
                fontFamily: FONTS.MEDIUM,
                fontSize: SIZES.h4,
                padding: SIZES.small,
                color: COLORS.secondary,
              },
            ]}
            {...props}
          />
        </View>
        <View
          style={[
            Styles.divider,
            {backgroundColor: COLORS.placeholder, marginHorizontal: SIZES.base},
          ]}></View>
        <TouchableOpacity onPress={onPress} style={[{padding: SIZES.radius}]}>
          <FilterCandle />
        </TouchableOpacity>
      </View>
    );
  }

  if (direction === 'ltr') {
    return (
      <View
        style={[
          Styles.container,
          Styles.innerField,
          {backgroundColor: COLORS.inputBg, borderColor},
        ]}>
        <View style={[Styles.input]}>
          <CustomTextInput
            underlineColorAndroid="transparent"
            textAlign="left"
            placeholderTextColor={COLORS.placeholder}
            style={[
              {
                fontFamily: FONTS.MEDIUM,
                fontSize: SIZES.h4,
                padding: SIZES.small,
                color: COLORS.secondary,
              },
            ]}
            {...props}
          />
        </View>
        <TouchableOpacity onPress={onPress}>
          <Icons.Feather
            name="search"
            size={20}
            color={COLORS.placeholder}
            style={[{marginHorizontal: SIZES.small}]}
          />
        </TouchableOpacity>
      </View>
    );
  }

  if (direction === 'password') {
    return (
      <View
        style={[
          Styles.container,
          {backgroundColor: COLORS.inputBg, borderColor},
        ]}>
        <View style={[Styles.innerField]}>
          <View style={[Styles.input]}>
            <CustomTextInput
              underlineColorAndroid="transparent"
              textAlign="left"
              placeholderTextColor={COLORS.placeholder}
              style={[
                {
                  fontFamily: FONTS.MEDIUM,
                  fontSize: SIZES.h4,
                  padding: SIZES.small,
                  color: COLORS.secondary,
                },
              ]}
              {...props}
            />
          </View>
          <TouchableOpacity onPress={onPress}>
            <Icons.Entypo
              name={icon}
              size={20}
              color={COLORS.placeholder}
              style={[{marginHorizontal: SIZES.small}]}
            />
          </TouchableOpacity>
          {touched && !error && (
            <View
              style={[
                Styles.confirmInput,
                {borderColor: COLORS.success, backgroundColor: COLORS.success},
              ]}
            />
          )}
        </View>
      </View>
    );
  }

  return (
    <View
      style={[
        Styles.container,
        {backgroundColor: COLORS.inputBg, borderColor},
      ]}>
      <View style={[Styles.innerField]}>
        <View style={[Styles.input]}>
          <CustomTextInput
            underlineColorAndroid="transparent"
            textAlign="left"
            placeholderTextColor={COLORS.placeholder}
            style={[
              {
                fontFamily: FONTS.MEDIUM,
                fontSize: SIZES.h4,
                padding: SIZES.small,
                color: COLORS.secondary,
              },
            ]}
            {...props}
          />
        </View>
        {touched && !error && (
          <View
            style={[
              Styles.confirmInput,
              {borderColor: COLORS.success, backgroundColor: COLORS.success},
            ]}
          />
        )}
      </View>
    </View>
  );
};

export default CustomInput;
