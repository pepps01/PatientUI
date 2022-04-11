import React, {useEffect} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const shadowStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 1,
    height: 1,
  },
  shadowOpacity: 0.025,
  shadowRadius: 1,

  elevation: 1,
};

const windowWidth = Dimensions.get('window').width;
const width = windowWidth - 32;

interface Props {
  segments: Array<string>;
  currentIndex: number;
  onChange: (index: number) => void;
  activeTextStyle?: TextStyle;
  inactiveTextStyle?: TextStyle;
  activeBadgeStyle?: ViewStyle;
  inactiveBadgeStyle?: ViewStyle;
  badgeTextStyle?: TextStyle;
  badgeValues?: Array<number | null>;
}

const SegmentTest = ({
  segments,
  currentIndex,
  onChange,
  activeBadgeStyle,
  inactiveBadgeStyle,
  activeTextStyle,
  inactiveTextStyle,
  badgeTextStyle,
  badgeValues = [],
}: Props): JSX.Element => {
  const finalisedActiveTextStyle: TextStyle = {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    color: '#111827',
    ...activeTextStyle,
  };

  const finalisedInActiveTextStyle: TextStyle = {
    fontSize: 15,
    textAlign: 'center',
    color: '#4b5563',
    ...inactiveTextStyle,
  };

  const finalisedActiveBadgeStyle: ViewStyle = {
    backgroundColor: '#27272a',
    marginLeft: 4,
    alignItems: 'center',
    justifyContent: 'center',
    ...activeBadgeStyle,
  };

  const finalisedInActiveBadgeStyle: ViewStyle = {
    backgroundColor: '#6b7280',
    marginLeft: 4,
    justifyContent: 'center',
    alignItems: 'center',
    ...inactiveBadgeStyle,
  };

  const finalisedBadgeTextStyle: TextStyle = {
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'center',
    color: '#FFFFFF',
    ...badgeTextStyle,
  };

  // useCallBack with an empty array as input, which will call inner lambda only once and memoize the reference for future calls
  const memoizedTabPressCallback = React.useCallback(
    index => {
      onChange(index);
    },
    [onChange],
  );
  return (
    <Animated.View style={[styles.defaultSegmentedControlWrapper]}>
      <Animated.View
        style={[
          styles.movingSegmentStyle,
          shadowStyle,
          StyleSheet.absoluteFill,
          {
            width: (width - 4) / segments.length,
          },
        ]}
      />
      {segments.map((segment, index) => {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            key={index}
            onPress={(): any => memoizedTabPressCallback(index)}>
            <View style={styles.textWrapper}>
              <Text
                style={[
                  currentIndex === index
                    ? finalisedActiveTextStyle
                    : finalisedInActiveTextStyle,
                ]}>
                {segment}
              </Text>
              {badgeValues[index] && (
                <View
                  style={[
                    styles.defaultBadgeContainerStyle,
                    currentIndex === index
                      ? finalisedActiveBadgeStyle
                      : finalisedInActiveBadgeStyle,
                  ]}>
                  <Text style={finalisedBadgeTextStyle}>
                    {badgeValues[index]}
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </Animated.View>
  );
};

export default SegmentTest;

const styles = StyleSheet.create({
  defaultSegmentedControlWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E5EA',
    borderRadius: 8,
    width: width,
    justifyContent: 'center',
    marginVertical: 10,
  },
  movingSegmentStyle: {},
  touchableContainer: {},
  textWrapper: {},
  defaultBadgeContainerStyle: {},
});
