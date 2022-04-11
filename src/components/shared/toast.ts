import Toast from 'react-native-toast-message';

type Props = {
  text1: string | undefined;
  text2: string | undefined;
};

const Error = ({text1, text2}: Props): any => {
  Toast.show({
    type: 'error',
    position: 'top',
    text1: text1 as string,
    text2: text2 as string,
    visibilityTime: 4500,
    autoHide: true,
    topOffset: 60,
    bottomOffset: 50,
  });
};

const Success = ({text1, text2}: Props): any => {
  Toast.show({
    type: 'success',
    position: 'top',
    text1,
    text2,
    visibilityTime: 4500,
    autoHide: true,
    topOffset: 60,
    bottomOffset: 50,
  });
};

export default {
  Error,
  Success,
};
