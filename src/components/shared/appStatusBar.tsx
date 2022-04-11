import React from 'react';
import {
  View,
  StatusBar,
  Platform,
  NativeModules,
  StatusBarProps,
} from 'react-native';

const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 50 : StatusBarManager.HEIGHT;

interface AppStatusBarProps extends StatusBarProps {
  backgroundColor?: string;
  barStyle?: 'light-content' | 'dark-content';
}

const AppStatusBar = ({
  backgroundColor,
  barStyle,
  ...props
}: AppStatusBarProps): JSX.Element => {
  return (
    <View style={{backgroundColor, height: STATUSBAR_HEIGHT}}>
      <StatusBar
        {...props}
        translucent={true}
        backgroundColor={backgroundColor}
        barStyle="dark-content"
      />
    </View>
  );
};

export default AppStatusBar;
