import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

// interface for props
import {ScreenDefaultProps} from '../../@types/interface';

// Components
import {
  TopView,
  SearchBox,
  Services,
  BottomView,
} from '../../components/dashboard';

const Dashboard = ({navigation, ...props}: ScreenDefaultProps): JSX.Element => {
  return (
    <ScrollView>
      <TopView navigation={navigation} {...props} />
      <SearchBox />
      <Services />
      <BottomView navigation={navigation} />
    </ScrollView>
  );
};

export default Dashboard;
