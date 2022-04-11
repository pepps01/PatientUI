import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

// Interface Props
import {CustomButtonProps} from '../../../@types/interface';

// Styles && Constants && Icons
import {COLORS, SIZES, FONTS} from '../../../constants';
import Styles from './styles';

const CustomButton = ({
  variant,
  label,
  loading,
  ...props
}: CustomButtonProps): JSX.Element => {
  const backgroundColor =
    variant === 'primary' ? COLORS.primary : COLORS.btnDefaultBg;
  const color = variant === 'primary' ? COLORS.default : COLORS.placeholder;

  if (variant === 'primary') {
    return (
      <TouchableOpacity
        style={[
          Styles.buttonContainer,
          {backgroundColor, borderRadius: SIZES.radius},
        ]}
        {...props}>
        <RectButton>
          {!loading ? (
            <Text style={[FONTS.h2, {color}]}>{label}</Text>
          ) : (
            <ActivityIndicator
              animating={loading ? false : true}
              size="large"
              color={color}
            />
          )}
        </RectButton>
      </TouchableOpacity>
    );
  }

  if (variant === 'secondary') {
    return (
      <TouchableOpacity
        style={[
          Styles.buttonContainer,
          {backgroundColor, borderRadius: SIZES.radius},
        ]}
        {...props}>
        <RectButton>
          <Text style={[FONTS.h2, {color}]}>{label}</Text>
        </RectButton>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={[
        Styles.buttonContainer,
        {
          borderColor: COLORS.placeholder,
          borderWidth: 2,
          borderRadius: SIZES.radius,
        },
      ]}
      {...props}>
      <RectButton>
        <Text style={[FONTS.h2, {color: COLORS.placeholder}]}>{label}</Text>
      </RectButton>
    </TouchableOpacity>
  );
};

export default CustomButton;
