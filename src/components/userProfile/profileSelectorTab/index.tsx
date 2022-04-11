import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';

// Components
import IdentityInfoItem from '../identityInfoItem';
import PersonalInfoItem from '../personalInfoItem';

// Constants
import {COLORS, DATA, FONTS} from '../../../constants';

// Helpers function
import {IF} from '../../../helpers';

// styles
import Styles from './styles';

const ProfileSelectorTab = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const currentTab = (id: number): void => {
    setCurrentIndex(id);
  };
  return (
    <>
      <View style={[Styles.tabs]}>
        {DATA &&
          DATA.ProfileInfo.map((item, idx) => {
            const isActive = currentIndex === idx;
            return (
              <Pressable
                onPress={() => currentTab(idx)}
                key={idx}
                style={[Styles.tabsContent]}>
                {isActive && (
                  <View
                    style={[
                      Styles.activeCircle,
                      {backgroundColor: COLORS.primary},
                    ]}
                  />
                )}
                <Text
                  style={[
                    FONTS.h3,
                    {color: isActive ? COLORS.secondary : COLORS.textSecondary},
                  ]}>
                  {item.label}
                </Text>
              </Pressable>
            );
          })}
      </View>
      <IF condition={currentIndex === 0}>
        <PersonalInfoItem />
      </IF>
      <IF condition={currentIndex === 1}>
        <IdentityInfoItem />
      </IF>
    </>
  );
};

export default ProfileSelectorTab;
