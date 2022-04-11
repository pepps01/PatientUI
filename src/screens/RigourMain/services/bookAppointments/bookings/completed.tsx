import React from 'react';
import {FlatList} from 'react-native';

// Interface for props
import {BookingsItemProps} from '../../../../../@types/interface';

// Components
import BookingsItems from '../../../../../components/bookings';

const DATA = [
  {date: '12/12/2020', time: '12:00AM - 12:30PM', status: 'Completed'},
  {date: '12/12/2021', time: '12:00AM - 12:30PM', status: 'Completed'},
];

const CompletedBookings = (): JSX.Element => {
  return (
    <FlatList
      data={DATA}
      keyExtractor={(item, index): any => index.toString()}
      renderItem={({item, index}: BookingsItemProps): JSX.Element => (
        <BookingsItems item={item} index={index} status="Completed" />
      )}
    />
  );
};

export default CompletedBookings;
