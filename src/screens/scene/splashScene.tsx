import React from 'react';
import {
  View,
  Text,
  Animated,
  useWindowDimensions,
  StatusBar,
} from 'react-native';

import LottieView from 'lottie-react-native';
import SafeAreaView from 'react-native-safe-area-view';

// hooks &&
import {useAppDispatch} from '../../hooks';
import {checkDeviceOnboardingStatus} from '../../redux/actions/auth';

// Styles && Images && Constants
import Logo from '../../assets/SVGs/afrihealth-logo.svg';
import Mask from '../../assets/SVGs/splash-mask.svg';
import RigourLottie from '../../utils/splashSceneData/rigour+white_anime.json';
import {STYLES, COLORS, SIZES} from '../../constants';
import Styles from './styles';

const SplashScene = (): JSX.Element => {
  const {width, height} = useWindowDimensions();
  const dispatch = useAppDispatch();
  return (
    <SafeAreaView
      style={[STYLES.container, {height, backgroundColor: COLORS.primary}]}>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <View style={[Styles.imageContainer]}>
        <Mask width={width} />
      </View>
      <Animated.View style={[Styles.transitionContainer]}>
        <LottieView
          source={RigourLottie}
          autoPlay
          loop={false}
          onAnimationFinish={(): any => {
            dispatch(checkDeviceOnboardingStatus());
          }}
        />
      </Animated.View>
      <View style={[Styles.footer]}>
        <Text
          style={[Styles.textInfo, {color: COLORS.white, fontSize: SIZES.h3}]}>
          Powered by
        </Text>
        <Logo />
      </View>
    </SafeAreaView>
  );
};

export default SplashScene;
