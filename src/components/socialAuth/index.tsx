import React from 'react';
import {View} from 'react-native';

// Components
import {SocialButton} from '../shared';

// Styles
import Styles from './styles';
import {COLORS, Icons} from '../../constants';

const SocialAuth = () => {
  return (
    <View style={[Styles.socialAuthBtnContainer]}>
      <SocialButton variant="google">
        <Icons.FontAwesome name="google" size={30} color={COLORS.white} />
      </SocialButton>
      <SocialButton variant="facebook">
        <Icons.FontAwesome name="facebook" size={30} color={COLORS.white} />
      </SocialButton>
    </View>
  );
};

export default SocialAuth;
