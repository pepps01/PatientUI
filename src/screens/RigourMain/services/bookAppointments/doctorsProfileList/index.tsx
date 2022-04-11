import React, {useState} from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  FlatList,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {Tooltip} from 'react-native-elements';

// Interface for props
import {
  DoctorsProfileList,
  ScreenDefaultProps,
} from '../../../../../@types/interface/';

// Navigation routes
import {DASHBOARD_HOME} from '../../../../../navigation/routes';

// Mock Data
import DATA from './data';

// Components
import {
  AppStatusBar,
  CardView,
  CustomInput,
  Header,
} from '../../../../../components/shared';
import {GridView, ListView} from '../../../../../components/doctorsListing';

// Styles, Colors, SVGs
import Styles from './styles';
import {COLORS, SIZES, STYLES, Icons, FONTS} from '../../../../../constants';
import Background from '../../../../../assets/SVGs/doctorListingbg.svg';

// constants
const GRID_VIEW = 'GRID';
const LIST_VIEW = 'LIST';

const ListDoctors = ({navigation}: ScreenDefaultProps): JSX.Element => {
  const {width, height} = useWindowDimensions();

  // Show tool TextInputProps
  const [changeView, setView] = useState<string>(GRID_VIEW);

  // ToolTip to change the List View & Grid View
  const ToolTip = (): JSX.Element => {
    const [gridBg, setGridBgColor] = useState<boolean>(false);
    const [listBg, setListBgColor] = useState<boolean>(false);
    const gridColor = gridBg === true ? COLORS.inputBg : '';
    const listColor = listBg === true ? COLORS.inputBg : '';
    return (
      <CardView customStyle={[Styles.tooltip, {borderRadius: SIZES.base}]}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={(): any => {
            setListBgColor(true);
            setView(LIST_VIEW);
          }}>
          <View style={[Styles.contentTop, {backgroundColor: listColor}]}>
            <Icons.Foundation
              name="list"
              size={25}
              color={COLORS.placeholder}
            />
            <Text
              style={[
                FONTS.body2,
                {color: COLORS.placeholder, paddingLeft: SIZES.tiny},
              ]}>
              List View
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={(): any => {
            setGridBgColor(true);
            setView(GRID_VIEW);
          }}>
          <View style={[Styles.contentTip, {backgroundColor: gridColor}]}>
            <Icons.Entypo name="grid" size={30} color={COLORS.placeholder} />
            <Text
              style={[
                FONTS.body2,
                {color: COLORS.placeholder, marginLeft: SIZES.base},
              ]}>
              Grid View
            </Text>
          </View>
        </TouchableOpacity>
      </CardView>
    );
  };

  return (
    <SafeAreaView
      style={[
        STYLES.container,
        {backgroundColor: COLORS.fullbackground, width, height},
      ]}>
      <AppStatusBar backgroundColor={COLORS.transparent} />
      <View style={[Styles.overlay]}>
        <Background />
      </View>
      <Header
        navigateTo={() =>
          navigation.reset({
            index: 0,
            routes: [{name: DASHBOARD_HOME}],
          })
        }
        title="Doctors">
        <Tooltip
          popover={<ToolTip />}
          width={165}
          height={110}
          backgroundColor={COLORS.white}>
          <Icons.Entypo name="dots-three-vertical" size={25} />
        </Tooltip>
      </Header>
      <View
        style={[{marginVertical: SIZES.tiny, marginHorizontal: SIZES.margin}]}>
        <CustomInput
          direction="rtl"
          placeholder="Search Doctors"
          onPress={(): any => {
            console.log('//TODO: Search or Filter');
          }}
        />
      </View>
      <FlatList
        data={DATA}
        horizontal={false}
        keyExtractor={(item): any => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}: DoctorsProfileList): JSX.Element => {
          return changeView === GRID_VIEW ? (
            <GridView item={item} index={index} navigation={navigation} />
          ) : (
            <ListView item={item} navigation={navigation} />
          );
        }}
        key={changeView === GRID_VIEW ? 1 : 0}
        numColumns={changeView === GRID_VIEW ? 2 : 1}
        ListHeaderComponentStyle={[{marginVertical: SIZES.medium}]}
        ListHeaderComponent={<View />}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={[{marginVertical: SIZES.margin}]}
        contentContainerStyle={[{paddingHorizontal: SIZES.margin}]}
      />
    </SafeAreaView>
  );
};

export default ListDoctors;
