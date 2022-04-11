import React from 'react';
import {TouchableOpacity} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {SocialButtonProps} from '../../../@types/interface';

// Styles && Constants
import Styles from './styles';
import {COLORS} from '../../../constants';

const SocialButton = ({
  variant,
  children,
  onPress,
}: SocialButtonProps): JSX.Element => {
  if (variant === 'facebook') {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          Styles.defaultContainer,
          Styles.twitterContainer,
          {backgroundColor: COLORS.primary},
        ]}>
        <RectButton>{children}</RectButton>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[Styles.defaultContainer, {backgroundColor: COLORS.primary}]}>
      <RectButton>{children}</RectButton>
    </TouchableOpacity>
  );
};

export default SocialButton;
