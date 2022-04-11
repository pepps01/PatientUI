/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {LogBox, View, StyleSheet, Text} from 'react-native';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import Navigator from './navigation';
import OfflineNotice from './components/offlineNotice';

// TODO: https://github.com/software-mansion/react-native-gesture-handler/issues/1675

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <OfflineNotice />
      <Provider store={store}>
        <Navigator />
        <Toast />
      </Provider>
    </SafeAreaProvider>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   box: {
//     marginHorizontal: 16,
//     marginVertical: 16,
//   },
// });

export default App;
