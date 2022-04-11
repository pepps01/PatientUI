import React from 'react';
import {View, Text} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

// Interface for props
import {ScreenDefaultProps} from '../../../@types/interface';

// Navigation constants
import {DASHBOARD_HOME} from '../../../navigation/routes';

// Components
import {AppStatusBar, Header} from '../../../components/shared';

// Constants
import {COLORS} from '../../../constants';
import Styles from './styles';

const Wallet = ({navigation}: ScreenDefaultProps): JSX.Element => {
  return (
    <>
      <Header
        navigateTo={(): void => {
          navigation.reset({
            index: 0,
            routes: [{name: DASHBOARD_HOME}],
          });
        }}
        title="Wallet"
        titleColor={COLORS.secondary}
        titleViewStyle={Styles.titleViewStyle}
      />
    </>
  );
};

export default Wallet;
