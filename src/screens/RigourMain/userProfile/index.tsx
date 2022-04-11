import React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {ScrollView} from 'react-native-gesture-handler';
import Svg, {Ellipse} from 'react-native-svg';

// Interface for Props
import {ScreenDefaultProps} from '../../../@types/interface';

// Helpers && Redux State/Actions && Hooks
import {authentication} from '../../../redux/features/auth';
import {useAppSelector} from '../../../hooks';

// Components:
import {AppStatusBar, Header} from '../../../components/shared';
import {ProfileSelectorTab} from '../../../components/userProfile';

// Styles:
import Styles from './styles';
import {COLORS, FONTS, Icons, SIZES, STYLES} from '../../../constants';
import {DASHBOARD_HOME} from '../../../navigation/routes';

// Width
const WIDTH = Dimensions.get('window').width;

const UserProfile = ({navigation}: ScreenDefaultProps) => {
  const {user} = useAppSelector(authentication);
  return (
    <SafeAreaView
      style={[STYLES.container, {backgroundColor: COLORS.fullbackground}]}>
      <AppStatusBar />
      <Header
        navigateTo={(): void => {
          navigation.reset({
            index: 0,
            routes: [{name: DASHBOARD_HOME}],
          });
        }}
        title="Profile"
        titleViewStyle={Styles.titleStyle}
        titleColor={COLORS.white}
      />
      <View style={[Styles.box]}>
        <Svg width={WIDTH} height={176}>
          <Ellipse
            cx={187}
            cy={-69.5}
            rx={320}
            ry={245.5}
            fill={COLORS.primary}
          />
        </Svg>
      </View>
      <ScrollView horizontal={false}>
        <View style={[Styles.root]}>
          <View style={[Styles.container]}>
            <View style={[Styles.imageRootContainer]}>
              <View
                style={[
                  Styles.imageContainer,
                  {borderColor: COLORS.white, shadowColor: COLORS.primary},
                ]}>
                <Image
                  source={{uri: 'https://picsum.photos/200/300'}}
                  style={[Styles.image]}
                  resizeMode="cover"
                />
              </View>
              <View style={[Styles.editOverlay]}>
                <TouchableOpacity
                  onPress={() => {
                    console.log('Edit');
                  }}
                  style={[
                    Styles.editContainer,
                    {backgroundColor: COLORS.primary},
                  ]}>
                  <Icons.MaterialCommunityIcons
                    name="account-edit"
                    size={15}
                    color={COLORS.white}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={[
                FONTS.h3,
                {color: COLORS.secondary, marginTop: SIZES.padding},
              ]}>
              {user?.fullName}
            </Text>

            <Text
              style={[
                FONTS.h3,
                {color: COLORS.secondaryLight, fontSize: SIZES.h4},
              ]}>
              {user?.email}
            </Text>
          </View>

          <View style={[Styles.tabsContainer]}>
            <ProfileSelectorTab />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfile;
