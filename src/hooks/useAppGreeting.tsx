import {useEffect, useState} from 'react';

export const useAppGreeting = (): any => {
  const [greeting, setGreeting] = useState<string>('');

  const Greeting = (): any => {
    const d: Date = new Date();
    const hours: number = d.getHours();

    if (hours < 12) {
      return setGreeting('Good Morning');
    }
    if (hours >= 12 && hours < 17) {
      return setGreeting('Good Afternoon');
    }
    return setGreeting('Good Evening');
  };

  useEffect(() => {
    Greeting();
  }, []);

  return {greeting};
};
