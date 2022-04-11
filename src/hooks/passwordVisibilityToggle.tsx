import {useState} from 'react';

export const useToggleVisibility = (): any => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);
  const [Icon, setIcon] = useState<string>('eye-with-line');

  const togglePasswordVisibility = (): any => {
    if (Icon === 'eye-with-line') {
      setIcon('eye');
      setIsPasswordVisible(!isPasswordVisible);
    } else if (Icon === 'eye') {
      setIcon('eye-with-line');
      setIsPasswordVisible(!isPasswordVisible);
    }
  };

  return {
    isPasswordVisible,
    Icon,
    togglePasswordVisibility,
  };
};
