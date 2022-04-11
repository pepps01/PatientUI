import React, {useEffect, useRef, useState} from 'react';
import {TouchableOpacity, View, Animated} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';

// Interface
import {NextSVGButtonProps} from '../../../@types/interface';

// Styles, Colors, SVG
import Styles from './styles';
import {COLORS} from '../../../constants';
import NextSVGIcon from '../../../assets/SVGs/nextButton.svg';

const NextSVGButton = ({
  percentage,
  scrollTo,
}: NextSVGButtonProps): JSX.Element => {
  const size = 90;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef: any = useRef(null);
  const [dashOffset, setDashOffset] = useState(
    circumference - (circumference * 25) / 100,
  );

  useEffect(() => {
    const animation = (toValue: number): void => {
      Animated.timing(progressAnimation, {
        toValue,
        duration: 250,
        useNativeDriver: true,
      }).start();
    };
    animation(percentage);
  }, [percentage]);

  // OnComponent Mount Progress Animation Event for NextSVGButton
  useEffect(() => {
    progressAnimation.addListener(value => {
      const strokeDashoffset =
        circumference - (circumference * value.value) / 100;
      // Conditional statement to check progress ref initialization
      if (progressRef?.current) {
        setDashOffset(strokeDashoffset);
        progressRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
    return () => {
      progressAnimation.removeAllListeners();
    };
  }, []);

  return (
    <View style={[Styles.container]}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            stroke={COLORS.white}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            ref={progressRef}
            stroke={COLORS.primary}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
          />
        </G>
      </Svg>
      <TouchableOpacity
        onPress={scrollTo}
        style={[Styles.button, {backgroundColor: COLORS.primary}]}>
        <NextSVGIcon />
      </TouchableOpacity>
    </View>
  );
};

export default NextSVGButton;
