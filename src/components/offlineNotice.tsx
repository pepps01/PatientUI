import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useNetInfo} from '@react-native-community/netinfo';
import {COLORS, FONTS} from '../constants';

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    top: StatusBar.currentHeight,
  },
  overlay: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    opacity: 0.8,
    width: '100%',
    backgroundColor: COLORS.primary,
    marginTop: -10,
  },
});

const OfflineNotice = (): JSX.Element => {
  const netInfo = useNetInfo();

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) {
    return (
      <SafeAreaView style={styles.root}>
        <View style={styles.overlay}>
          <Text
            style={[FONTS.h2, {color: COLORS.white, fontFamily: FONTS.MEDIUM}]}>
            No internet connection
          </Text>
        </View>
      </SafeAreaView>
    );
  }
  return <></>;
};

export default OfflineNotice;
