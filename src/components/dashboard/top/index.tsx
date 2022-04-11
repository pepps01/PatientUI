import React from 'react';
import {View, Text, TouchableOpacity, Image, Pressable} from 'react-native';

// Hooks && State Selectors
import {useAppSelector, useAppGreeting} from '../../../hooks';
import {authentication} from '../../../redux/features/auth';

// Styles, Colors
import Styles from './styles';
import {COLORS, FONTS, SIZES, Icons} from '../../../constants';

const TopView = ({navigation}: any): JSX.Element => {
  const {greeting} = useAppGreeting();
  const {user} = useAppSelector(authentication);

  return (
    <View
      style={[
        {
          backgroundColor: COLORS.fullbackground,
          marginHorizontal: SIZES.margin,
          marginVertical: SIZES.padding,
        },
      ]}>
      <View style={[Styles.container]}>
        <Pressable
          style={[Styles.profileContainer]}
          onPress={(): void => {
            navigation.openDrawer();
          }}>
          <View
            style={[
              Styles.imageContainer,
              {
                backgroundColor: COLORS.white,
              },
            ]}>
            <Image
              source={{uri: 'https://picsum.photos/200/300'}}
              style={[Styles.profileImage, {shadowColor: COLORS.primary}]}
            />
          </View>
          <View style={[Styles.profileTextContainer]}>
            <Text
              style={[
                Styles.greetingText,
                {color: COLORS.secondary},
              ]}>{`${greeting},`}</Text>
            <Text style={[FONTS.h2, {color: COLORS.secondary}]}>
              {user?.firstName}
            </Text>
          </View>
        </Pressable>
        <TouchableOpacity
          onPress={(): void => {
            console.log('//TODO: Route to Notification');
          }}
          style={[
            Styles.notificationContainer,
            {
              borderRadius: SIZES.base,
              shadowColor: COLORS.primary,
              backgroundColor: COLORS.white,
            },
          ]}>
          <Icons.FontAwesome5 name="bell" size={20} color={COLORS.black} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopView;
