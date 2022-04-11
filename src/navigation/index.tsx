import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// Navigators constant
import {SPLASHSCREEN_SCENE, ONBOARDING_SCENE} from './routes';

// Redux, Hooks and Global State
import {authentication} from '../redux/features/auth';
import {useAppSelector} from '../hooks';

// App State for splashScreen && onBoarding
import {Splash, OnBoarding} from '../screens/scene';

// App State for Auth // Components
import AuthStack from './authStack';
import AppStack from './dashboardStack';

const AppNavigation = (): JSX.Element => {
  const user = useAppSelector(authentication);

  const authenticated = user.authenticated;
  const isCheckingUser = user.checkingUser;
  const onboardingUser = user.viewedOnboarding;
  const emailVerifiedStatus = user?.user?.emailVerifiedStatus.toString();
  const Stack = createStackNavigator();

  const SplashStack = (): JSX.Element => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={SPLASHSCREEN_SCENE} component={Splash} />
      </Stack.Navigator>
    );
  };

  const OnBoardingStack = (): JSX.Element => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ONBOARDING_SCENE} component={OnBoarding} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {isCheckingUser ? (
        <SplashStack />
      ) : onboardingUser && authenticated && emailVerifiedStatus ? (
        <AppStack />
      ) : onboardingUser && !authenticated ? (
        <AuthStack />
      ) : (
        <OnBoardingStack />
      )}
    </NavigationContainer>
  );
};

export default AppNavigation;
