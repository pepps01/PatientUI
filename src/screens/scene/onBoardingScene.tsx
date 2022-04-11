import React, {useRef, useState} from 'react';
import {
  FlatList,
  Animated,
  StatusBar,
  View,
  Text,
  Pressable,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

// Hooks and actions
import {useAppDispatch} from '../../hooks';
import {setDeviceOnboardingStatus} from '../../redux/actions/auth';

// Interface props && Data && Components && Navigator Constants
import {OnBoardingItemsProps} from '../../@types/interface';
import DATA from '../../utils/onBoardingData';
import {OnBoardingItems, NextSVGButton} from '../../components/onBoarding';

// Styles && Constants
import {STYLES, COLORS, FONTS} from '../../constants';
import Styles from './styles';

const OnBoardingScene = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  // Ref to Determine when the Scene Value is Changed
  const sceneItemsChanged = useRef(({viewableItems}: any): void => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  // Ref to determine the Next Button Pressed Scene
  const sceneConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const sceneRef: any = useRef(null);

  // The Scroll for the Next Button
  const scrollTo = (): void => {
    if (currentIndex < DATA.length - 1) {
      sceneRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      dispatch(setDeviceOnboardingStatus(true));
    }
  };

  const skipOnboarding = (): void => {
    return dispatch(setDeviceOnboardingStatus(true));
  };

  return (
    <SafeAreaView
      style={[STYLES.container, {backgroundColor: COLORS.fullbackground}]}>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={COLORS.fullbackground}
      />
      <Pressable style={[Styles.skipInfo]} onPress={skipOnboarding}>
        <Text style={[FONTS.h2, {color: COLORS.secondaryLight}]}>Skip</Text>
      </Pressable>
      <View style={[Styles.onBoardingScene]}>
        <FlatList
          data={DATA}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          renderItem={({item}: OnBoardingItemsProps): JSX.Element => (
            <OnBoardingItems item={item} />
          )}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          onViewableItemsChanged={sceneItemsChanged}
          viewabilityConfig={sceneConfig}
          ref={sceneRef}
        />
      </View>
      <NextSVGButton
        percentage={(currentIndex + 1) * (100 / DATA.length)}
        scrollTo={scrollTo}
      />
    </SafeAreaView>
  );
};

export default OnBoardingScene;
