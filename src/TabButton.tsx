import React from 'react';
import {
  Animated,
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {useAnimatedStyle, useSharedValue} from 'react-native-reanimated';
import {COLORS} from './constants';

const TabButton = ({}) => {
  return (
    <TouchableWithoutFeedback>
      <Animated.View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}></Animated.View>
      <Animated.View
        style={{
          flexDirection: 'row',
          width: '80%',
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={{uri: 'https://picsum.photos/200/300'}}
          style={{width: 20, height: 20}}
        />
        {/* {isFocused && <Text style={{color: 'white', fontFamily: 'medium', marginLeft: 10}}>{label}</Text>} */}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default TabButton;

// For Dashboard // TODO: Remove this & place in DASHBOARD

// Reanimated Shared Value
const homeTabFlex = useSharedValue(1);
const homeTabColor = useSharedValue(COLORS.primary);
const bookingsTabFlex = useSharedValue(1);
const bookingsTabColor = useSharedValue(COLORS.primary);
const walletTabFlex = useSharedValue(1);
const walletTabColor = useSharedValue(COLORS.primary);
const ordersTabFlex = useSharedValue(1);
const ordersTabColor = useSharedValue(COLORS.primary);

// Reanimated Animated Style
const homeTabStyle = useAnimatedStyle(() => {
  return {
    flex: homeTabFlex.value,
  };
});

const homeColorStyle = useAnimatedStyle(() => {
  return {
    backgroundColor: homeTabColor.value,
  };
});

const bookingsTabStyle = useAnimatedStyle(() => {
  return {
    flex: bookingsTabFlex.value,
  };
});

const bookingsColorStyle = useAnimatedStyle(() => {
  return {
    backgroundColor: bookingsTabColor.value,
  };
});

const walletTabStyle = useAnimatedStyle(() => {
  return {
    flex: walletTabFlex.value,
  };
});

const walletColorStyle = useAnimatedStyle(() => {
  return {
    backgroundColor: walletTabColor.value,
  };
});

const ordersTabStyle = useAnimatedStyle(() => {
  return {
    flex: ordersTabFlex.value,
  };
});

const ordersColorStyle = useAnimatedStyle(() => {
  return {
    backgroundColor: ordersTabColor.value,
  };
});
