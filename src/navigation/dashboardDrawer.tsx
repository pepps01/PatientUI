import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SafeAreaView from 'react-native-safe-area-view';

// Components && Routes
import CustomDrawerContent from './customDrawerContent';
import {AppStatusBar} from '../components/shared';
import {Cart} from '../screens/RigourMain';
import {CART_SCREEN_DRAWER, DASHBOARD_TAB_STACK} from './routes';

import DashboardTabSelector from './dashboardTabSelector';

// Styles, COLORS
import {STYLES, COLORS} from '../constants';

const DashboardDrawerView = (): JSX.Element => {
  const Draw = createDrawerNavigator();

  return (
    <SafeAreaView style={[STYLES.container, {backgroundColor: COLORS.primary}]}>
      <AppStatusBar backgroundColor={COLORS.primary} translucent={true} />
      <Draw.Navigator
        initialRouteName={DASHBOARD_TAB_STACK}
        screenOptions={{
          drawerHideStatusBarOnOpen: true,
          headerShown: false,
          drawerStyle: {
            backgroundColor: COLORS.transparent,
            width: '70%',
            paddingRight: 20,
          },
          overlayColor: COLORS.transparent,
          drawerType: 'slide',
          sceneContainerStyle: {
            backgroundColor: COLORS.transparent,
          },
        }}
        drawerContent={(props): JSX.Element => {
          return <CustomDrawerContent navigation={props.navigation} />;
        }}>
        <Draw.Screen name={DASHBOARD_TAB_STACK}>
          {(props): any => <DashboardTabSelector {...props} />}
        </Draw.Screen>
        <Draw.Screen name={CART_SCREEN_DRAWER} component={Cart} />
      </Draw.Navigator>
    </SafeAreaView>
  );
};

export default DashboardDrawerView;
