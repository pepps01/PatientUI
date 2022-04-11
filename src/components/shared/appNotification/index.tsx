import React, {useRef, useEffect} from 'react';
import {Text, Animated, View} from 'react-native';

// Interface for props
import {AppNotificationProps} from '../../../@types/interface';

//Components
import CardView from '../cardView';

// Styles && COLORS
import {COLORS, FONTS} from '../../../constants';
import Styles from './styles';

type Props = {
  type: string | any;
  title: string | any;
  text: string | any;
  onHide: () => void;
};

const AppNotification = ({type, text, title, onHide}: Props): JSX.Element => {
  const height = useRef(new Animated.Value(0)).current;

  // When component renders change the height of the element
  useEffect(() => {
    Animated.sequence([
      Animated.timing(height, {
        toValue: 40,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.delay(3500),
      Animated.timing(height, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start(() => {
      onHide();
    });
  }, []);

  const backgroundColor = type === 'error' ? COLORS.error : COLORS.success;
  const borderColor = type === 'error' ? COLORS.error : COLORS.success;

  return (
    <Animated.View style={[Styles.root, {height}]}>
      <CardView customStyle={[Styles.container]}>
        <View style={[Styles.status, {borderColor, backgroundColor}]} />
        <View style={[Styles.textContainer]}>
          <Text style={[FONTS.h3, {color: COLORS.black}]}>{title}</Text>
          <Text
            style={[
              FONTS.h4,
              {color: COLORS.secondary, fontFamily: FONTS.MEDIUM},
            ]}>
            {text}
          </Text>
        </View>
      </CardView>
    </Animated.View>
  );
};

export default AppNotification;
