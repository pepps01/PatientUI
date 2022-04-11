import React from 'react';
import {View} from 'react-native';

// Interface for props
import {CardViewType} from '../../../@types/interface';

// styles, Colors
import Styles from './styles';
import {COLORS} from '../../../constants';

const Layout = ({children, customStyle}: CardViewType): JSX.Element => {
  return (
    <View
      style={[
        Styles.container,
        customStyle,
        {shadowColor: COLORS.primary, backgroundColor: COLORS.white},
      ]}>
      {children}
    </View>
  );
};

export default Layout;
