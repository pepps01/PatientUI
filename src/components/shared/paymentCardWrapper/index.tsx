import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {ScrollView} from 'react-native-gesture-handler';
import {CheckBox} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

// Interface types for Props
import {PaymentCardType} from '../../../@types/interface';

// Components
import AppStatusBar from '../appStatusBar';
import CardView from '../cardView';
import CustomButton from '../customButton';
import Header from '../header';

// Styles && Colors && Icons && SVGs
import Styles from './styles';
import {STYLES, COLORS, Icons, SIZES, FONTS} from '../../../constants';
import {DCCard, FlutterLogo, CWallet, PatternBg} from './svgIcons';
import {VIDEO_CALLING_RTC} from '../../../navigation/routes';

const PaymentCardWrapper = ({
  children,
  label,
  customStyle,
}: PaymentCardType): JSX.Element => {
  const [check1, setCheck1] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const navigation: any = useNavigation();

  return (
    <SafeAreaView
      style={[STYLES.container, {backgroundColor: COLORS.fullbackground}]}>
      <AppStatusBar backgroundColor={COLORS.fullbackground} />
      <Header
        navigateTo={() => navigation.goBack()}
        title="Make payment"
        titleViewStyle={{marginLeft: -SIZES.bottom}}
      />
      <View style={[Styles.container, {marginHorizontal: SIZES.margin}]}>
        <View style={[Styles.topView]}>
          <View style={[Styles.description]}>
            <Text style={[FONTS.h4, {color: COLORS.secondary}]}>
              Booking to
            </Text>
            <TouchableOpacity>
              <Text style={[FONTS.h4, {color: COLORS.primary}]}>{label}</Text>
            </TouchableOpacity>
          </View>
          <CardView customStyle={[customStyle, Styles.wrapper]}>
            {children}
          </CardView>
        </View>
        <View style={[Styles.bottomView]}>
          <View style={[Styles.description]}>
            <Text style={[FONTS.h4, {color: COLORS.secondary}]}>
              Payment Method
            </Text>
            <TouchableOpacity>
              <Text style={[FONTS.h4, {color: COLORS.primary}]}>
                Add New Card
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View style={[Styles.paymentSelection]}>
              <View>
                <View
                  style={[Styles.layout, {backgroundColor: COLORS.background}]}>
                  <View style={[Styles.imageText]}>
                    <DCCard />
                    <Text
                      style={[
                        Styles.textInfo,
                        FONTS.h4,
                        {color: COLORS.secondary},
                      ]}>
                      Credit / Debit Card
                    </Text>
                  </View>
                  <View style={[Styles.clickDropdown]}>
                    <TouchableOpacity
                      onPress={() => {
                        setShowCards(true);
                      }}>
                      {showCards ? (
                        <Icons.Entypo
                          name="chevron-thin-down"
                          size={12}
                          color={COLORS.secondaryLight}
                        />
                      ) : (
                        <Icons.Entypo
                          name="chevron-thin-right"
                          size={12}
                          color={COLORS.secondaryLight}
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>

                {showCards && (
                  <View style={[Styles.cardDetails]}>
                    <View
                      style={[
                        Styles.cardInfo,
                        {backgroundColor: COLORS.white},
                      ]}>
                      <View style={[Styles.overlayPattern]}>
                        <PatternBg width={142} height={118} />
                      </View>
                      <View style={[Styles.titleCard]}>
                        <Text
                          style={[
                            FONTS.h3,
                            {color: COLORS.secondary, fontSize: SIZES.h4},
                          ]}>
                          France Mark
                        </Text>
                        <Text style={[FONTS.body3, {color: COLORS.secondary}]}>
                          **** **** **** 1234
                        </Text>
                      </View>
                      <View style={[Styles.cardFooter]}>
                        <View>
                          <Text
                            style={[
                              FONTS.body3,
                              {color: COLORS.secondary, fontSize: SIZES.h5},
                            ]}>
                            05 / 24
                          </Text>
                        </View>
                        <View></View>
                      </View>
                    </View>
                    <View
                      style={[
                        Styles.cardInfo,
                        {backgroundColor: COLORS.white},
                      ]}>
                      <View style={[Styles.overlayPattern]}>
                        <PatternBg width={142} height={118} />
                      </View>
                      <View style={[Styles.titleCard]}>
                        <Text
                          style={[
                            FONTS.h3,
                            {color: COLORS.secondary, fontSize: SIZES.h4},
                          ]}>
                          Mark Sushi
                        </Text>
                        <Text style={[FONTS.body3, {color: COLORS.secondary}]}>
                          **** **** **** 7342
                        </Text>
                      </View>
                      <View style={[Styles.cardFooter]}>
                        <View>
                          <Text
                            style={[
                              FONTS.body3,
                              {color: COLORS.secondary, fontSize: SIZES.h5},
                            ]}>
                            02 / 25
                          </Text>
                        </View>
                        <View></View>
                      </View>
                    </View>
                  </View>
                )}
              </View>
              <View
                style={[Styles.layout, {backgroundColor: COLORS.background}]}>
                <View style={[Styles.imageText]}>
                  <CWallet />
                  <Text
                    style={[
                      Styles.textInfo,
                      FONTS.h4,
                      {color: COLORS.secondary},
                    ]}>
                    Cash
                  </Text>
                </View>
                <CheckBox
                  center
                  containerStyle={[
                    Styles.checkBox,
                    {borderColor: COLORS.primary},
                  ]}
                  checkedIcon="check"
                  uncheckedColor={COLORS.secondaryLight}
                  checkedColor={COLORS.secondary}
                  checked={check1}
                  onPress={(): any => setCheck1(!check1)}
                />
              </View>
              <View
                style={[Styles.layout, {backgroundColor: COLORS.background}]}>
                <View style={[Styles.imageText]}>
                  <FlutterLogo />
                  <Text
                    style={[
                      Styles.textInfo,
                      FONTS.h4,
                      {color: COLORS.secondary},
                    ]}>
                    FlutterWave
                  </Text>
                </View>
                <CheckBox
                  containerStyle={[
                    Styles.checkBox,
                    {borderColor: COLORS.primary},
                  ]}
                  checkedIcon="check"
                  uncheckedColor={COLORS.secondaryLight}
                  checkedColor={COLORS.secondary}
                />
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={[Styles.footer]}>
          <CustomButton
            variant="primary"
            loading={false}
            label="Make Payment"
            onPress={(): void => {
              navigation.navigate(VIDEO_CALLING_RTC as any);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentCardWrapper;
