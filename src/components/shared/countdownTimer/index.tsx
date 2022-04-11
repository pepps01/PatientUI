import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';

// Helper Function
import {TimerCountDown} from '../../../helpers';
// Constants
import {COLORS, SIZES} from '../../../constants';

interface Props {
  seconds: number;
}

const CountDownTimer = ({seconds}: Props): JSX.Element => {
  const [counter, setCounter] = useState<number>(seconds);

  useEffect(() => {
    const timer: any =
      counter > 0 &&
      setInterval(() => {
        if (counter > 0) setCounter(counter - 1);
      }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [counter]);

  return (
    <>
      <Text style={[{color: COLORS.primary, fontSize: SIZES.body2}]}>
        {TimerCountDown(counter)}
      </Text>
    </>
  );
};

export default CountDownTimer;
