import React from 'react';
import {View} from 'react-native';

// Constants
import {SIZES} from '../../../constants';

// Components
import {CustomInput} from '../../shared';

const SearchBox = (): JSX.Element => {
  return (
    <View
      style={[{marginHorizontal: SIZES.margin, marginVertical: SIZES.tiny}]}>
      <CustomInput
        placeholder="Search by doctor name or health issue"
        direction="ltr"
        onPress={(): void => console.log('//TODO: Search Doctors')}
      />
    </View>
  );
};

export default SearchBox;
