import React from 'react';
import {FlatList} from 'react-native';

// Interface for props
import {BookingsItemProps} from '../../../../../@types/interface';

// Components
import BookingsItems from '../../../../../components/bookings';

const DATA = [
  {date: '12/12/2020', time: '12:00AM - 12:30PM', status: 'Canceled'},
  {date: '12/12/2021', time: '12:00AM - 12:30PM', status: 'Canceled'},
];

const CanceledBookings = (): JSX.Element => {
  return (
    <FlatList
      data={DATA}
      keyExtractor={(item, index): any => index}
      renderItem={({item, index}: BookingsItemProps): JSX.Element => (
        <BookingsItems item={item} index={index} status="Canceled" />
      )}
    />
  );
};

export default CanceledBookings;
