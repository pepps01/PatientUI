import React from 'react';
import {Text} from 'react-native';
import {COLORS, SIZES} from '../../constants';

type Props = {
  error: string | any;
  visible?: boolean | any;
};

const ErrorMessage = ({error, visible}: Props): JSX.Element => {
  if (!visible || !error) return <></>;

  return (
    <Text
      style={[
        {
          color: COLORS.error,
          fontSize: SIZES.body3,
          marginHorizontal: SIZES.base,
        },
      ]}>
      {error}
    </Text>
  );
};

export default ErrorMessage;
